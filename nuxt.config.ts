// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/apollo",
    "nuxt-marquee",
    "@nuxtjs/sitemap",
    "@nuxt/image",
  ],

  googleFonts: {
    families: {
      "Work Sans": [400, 600, 700, 900],
    },
  },

  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.NUXT_APOLLO_CONTENT_API as string,
      },
    },
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  site: {
    url: "https://code-and-coffee.pedroruviaro.com.br/",
  },

  image: {
    domains: [process.env.NUXT_APOLLO_CONTENT_API as string],
  },
})
