<script setup lang="ts">
import { BASE_SITE_TITLE } from "@/constants/siteInfos"

const currentYear = computed(() => {
  return new Date().getFullYear()
})

const enteredEmail = ref("")

function handleSubmit() {
  console.log("Good that you are testing! Got ya!")
  enteredEmail.value = ""
}
</script>

<template>
  <footer class="bg-brand-black text-brand-white relative overflow-hidden">
    <div class="pt-4 bg-brand-black text-white font-bold uppercase">
      <NuxtMarquee :auto-fill="true">
        <span class="block mx-2 text-2xl lg:text-3xl"
          >NEWSLETTER <span v-for="i in 3" :key="i">&#x2022;</span></span
        >
      </NuxtMarquee>
    </div>

    <UiContainer as="section" class="pt-10 md:pt-14 lg:pt-20 pb-4">
      <div class="grid gap-8 md:grid-cols-[max-content_1fr] items-center">
        <UiSectionTitle text="Code news to your inbox" class="max-w-[15ch]" />

        <form
          class="flex gap-2 flex-wrap md:justify-self-end md:grid md:grid-cols-[1fr_max-content]"
          @submit.prevent="handleSubmit"
        >
          <input
            required
            v-model="enteredEmail"
            type="email"
            placeholder="your.email@provider.com"
            class="text-brand-black p-2 focus:outline-brand-main w-full max-w-[22ch]"
          />

          <UiButton as="button">Sign up</UiButton>
        </form>
      </div>

      <div
        class="mt-10 md:mt-14 lg:mt-20 flex flex-wrap gap-2 justify-between items-center"
      >
        <p class="font-bold text-2xl uppercase">
          {{ BASE_SITE_TITLE }}
        </p>

        <nav class="flex items-center gap-2">
          <NuxtLink aria-label="Spotify" to="#" class="hover:opacity-60">
            <img
              src="~/assets/icons/spotify-logo.svg"
              loading="lazy"
              decoding="async"
              width="32"
              height="32"
              aria-hidden="true"
            />
          </NuxtLink>
          <NuxtLink aria-label="twitch" to="#" class="hover:opacity-60">
            <img
              src="~/assets/icons/twitch-logo.svg"
              loading="lazy"
              decoding="async"
              width="32"
              height="32"
              aria-hidden="true"
            />
          </NuxtLink>
          <NuxtLink aria-label="twitter" to="#" class="hover:opacity-60">
            <img
              src="~/assets/icons/twitter-logo.svg"
              loading="lazy"
              decoding="async"
              width="32"
              height="32"
              aria-hidden="true"
            />
          </NuxtLink>
          <NuxtLink aria-label="youtube" to="#" class="hover:opacity-60">
            <img
              src="~/assets/icons/youtube-logo.svg"
              loading="lazy"
              decoding="async"
              width="32"
              height="32"
              aria-hidden="true"
            />
          </NuxtLink>
        </nav>
      </div>
    </UiContainer>

    <div class="w-full">
      <img
        src="~/assets/images/footer-bg.png"
        alt=""
        class="w-full h-full object-cover"
        loading="lazy"
        aria-hidden="true"
        decoding="async"
        width="1920"
        height="750"
      />
    </div>

    <UiContainer as="section" class="z-[2]">
      <p class="text-sm bg-brand-black max-w-max mx-auto py-6">
        &copy; Copyright {{ BASE_SITE_TITLE }} - {{ currentYear }}
      </p>
    </UiContainer>
  </footer>
</template>
