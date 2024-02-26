<script setup lang="ts">
import { GetPostsByAuthorWithPagination } from "@/queries"

const { slug } = useRoute().params

const canLoadMore = ref(true)
const variables = {
  author: slug,
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
  <PostListAndFeaturedGrid>
    <div v-if="result.posts.length !== 0">
      <UiSectionTitle as="h1" text="Browse posts" class="mb-10" />
      <div v-if="result?.posts">
        <PostPreviewList :posts="result.posts" />
      </div>

      <UiButton v-if="canLoadMore" @click="loadMore" :disabled="loading">
        LOAD MORE
      </UiButton>
    </div>

    <div v-else>
      <h2 class="text-lg mb-4">
        The author <strong>{{ slug }}</strong> does not exists...
      </h2>
      <UiButton @click="$router.go(-1)"> Go back </UiButton>
    </div>
  </PostListAndFeaturedGrid>
</template>
