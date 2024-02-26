<script setup lang="ts">
import { GetPostsByAuthorWithPagination } from "@/queries"
import type { PostsByAuthorWithPagination } from "@/types"

const route = useRoute()
const slug = computed(() => {
  return String(route.params.slug)
})

const canLoadMore = ref(true)
const variables = {
  author: slug.value,
  first: 5,
  skip: 0,
}

const { result, fetchMore, loading } = useQuery<PostsByAuthorWithPagination>(
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

const hasMorePosts = computed(() => {
  if (result.value) {
    return result.value.posts.length >= variables.first
  }

  return false
})
</script>

<template>
  <div class="grid gap-8 lg:grid-cols-[1fr_2.25fr] lg:gap-10">
    <div v-if="result?.author">
      <h1
        class="uppercase font-black mb-10 text-2xl lg:text-4xl"
        v-if="result?.author"
      >
        Posts by
      </h1>
      <AuthorsCard :author="result?.author" />
    </div>
    <div>
      <div
        v-if="result && result.posts && result?.posts.length !== 0"
        class="max-w-[60rem]"
      >
        <PostPreviewList :posts="result.posts" />
      </div>
      <div v-else class="mb-4 text-2xl">No posts found for this author</div>

      <ClientOnly>
        <UiButton
          v-if="canLoadMore && hasMorePosts"
          @click="loadMore"
          :disabled="loading"
        >
          LOAD MORE
        </UiButton>
      </ClientOnly>
    </div>
  </div>
</template>
