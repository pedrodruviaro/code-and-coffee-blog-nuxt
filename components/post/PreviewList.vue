<script setup lang="ts">
import type { PostPreview } from "@/types"

interface Props {
  posts: PostPreview[]
}

defineProps<Props>()
</script>

<template>
  <div class="grid gap-6 lg:gap-10">
    <PostPreviewCard v-for="post in posts" :key="post.slug" :post="post" />
  </div>
</template>
