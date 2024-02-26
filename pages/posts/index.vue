<script setup lang="ts">
import { GetPostsWithPagination } from "@/queries"

useSeoMeta({
  title: "Posts",
  description: "",
})

const QUERY_OFFSET = 5

const { result, canLoadMore, loading, loadMore } = usePostsQuery({
  query: GetPostsWithPagination,
  offset: QUERY_OFFSET,
})
</script>

<template>
  <PostListAndFeaturedGrid class="mt-10 lg:mt-14">
    <div>
      <UiSectionTitle as="h1" text="Browse posts" class="mb-10" />
      <div v-if="result?.posts">
        <PostPreviewList :posts="result.posts" />
      </div>

      <UiButton
        v-show="canLoadMore"
        @click="loadMore"
        :loading="loading"
        class="bg-blue-400 p-2 font-bold"
      >
        LOAD MORE
      </UiButton>
    </div>
  </PostListAndFeaturedGrid>
</template>
