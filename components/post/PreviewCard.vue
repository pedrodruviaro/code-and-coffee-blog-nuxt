<script setup lang="ts">
import type { PostPreview } from "@/types"

interface Props {
  post: PostPreview
}

defineProps<Props>()
</script>

<template>
  <NuxtLink
    to="/"
    class="grid gap-4 md:grid-cols-[max-content_1fr] border-b-4 border-brand-gray pb-6 lg:pb-10 lg:gap-10"
  >
    <div class="w-full aspect-square md:max-w-72">
      <img
        :src="post.image.url"
        :alt="post.title"
        class="object-cover w-full h-full"
      />
    </div>
    <div class="grid gap-4 lg:gap-10 grid-rows-[1fr_max-content]">
      <div class="flex flex-col gap-4">
        <h3 class="text-3xl font-black">{{ post.title }}</h3>
        <p class="lg:text-lg">
          {{ post.description }}
        </p>
      </div>

      <div
        class="grid gap-4 md:flex md:flex-wrap md:items-center md:justify-between"
      >
        <div class="grid md:flex md:gap-4 md:items-center">
          <p><strong>Author:</strong> {{ post.author.name }}</p>
          <p><strong>Date:</strong> {{ post.date }}</p>
        </div>
        <span
          class="border-2 border-brand-black rounded-full px-3 py-1 font-semibold uppercase block max-w-max"
          >{{ post.category.name }}</span
        >
      </div>
    </div>
  </NuxtLink>
</template>
