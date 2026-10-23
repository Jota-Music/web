import type { Landing } from "@/i18n/landing/schema";

export default {
	meta: {
		title: "Jota — tu música, tus reglas",
		description:
			"Una app de streaming de música autoalojada para escritorio y móvil. Explora Spotify, reproduce el audio con YouTube y abre una sala sobre un relay propio. Sin nube. Sin rastreo. Sin suscripciones.",
	},
	nav: {
		features: "Funciones",
		tour: "En uso",
		github: "GitHub",
		download: "Descargar",
		language: "Idioma",
		languagePrompt: {
			title: "Idioma",
			body: "Este sitio está en {current}. ¿Cambiar a {device}?",
			switch: "Cambiar",
			keep: "Mantener",
		},
	},
	hero: {
		badge: "Streaming de música autoalojado",
		title: "Tu música, tus reglas.",
		body: "Una app de streaming de música autoalojada para escritorio y móvil. Explora Spotify, reproduce el audio con YouTube y abre una sala sobre un relay propio.",
		promises: {
			cloud: "Sin nube",
			tracking: "Sin rastreo",
			subscriptions: "Sin suscripciones",
			source: "Código abierto",
		},
		download: "Descargar Jota",
		source: "Ver código",
		note: "Linux · Windows · macOS · Android — gratis, GPL-3.0.",
		image: "Inicio — playlists guardadas de Spotify y YouTube",
	},
	features: {
		eyebrow: "Funciones",
		title: "Todo en un solo reproductor.",
		cards: {
			sources: {
				title: "Dos fuentes, un reproductor",
				body: "Explora Spotify y YouTube en paralelo y reproduce desde la misma cola y la misma barra de búsqueda. Spotify es opcional: la parte de YouTube funciona por sí sola.",
			},
			radio: {
				title: "Radio de canciones",
				body: "Convierte cualquier canción de Spotify en una emisora de temas parecidos y reprodúcela como cualquier otra playlist.",
			},
			spotify: {
				title: "Explora Spotify",
				body: "Inicia sesión para explorar playlists, álbumes, artistas, canciones y las playlists públicas de otros usuarios: escribe una canción, un artista o pega un enlace.",
			},
			youtube: {
				title: "YouTube de primera clase",
				body: "Busca vídeos, playlists y canales, guárdalos en tu estantería de inicio o pega un enlace para entrar directo. Corrige a mano cualquier coincidencia equivocada.",
			},
			player: {
				title: "Reproductor completo",
				body: "Reproducir/pausar, avanzar, volumen, aleatorio y repetir, más una cola que puedes reordenar y recortar. Jota retoma donde lo dejaste tras reiniciar.",
			},
			rooms: {
				title: "Salas",
				body: "Guarda una sala, mira quién está escuchando y sincroniza cola, reproducción, posición, aleatorio y repetición entre dispositivos a través de tu propio relay WebSocket.",
			},
			media: {
				title: "Controles multimedia nativos",
				body: "Teclas multimedia y controles en la pantalla de bloqueo y las notificaciones, en escritorio y móvil.",
			},
			privacy: {
				title: "Privado por defecto",
				body: "Los datos se quedan en local. Sin cuentas, sin telemetría, sin servidores de terceros: guarda el log de la app desde los ajustes cuando reportes un fallo.",
			},
		},
		also: {
			crossPlatform: "Multiplataforma, un solo código",
			updates: "Actualización automática in situ",
			languages: "Inglés y español",
			playlists: "Playlists locales propias",
			following: "Seguimiento entre fuentes",
			local: "Los datos se quedan en local",
		},
	},
	tour: {
		eyebrow: "En uso",
		title: "Ábrela, busca, dale al play.",
		shots: {
			search: {
				alt: "Búsqueda en Spotify y YouTube",
				label: "Búsqueda",
				title: "Una barra de búsqueda, dos fuentes.",
				body: "Escribe una canción, un artista o pega un enlace: los resultados de Spotify y YouTube caen en la misma lista, listos para sonar desde la misma cola.",
			},
			rooms: {
				alt: "Salas — sincroniza cola y reproducción entre dispositivos",
				label: "Salas",
				title: "Escucha en grupo, sobre tu propio relay.",
				body: "Guarda una sala, mira quién está escuchando y sincroniza cola, reproducción, posición, aleatorio y repetición entre dispositivos, a través de un relay WebSocket que alojas tú.",
			},
		},
		relay: {
			title: "Las salas corren en tu relay",
			body: [
				"La sincronización es la única parte de Jota que habla con un servidor, y ese servidor es tuyo. El relay vive en su propio repo: un binario de Go o la imagen de Docker publicada, y luego apunta Jota a tu propia URL ",
				{ code: "wss://" },
				".",
			],
			points: {
				code: {
					title: "Únete con un código",
					body: "Quien aloja comparte un código corto de sala y cualquiera que lo tenga se une. Puedes poner también una contraseña por si el código circula.",
				},
				catchup: {
					title: "Quien llega tarde se pone al día",
					body: "El relay guarda en caché el último estado de reproducción y sincroniza los relojes, así que una reconexión o un dispositivo nuevo aterriza en el mismo punto en vez de empezar en frío.",
				},
				tune: {
					title: "Ajústalo o bloquéalo",
					body: [
						"Variables de entorno para el límite de invitados, la duración de la sala y el margen de reproducción. ",
						{ code: "AUTH_TOKEN" },
						" mantiene el socket privado; pon Caddy o nginx delante para TLS.",
					],
				},
			},
			cta: "Jota-Music/relay",
		},
		download: "Pruébala: descarga Jota",
	},
	download: {
		eyebrow: "Descargar",
		title: "Elige tu plataforma.",
		body: [
			"Coge una compilación directamente desde aquí: sin registro, sin rodeos. Jota busca actualizaciones al arrancar y las instala in situ en AppImage, macOS ",
			{ code: ".app" },
			", Windows por usuario y Android.",
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
				note: "AppImage se actualiza in situ",
			},
			android: {
				platform: "Android",
				artifacts: { "jota.apk": ".apk" },
				note: "Se actualiza in situ al arrancar",
			},
			windows: {
				platform: "Windows",
				artifacts: { "jota-amd64-installer.exe": "instalador .exe" },
				note: "Instalación por usuario in situ",
			},
			macos: {
				platform: "macOS",
				artifacts: { "jota.dmg": "universal .dmg" },
				note: "Se actualiza in situ al arrancar",
			},
		},
		legal: [
			"Windows ",
			{ code: ".exe" },
			" y macOS ",
			{ code: ".dmg" },
			" no están firmados: SmartScreen y Gatekeeper pueden avisar. Los checksums están en ",
			{ link: "sums", label: "SHA256SUMS" },
			", y todas las versiones anteriores viven en la ",
			{ link: "releases", label: "página de versiones" },
			".",
		],
		warning: [
			"Jota es un proyecto personal de @salvadorsru. La app no está firmada, pero es segura: Jota es código abierto y cualquiera puede revisar su código. Como la app es completamente gratuita y no genera ingresos, prefiero dedicar mis recursos a mejorarla en lugar de pagar certificados de firma. En algunos dispositivos el sistema puede avisar contra su instalación: puedes ignorar ese aviso sin problema.",
		],
	},
	faq: {
		eyebrow: "FAQ",
		title: "Preguntas habituales.",
		label: "Preguntas frecuentes",
		items: [
			{
				q: "¿Jota funciona sin Spotify?",
				a: "Sí. Spotify es opcional: la parte de YouTube funciona por sí sola. Puedes explorar YouTube, crear playlists y escuchar sin ninguna cuenta de Spotify.",
			},
			{
				q: "¿Puedo editar una playlist de Spotify o YouTube en Jota?",
				a: "No. Las playlists de Spotify y YouTube guardadas son espejos de solo lectura: edítalas en Spotify o YouTube y Jota recogerá los cambios la próxima vez que cargue la playlist. Para listas propias están las playlists locales, que mezclan temas de Spotify y YouTube y se reordenan arrastrando.",
			},
			{
				q: "¿Mis datos se envían a algún servidor?",
				a: "No. Los datos se quedan en local. Sin cuentas, sin telemetría, sin servidores de terceros. La reproducción se obtiene en tiempo de ejecución desde tu propia sesión.",
			},
			{
				q: "¿Por qué Windows / macOS me avisan al descargar?",
				a: "El .exe de Windows y el .dmg de macOS no están firmados, así que SmartScreen y Gatekeeper pueden avisar. Es una limitación conocida de las releases de un proyecto amateur.",
			},
			{
				q: "¿Cómo funcionan las actualizaciones?",
				a: "En AppImage, macOS .app, Windows por usuario y Android, Jota consulta las versiones de GitHub al arrancar y se instala in situ con verificación SHA256SUMS. Otros canales remiten a la página de versiones.",
			},
			{
				q: "¿Qué son las Salas?",
				a: "Las Salas sincronizan cola, reproducción, posición, aleatorio y repetición entre dispositivos a través de tu propio relay WebSocket. Mira quién escucha en tiempo real. El relay lo alojas tú mediante Jota-Music/relay.",
			},
			{
				q: "¿Jota es oficial?",
				a: "No. Jota es un cliente independiente y no oficial. No está afiliado, respaldado ni patrocinado por Spotify AB, Google LLC ni ningún sello musical.",
			},
		],
		more: [
			"Más en la ",
			{ link: "wiki", label: "wiki" },
			" o abre una ",
			{ link: "issues", label: "issue" },
			".",
		],
	},
	stories: {
		eyebrow: "Historia",
		title: "Comparte Jota en tus historias.",
		body: "Una imagen lista para Instagram, con el resumen de la app y la captura real del reproductor.",
		imageBody: "Cliente de música open source.\nConecta Spotify, explora YouTube\no crea tu propia biblioteca local.",
		imageLink: "LINK AQUÍ",
		download: "Descargar PNG",
		share: "Compartir",
		instagram: "Compartir en Instagram",
		hint: "PNG de 1080 × 1920, sin marca de agua.",
		instructions: "Compartir en Instagram",
		intro: "¿Te ha gustado la app? Compártela en un toque con una historia lista.",
		free: "Gratis y código abierto",
		step1: "Copia el enlace al portapapeles.",
		step2: "Descarga la imagen de la historia.",
		step3: "Abre Instagram, crea una historia, añade la imagen y pega el enlace.",
		copy: "Copiar enlace",
		copied: "Copiado",
	},
	footer: {
		headline: ["Sin nube.", "Sin rastreo.", "Sin suscripciones."],
		links: {
			github: "GitHub",
			releases: "Versiones",
			relay: "Relay",
			stories: "Compartir historia",
			warp: "Guía de WARP",
		},
		github: "Jota en GitHub",
		notice:
			"Jota es un cliente independiente y no oficial. No está afiliado, respaldado ni patrocinado por Spotify AB, Google LLC ni ningún sello musical. La reproducción se obtiene en tiempo de ejecución desde tu propia sesión; el audio en streaming pertenece a sus titulares de derechos.",
		credit: [
			"Desarrollado por ",
			{ link: "author", label: "salvadorsru" },
			" · ",
			{ link: "license", label: "GPL-3.0" },
			" · © 2026",
		],
	},
} satisfies Landing;
