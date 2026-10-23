import type { Landing } from "@/i18n/landing/schema";

export default {
	meta: {
		title: "Jota — your music, your rules",
		description:
			"A self-hosted music streaming app for desktop and mobile. Browse Spotify, play the audio through YouTube, and start a room over a relay you own. No cloud. No tracking. No subscriptions.",
	},
	nav: {
		features: "Features",
		tour: "In use",
		github: "GitHub",
		download: "Download",
		language: "Language",
	},
	hero: {
		badge: "Self-hosted music streaming",
		title: "Your music, your rules.",
		body: "A self-hosted music streaming app for desktop and mobile. Browse Spotify, play the audio through YouTube, and start a room over a relay you own.",
		promises: {
			cloud: "No cloud",
			tracking: "No tracking",
			subscriptions: "No subscriptions",
			source: "Open source",
		},
		download: "Download Jota",
		source: "View source",
		note: "Linux · Windows · macOS · Android — free, GPL-3.0.",
		image: "Home — saved playlists from Spotify and YouTube",
	},
	features: {
		eyebrow: "Features",
		title: "Everything in one player.",
		cards: {
			sources: {
				title: "Two sources, one player",
				body: "Browse Spotify and YouTube side by side and play either from the same queue and search bar. Spotify is optional — the YouTube side works standalone.",
			},
			radio: {
				title: "Song radio",
				body: "Turn any Spotify track into a station of similar songs and play it like any other playlist.",
			},
			spotify: {
				title: "Browse Spotify",
				body: "Log in to browse playlists, albums, artists, tracks and other users' public playlists — type a song, an artist or paste a link.",
			},
			youtube: {
				title: "YouTube first-class",
				body: "Search videos, playlists and channels, save them to your home shelf, or paste a link to jump straight in. Fix a wrong match by hand.",
			},
			player: {
				title: "Full player",
				body: "Play/pause, seek, volume, shuffle and repeat, plus a queue you can reorder and prune. Jota picks up where you left off after a restart.",
			},
			rooms: {
				title: "Rooms",
				body: "Save a room, see who is listening, and sync queue, play/pause, position, shuffle and repeat across devices over your own WebSocket relay.",
			},
			media: {
				title: "Native media controls",
				body: "Media keys, lock-screen and notification controls on desktop and mobile.",
			},
			privacy: {
				title: "Private by default",
				body: "Data stays local. No accounts, no telemetry, no third-party servers — save the app log from settings when reporting a bug.",
			},
		},
		also: {
			crossPlatform: "Cross-platform, one codebase",
			updates: "Auto-update in place",
			languages: "English and Spanish",
			playlists: "Custom local playlists",
			following: "Following across sources",
			local: "Data stays local",
		},
	},
	tour: {
		eyebrow: "In use",
		title: "Open it, search, press play.",
		shots: {
			search: {
				alt: "Search across Spotify and YouTube",
				label: "Search",
				title: "One search bar, two sources.",
				body: "Type a song, an artist or paste a link — results from Spotify and YouTube land in the same list, ready to play from the same queue.",
			},
			rooms: {
				alt: "Rooms — sync queue and play/pause across devices",
				label: "Rooms",
				title: "Listen together, over your own relay.",
				body: "Save a room, see who is listening, and sync queue, play/pause, position, shuffle and repeat across devices — through a WebSocket relay you host yourself.",
			},
		},
		relay: {
			title: "Rooms run on your relay",
			body: [
				"Syncing is the only part of Jota that talks to a server — and that server is yours. The relay lives in its own repo: one Go binary or the published Docker image, then point Jota at your own ",
				{ code: "wss://" },
				" URL.",
			],
			points: {
				code: {
					title: "Join by code",
					body: "The host shares a short room code and anyone holding it joins. Set a room password too if the code gets passed around.",
				},
				catchup: {
					title: "Late joiners catch up",
					body: "The relay caches the last playback state and syncs clocks, so a reconnect or a new device lands on the same beat instead of starting cold.",
				},
				tune: {
					title: "Tune it or lock it",
					body: [
						"Environment variables for the guest cap, room lifetime and play lead. ",
						{ code: "AUTH_TOKEN" },
						" keeps the socket private; put Caddy or nginx in front for TLS.",
					],
				},
			},
			cta: "Jota-Music/relay",
		},
		download: "Try it — download Jota",
	},
	download: {
		eyebrow: "Download",
		title: "Pick your platform.",
		body: [
			"Grab a build straight from here — no signup, no detours. Jota checks for updates on launch and installs them in place on AppImage, macOS ",
			{ code: ".app" },
			", Windows per-user and Android.",
		],
		rows: {
			linux: {
				platform: "Linux",
				artifacts: {
					"jota.deb": ".deb",
					"jota.rpm": ".rpm",
					"jota-x86_64.AppImage": ".AppImage",
					"jota.flatpak": ".flatpak",
					"jota.pkg.tar.zst": "Arch",
				},
				note: "AppImage updates in place",
			},
			android: {
				platform: "Android",
				artifacts: { "jota.apk": ".apk" },
				note: "Updates in place on launch",
			},
			windows: {
				platform: "Windows",
				artifacts: { "jota-amd64-installer.exe": "installer .exe" },
				note: "Per-user installs in place",
			},
			macos: {
				platform: "macOS",
				artifacts: { "jota.dmg": "universal .dmg" },
				note: "Updates in place on launch",
			},
		},
		legal: [
			"Windows ",
			{ code: ".exe" },
			" and macOS ",
			{ code: ".dmg" },
			" are unsigned — SmartScreen and Gatekeeper may flag them. Checksums are in ",
			{ link: "sums", label: "SHA256SUMS" },
			", and every past version lives on the ",
			{ link: "releases", label: "releases page" },
			".",
		],
		warning: [
			"The app is not code-signed, but it is safe: Jota is open source, so anyone can review the code. Signing costs money we would rather spend on the app itself. On some devices the system may suggest not installing it — you can ignore that warning.",
		],
	},
	faq: {
		eyebrow: "FAQ",
		title: "Common questions.",
		label: "Frequently asked questions",
		items: [
			{
				q: "Does Jota work without Spotify?",
				a: "Yes. Spotify is optional — the YouTube side works standalone. You can browse YouTube, create playlists, and listen without any Spotify account.",
			},
			{
				q: "Can I edit a Spotify or YouTube playlist in Jota?",
				a: "No. Saved Spotify and YouTube playlists are read-only mirrors: edit them in Spotify or YouTube and Jota picks the changes up the next time the playlist loads. For lists of your own, use local playlists — they mix Spotify and YouTube tracks and reorder by dragging.",
			},
			{
				q: "Is my data sent to any servers?",
				a: "No. Data stays local. No accounts, no telemetry, no third-party servers. Playback is fetched at runtime from your own session.",
			},
			{
				q: "Why does Windows / macOS warn me about the download?",
				a: "The Windows .exe and macOS .dmg are unsigned, so SmartScreen and Gatekeeper may flag them. This is a known limitation of hobby-project releases.",
			},
			{
				q: "How do updates work?",
				a: "On AppImage, macOS .app, Windows per-user and Android, Jota checks GitHub releases on launch and installs itself in place with SHA256SUMS verification. Other channels fall back to the releases page.",
			},
			{
				q: "What are Rooms?",
				a: "Rooms sync queue, play/pause, position, shuffle and repeat across devices over your own WebSocket relay. See who's listening in real time. You run the relay yourself via Jota-Music/relay.",
			},
			{
				q: "Is Jota official?",
				a: "No. Jota is an independent, unofficial client. Not affiliated with, endorsed or sponsored by Spotify AB, Google LLC or any music label.",
			},
		],
		more: [
			"More in the ",
			{ link: "wiki", label: "wiki" },
			" or open an ",
			{ link: "issues", label: "issue" },
			".",
		],
	},
	stories: {
		eyebrow: "Story",
		title: "Share Jota in your stories.",
		body: "A ready-made Instagram image with the app in a nutshell and a real screenshot of the player.",
		download: "Download PNG",
		share: "Share",
		instagram: "Share on Instagram",
		hint: "1080 × 1920 PNG, no watermark.",
		instructions: "Share on Instagram",
		intro: "Enjoyed the app? Share it in a tap with a ready-made story.",
		free: "Totally free",
		step1: "Copy the link to your clipboard.",
		step2: "Download the story image.",
		step3: "Open Instagram, create a story, add the image and paste the link.",
		copy: "Copy link",
		copied: "Copied",
	},
	footer: {
		headline: ["No cloud.", "No tracking.", "No subscriptions."],
		links: {
			github: "GitHub",
			releases: "Releases",
			relay: "Relay",
			stories: "Share a story",
			warp: "WARP guide",
		},
		github: "Jota on GitHub",
		notice:
			"Jota is an independent, unofficial client. Not affiliated with, endorsed or sponsored by Spotify AB, Google LLC or any music label. Playback is fetched at runtime from your own session; streamed audio belongs to its rights holders.",
		credit: [
			"Developed by ",
			{ link: "author", label: "salvadorsru" },
			" · ",
			{ link: "license", label: "GPL-3.0" },
			" · © 2026",
		],
	},
} satisfies Landing;
