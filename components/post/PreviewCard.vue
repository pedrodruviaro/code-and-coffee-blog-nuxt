<script setup lang="ts">
import type { PostPreview } from "@/types"

interface Props {
  post: PostPreview
}

const props = defineProps<Props>()

const postLink = computed(() => {
  return `/posts/${props.post.slug}`
})

const { date: postDate } = usePostDate(props.post.date)
</script>

<template>
  <NuxtLink
    :to="postLink"
    class="post--card grid gap-4 md:grid-cols-[max-content_1fr] border-b-4 border-brand-gray pb-6 lg:pb-10 lg:gap-10"
    tabindex="0"
  >
    <div
      class="w-full aspect-square md:max-w-72 overflow-hidden post--card-image"
    >
      <NuxtImg
        :src="post.image.url"
        :alt="post.title"
        class="object-cover w-full h-full transition-all"
      />
    </div>
    <div
      class="grid gap-4 lg:gap-10 grid-rows-[1fr_max-content] post--card-content"
    >
      <div class="flex flex-col gap-4">
        <h3 class="text-3xl font-black">{{ post.title }}</h3>
        <p class="lg:text-lg">
          {{ post.description }}
        </p>
      </div>

      <div class="grid gap-4 xl:flex xl:items-center xl:justify-between">
        <div class="grid">
          <p><strong>Author:</strong> {{ post.author.name }}</p>
          <p><strong>Date:</strong> {{ postDate }}</p>
        </div>

        <UiBadge :text="post.category.name" />
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.post--card:last-child {
  border-bottom: none;
}

.post--card:hover,
.post--card:focus {
  @apply border-brand-main transition-all;
}

.post--card:hover .post--card-image img,
.post--card:focus .post--card-image img {
  @apply scale-[1.2];
}

.post--card:hover .post--card-content,
.post--card:focus .post--card-content {
  @apply text-brand-black text-opacity-65;
}
</style>
