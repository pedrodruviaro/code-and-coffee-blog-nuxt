<script setup lang="ts">
import type { Author } from "@/types"
import { GetAllAuthors } from "@/queries"

interface GetAuthors {
  authors: Author[]
}

const { data } = await useAsyncQuery<GetAuthors>(GetAllAuthors)
</script>

<template>
  <article class="grid md:grid-cols-2" v-if="data.authors">
    <NuxtLink
      v-for="author in data.authors"
      :key="author.slug"
      class="author--card border border-brand-black p-4 grid justify-items-center gap-4 md:flex md:items-center hover:bg-zinc-100 cursor-pointer"
      :to="`/author/${author.slug}`"
    >
      <div class="w-24 aspect-square rounded-full overflow-hidden">
        <NuxtImg
          :src="author.avatar.url"
          :alt="author.name"
          class="w-full h-full object-cover object-center"
        />
      </div>

      <h3 class="font-bold text-xl text-center md:text-left">
        {{ author.name }}
      </h3>
    </NuxtLink>
  </article>
</template>

<style scoped>
.author--card:not(:last-child) {
  border-bottom: none;
}

@media (min-width: 768px) {
  .author--card:not(:last-child) {
    border-bottom: 1px solid;
    @apply border-b-brand-black;
  }

  .author--card:nth-child(2n) {
    border-left: none;
  }

  .author--card:not(:last-child):not(:nth-last-child(2)) {
    border-bottom: none;
  }
}
</style>
