<script setup lang="ts">
import { GetPostsByAuthorWithPagination } from "@/queries"

const route = useRoute()
const slug = computed(() => {
  return String(route.params.slug)
})

const canLoadMore = ref(true)
const variables = {
  author: slug.value,
  first: 2,
  skip: 0,
}

const { result, fetchMore, loading } = useQuery(
  GetPostsByAuthorWithPagination,
  variables
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
    variables: { ...variables },

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
  <div>
    <PostListAndFeaturedGrid>
      <div>
        <UiSectionTitle as="h1" text="Browse posts" class="mb-10" />
        <div v-if="result && result.posts && result?.posts.length !== 0">
          <PostPreviewList :posts="result.posts" />
        </div>
        <div v-else class="mb-4">No posts found</div>

        <UiButton v-if="canLoadMore" @click="loadMore" :disabled="loading">
          LOAD MORE
        </UiButton>
      </div>
    </PostListAndFeaturedGrid>
  </div>
</template>
