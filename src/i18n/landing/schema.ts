export type Ref = "sums" | "releases" | "wiki" | "issues" | "author" | "license";

export type Inline = string | { code: string } | { link: Ref; label: string };

export type Phrase = string | Inline[];

export type PromiseKey = "cloud" | "tracking" | "subscriptions" | "source";

export type CardKey =
	| "sources"
	| "radio"
	| "spotify"
	| "youtube"
	| "player"
	| "rooms"
	| "media"
	| "privacy";

export type AlsoKey =
	| "crossPlatform"
	| "updates"
	| "languages"
	| "playlists"
	| "following"
	| "local";

export type ShotKey = "search" | "rooms";

export type PointKey = "code" | "catchup" | "tune";

export type RowKey = "linux" | "android" | "windows" | "macos";

export type FooterKey = "github" | "releases" | "relay" | "warp" | "stories";

export interface Landing {
	meta: {
		title: string;
		description: string;
	};
	nav: {
		features: string;
		tour: string;
		github: string;
		download: string;
		language: string;
		languagePrompt: {
			title: string;
			body: string;
			switch: string;
			keep: string;
		};
	};
	hero: {
		badge: string;
		title: string;
		body: string;
		promises: Record<PromiseKey, string>;
		download: string;
		source: string;
		note: string;
		image: string;
	};
	features: {
		eyebrow: string;
		title: string;
		cards: Record<CardKey, { title: string; body: string }>;
		also: Record<AlsoKey, string>;
	};
	tour: {
		eyebrow: string;
		title: string;
		shots: Record<ShotKey, { alt: string; label: string; title: string; body: string }>;
		relay: {
			title: string;
			body: Phrase;
			points: Record<PointKey, { title: string; body: Phrase }>;
			cta: string;
		};
		download: string;
	};
	download: {
		eyebrow: string;
		title: string;
		body: Phrase;
		rows: Record<RowKey, { platform: string; artifacts: Record<string, string>; note: string }>;
		legal: Phrase;
		warning: Phrase;
	};
	faq: {
		eyebrow: string;
		title: string;
		label: string;
		items: { q: string; a: string }[];
		more: Phrase;
	};
	stories: {
		eyebrow: string;
		title: string;
		body: string;
		download: string;
		share: string;
		instagram: string;
		hint: string;
		instructions: string;
		intro: string;
		free: string;
		step1: string;
		step2: string;
		step3: string;
		copy: string;
		copied: string;
	};
	footer: {
		headline: string[];
		links: Record<FooterKey, string>;
		github: string;
		notice: string;
		credit: Phrase;
	};
}
