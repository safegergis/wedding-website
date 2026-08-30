// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    modules: ['@nuxt/fonts'],
    // Static hosting on GitHub Pages: `pnpm generate` writes .output/public with
    // a .nojekyll marker (so the _nuxt/ directory survives) and a 404.html SPA
    // fallback. The site is served from the custom domain root (msfor.life, via
    // public/CNAME), so no base URL is set anywhere; dev and deploy both live at /.
    nitro: { preset: 'github_pages' },
    app: {
        head: {
            htmlAttrs: { lang: 'en' },
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
                { name: 'theme-color', content: '#f8ece8' },
            ],
        },
    },
    fonts: {
        // Web stand-ins for the printed invitation's licensed faces: EB Garamond
        // for Garamond, Marcellus for Foda Display, Pinyon Script for ITC
        // Edwardian Script. Self-hosted at build time; see public/fonts/README.md.
        families: [
            { name: 'EB Garamond', provider: 'google', weights: [400, 500, 600], styles: ['normal', 'italic'] },
            { name: 'Marcellus', provider: 'google', weights: [400] },
            { name: 'Pinyon Script', provider: 'google', weights: [400] },
        ],
    },
    vite: {
        plugins: [
            tailwindcss(),
        ]
    },
    runtimeConfig: {
        public: {
            // Filler values. Replace via NUXT_PUBLIC_WEDDING_PASSWORD / NUXT_PUBLIC_INVITE_TOKEN env vars before sharing the site.
            weddingPassword: 'ourstory2026',
            inviteToken: 'qr-invite',
        }
    }
})
