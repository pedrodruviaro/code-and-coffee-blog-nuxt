<script setup lang="ts">
import { GetFirstThreeShows } from "@/queries"
import type { GetShows } from "@/types"

const { data } = await useAsyncQuery<GetShows>(GetFirstThreeShows)
</script>

<template>
  <div class="grid lg:grid-cols-3">
    <article
      v-for="show in data.shows"
      :key="show.title"
      class="border border-brand-black p-4 grid gap-8"
    >
      <div class="grid overflow-hidden w-full aspect-square">
        <NuxtImg
          :src="show.image.url"
          :alt="show.title"
          class="w-full h-full object-cover object-center"
        />
      </div>
      <div class="grid gap-4">
        <h3 class="font-black uppercase text-xl md:text-2xl lg:text-3xl">
          {{ show.title }}
        </h3>
        <p>
          {{ show.description }}
        </p>

        <NuxtLink
          :to="show.link"
          target="_blank"
          class="mt-4 font-black uppercase border-b-2 max-w-max border-transparent hover:border-brand-main focus:outline-none focus:border-brand-main transition-all"
          >More details</NuxtLink
        >
      </div>
    </article>
  </div>
</template>

<style scoped>
article:not(:last-child) {
  border-bottom: none;
}

@media (min-width: 1024px) {
  article:not(:last-child) {
    border-bottom: 1px solid;
    @apply border-brand-black;
  }

  article:nth-child(2) {
    border-inline: none;
  }
}
</style>
