// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxtjs/apollo"],

  googleFonts: {
    families: {
      "Work Sans": [400, 600, 700, 900],
    },
  },

  apollo: {
    clients: {
      default: {
        httpEndpoint:
          "https://api-sa-east-1.hygraph.com/v2/clsq0nu2o0pwv01umyr941v6j/master",
      },
    },
  },
})
