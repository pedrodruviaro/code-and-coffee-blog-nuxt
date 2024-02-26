<script setup lang="ts">
import { BASE_SITE_TITLE, LOADING_INDICATOR_COLOR } from "@/constants/siteInfos"

useHead({
  titleTemplate: (chunk) => {
    return chunk ? `${chunk} | ${BASE_SITE_TITLE}` : BASE_SITE_TITLE
  },
  meta: [
    {
      name: "og:image",
      content:
        "https://raw.githubusercontent.com/pedrodruviaro/code-and-coffee-blog-nuxt/main/_images/home-1.png",
    },
  ],
})
</script>

<template>
  <NuxtLoadingIndicator :color="LOADING_INDICATOR_COLOR" :height="4" />
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
body,
html {
  @apply font-brand bg-brand-white text-brand-black;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.75rem);
}
</style>
