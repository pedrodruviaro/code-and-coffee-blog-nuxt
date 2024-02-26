<script setup lang="ts">
import { GetPostsWithPagination } from "@/queries"
import type { PostsWithPagination } from "~/types"

useSeoMeta({
  title: "Posts",
  description: "",
})

const canLoadMore = ref(true)
const variables = reactive({
  skip: 0,
  first: 5,
})

const { result, fetchMore, loading } = useQuery<PostsWithPagination>(
  GetPostsWithPagination,
  {
    first: variables.first,
    skip: 0,
  }
)

const totalPosts = computed(() => {
  return result.value?.postsConnection?.aggregate?.count
})

function loadMore() {
  variables.skip = variables.skip + variables.first

  if (
    totalPosts.value &&
    variables.skip + variables.first >= totalPosts.value
  ) {
    canLoadMore.value = false
  }

  fetchMore({
    variables: {
      first: variables.first,
      skip: variables.skip,
    },

    updateQuery: (previeousResult, { fetchMoreResult }) => {
      if (!fetchMoreResult) return previeousResult

      return {
        ...previeousResult,
        posts: [...previeousResult.posts, ...fetchMoreResult.posts],
      }
    },
  })
}
</script>

<template>
  <PostListAndFeaturedGrid class="mt-10 lg:mt-14">
    <div>
      <UiSectionTitle as="h1" text="Browse posts" class="mb-10" />
      <div v-if="result?.posts">
        <PostPreviewList :posts="result.posts" />
      </div>

      <UiButton v-if="canLoadMore" @click="loadMore" :disabled="loading">
        LOAD MORE
      </UiButton>
    </div>
  </PostListAndFeaturedGrid>
</template>
