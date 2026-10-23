import type { Landing } from "@/i18n/landing/schema";

export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

const loaders: Record<Locale, () => Promise<{ default: Landing }>> = {
	en: () => import("@/i18n/landing/en"),
	es: () => import("@/i18n/landing/es"),
};

export function match(pathname: string): Locale {
	const [first] = pathname.split("/").filter(Boolean);
	return locales.includes(first as Locale) ? (first as Locale) : defaultLocale;
}

export async function landing(locale: Locale): Promise<Landing> {
	return (await loaders[locale]()).default;
}

export function path(locale: Locale): string {
	return locale === defaultLocale ? "/" : `/${locale}/`;
}

export function localizedPath(pathname: string, locale: Locale): string {
	const parts = pathname.split("/").filter(Boolean);
	const rest = locales.includes(parts[0] as Locale) ? parts.slice(1) : parts;
	const base = path(locale);
	return rest.length ? `${base}${rest.join("/")}/` : base;
}
