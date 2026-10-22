import type { Landing } from "@/i18n/landing/schema";

export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

const loaders: Record<Locale, () => Promise<{ default: Landing }>> = {
	en: () => import("@/i18n/landing/en"),
	es: () => import("@/i18n/landing/es"),
};

export async function landing(locale: string | undefined): Promise<Landing> {
	const load = loaders[locale as Locale] ?? loaders[defaultLocale];
	return (await load()).default;
}

export function path(locale: Locale): string {
	return locale === defaultLocale ? "/" : `/${locale}/`;
}
