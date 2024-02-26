<script setup lang="ts">
import type { PostPreview } from "@/types"
import { GetFirstSevenPostsPreview } from "@/queries"

interface GetFirstSevenPostsPreview {
  posts: PostPreview[]
}

const { data } = await useAsyncQuery<GetFirstSevenPostsPreview>(
  GetFirstSevenPostsPreview
)
</script>

<template>
  <PostListAndFeaturedGrid class="mt-10 lg:mt-14">
    <div>
      <PostPreviewList :posts="data.posts" />
      <UiButton link to="/posts" variant="ghost" size="lg" class="max-w-max"
        >See all posts</UiButton
      >
    </div>
  </PostListAndFeaturedGrid>
</template>
