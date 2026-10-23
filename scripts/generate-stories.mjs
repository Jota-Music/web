import { createCanvas, loadImage } from "@napi-rs/canvas";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const PUBLIC = path.join(ROOT, "public");
const LOCALES = ["en", "es"];

const SANS = 'sans-serif';
const PAPER = "#09090b";
const INK = "#fafafa";
const MUTED = "#a1a1aa";
const SURFACE = "#18181b";
const EDGE = "#27272a";
const ACCENT = "#ff6dd6";

function rgba(hex, alpha) {
	const n = Number.parseInt(hex.slice(1), 16);
	return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
}

function font(weight, size) {
	return `${weight} ${size}px ${SANS}`;
}

function round(ctx, x, y, w, h, r) {
	ctx.beginPath();
	ctx.roundRect(x, y, w, h, r);
}

function wrap(ctx, text, max) {
	const lines = [];
	for (const paragraph of String(text).split("\n")) {
		let line = "";
		for (const word of paragraph.split(/\s+/).filter(Boolean)) {
			const next = line ? `${line} ${word}` : word;
			if (line && ctx.measureText(next).width > max) {
				lines.push(line);
				line = word;
			} else {
				line = next;
			}
		}
		if (line) lines.push(line);
	}
	return lines;
}

async function draw(locale) {
	const landing = JSON.parse(fs.readFileSync(path.join(ROOT, "src", "i18n", "landing", `${locale}.ts`), "utf8").replace(/^export default /, "").replace(/;?\s*$/, ""));
	// fallback: read as module via dynamic import
}

// Use dynamic import instead
async function main() {
	const [icon, shot] = await Promise.all([
		loadImage(path.join(PUBLIC, "apple-touch-icon.png")),
		loadImage(path.join(PUBLIC, "img", "screenshot-home.png")),
	]);

	for (const locale of LOCALES) {
		const mod = await import(path.join(ROOT, "src", "i18n", "landing", `${locale}.ts`));
		const t = mod.default;
		const canvas = createCanvas(1080, 1920);
		const ctx = canvas.getContext("2d");

		const left = 96;
		const right = 1080 - 96;
		const max = right - left;
		const top = 260;
		const bottom = 1680;

		ctx.fillStyle = PAPER;
		ctx.fillRect(0, 0, 1080, 1920);

		const bloom = ctx.createRadialGradient(1080 / 2, 0, 0, 1080 / 2, 0, 1100);
		bloom.addColorStop(0, rgba(ACCENT, 0.3));
		bloom.addColorStop(1, rgba(ACCENT, 0));
		ctx.fillStyle = bloom;
		ctx.fillRect(0, 0, 1080, 1100);

		ctx.textAlign = "left";
		ctx.textBaseline = "top";

		let y = top;

		ctx.save();
		round(ctx, left, y, 112, 112, 28);
		ctx.clip();
		ctx.drawImage(icon, left, y, 112, 112);
		ctx.restore();
		y += 164;

		ctx.font = font(700, 120);
		ctx.fillStyle = INK;
		ctx.fillText("Jota", left, y);
		y += 152;

		y += 46;

		ctx.font = font(700, 28);
		const badgeText = t.stories.free;
		const badgeW = ctx.measureText(badgeText).width + 32;
		round(ctx, left, y, badgeW, 40, 20);
		ctx.fillStyle = ACCENT;
		ctx.fill();
		ctx.fillStyle = "#09090b";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillText(badgeText, left + badgeW / 2, y + 20);
		ctx.textAlign = "left";
		ctx.textBaseline = "top";
		y += 56;

		ctx.font = font(700, 56);
		ctx.fillStyle = INK;
		for (const line of wrap(ctx, t.hero.title, max)) {
			ctx.fillText(line, left, y);
			y += 68;
		}
		y += 16;

		ctx.font = font(400, 36);
		ctx.fillStyle = MUTED;
		for (const line of wrap(ctx, t.stories.imageBody, max)) {
			ctx.fillText(line, left, y);
			y += 46;
		}
		y += 44;

		ctx.font = font(600, 32);
		const pill = 68;
		const gap = 14;
		const col = (max - gap) / 2;
		const labels = Object.values(t.hero.promises);
		let x = left;
		let i = 0;
		for (const label of labels) {
			const width = col;
			if (i > 0 && i % 2 === 0) {
				x = left;
				y += pill + gap;
			}
			round(ctx, x, y, width, pill, pill / 2);
			ctx.fillStyle = SURFACE;
			ctx.fill();
			ctx.strokeStyle = EDGE;
			ctx.lineWidth = 2;
			ctx.stroke();
			ctx.fillStyle = "#d4d4d8";
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.fillText(label, x + width / 2, y + pill / 2, width - 24);
			ctx.textAlign = "left";
			ctx.textBaseline = "top";
			x += width + gap;
			i += 1;
		}
		y += pill + 28;

		ctx.font = font(500, 24);
		ctx.fillStyle = MUTED;
		ctx.textAlign = "left";
		ctx.textBaseline = "middle";
		ctx.fillText("Linux  ·  Android  ·  Windows  ·  macOS", left, y + 12);
		ctx.textBaseline = "top";

		const boxH = 56;
		const boxY = y + 84;
		const text = "LINK AQUÍ";
		ctx.font = font(600, 20);
		const boxW = ctx.measureText(text).width + 24;
		ctx.setLineDash([12, 10]);
		ctx.strokeStyle = MUTED;
		ctx.lineWidth = 2;
		round(ctx, left, boxY, boxW, boxH, 16);
		ctx.stroke();
		ctx.setLineDash([]);
		ctx.fillStyle = MUTED;
		ctx.textAlign = "left";
		ctx.textBaseline = "middle";
		ctx.fillText(text, left + 12, boxY + boxH / 2);

		const shotY = boxY + boxH + 72;
		const height = Math.max(bottom - shotY, 0);

		if (shot) {
			const crop = (shot.width * height) / max;
			ctx.save();
			round(ctx, left, shotY, max, height, 28);
			ctx.clip();
			ctx.drawImage(shot, 0, 0, shot.width, crop, left, shotY, max, height);
			ctx.restore();
			round(ctx, left, shotY, max, height, 28);
			ctx.strokeStyle = EDGE;
			ctx.lineWidth = 2;
			ctx.stroke();
		}

		const out = path.join(PUBLIC, `stories-${locale}.png`);
		const buf = canvas.toBuffer("image/png");
		fs.writeFileSync(out, buf);
		console.log("wrote", out);
	}
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
