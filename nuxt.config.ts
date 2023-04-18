import type {NuxtConfig} from '@nuxt/types'

const config: NuxtConfig = {
    buildModules: ['@nuxt/typescript-build'],
    devServer: {
        port: 3300,
    },

    css: [
        "@/assets/styles/tailwind.css",
        "@/assets/styles/common.css"
    ],

    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxtjs/tailwindcss",
        "@nuxtjs/color-mode",
        "@nuxt/content",
    ],

    tailwindcss: {
        cssPath: "@/assets/styles/tailwind.css",
        configPath: "tailwind.config.js",
        exposeConfig: false,
        injectPosition: 0,
        viewer: true
    },

    colorMode: {
        preference: "system", // default value of $colorMode.preference
        fallback: "light", // fallback value if not system preference found
        hid: "nuxt-color-mode-script",
        globalName: "__NUXT_COLOR_MODE__",
        componentName: "ColorScheme",
        classPrefix: "",
        classSuffix: "",
        storageKey: "nuxt-color-mode"
    },
    content: {
        highlight: {
            theme: "github-dark",
            preload: [
                "vue"
            ]
        },
        navigation: {
            fields: ["author", "subject", "position"]
        }
    },

    postcss: {
        plugins: {
            "postcss-import": {},
            "tailwindcss/nesting": {},
            "tailwindcss": {},
            "autoprefixer": {}
        }
    },

}

export default config
// https://nuxt.com/docs/api/configuration/nuxt-config
/*
export default defineNuxtConfig({

    devServer: {
        port: 3300,
    },

    css: [
        "@/assets/styles/tailwind.css",
        "@/assets/styles/common.css"
    ]


})
*/
