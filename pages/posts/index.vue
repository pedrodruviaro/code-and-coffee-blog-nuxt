<script setup lang="ts">
import type { PostPreview } from "~/types"

useSeoMeta({
  title: "Posts",
  description: "",
})

interface GetPosts {
  posts: PostPreview[]
  postsConnection: {
    aggregate: {
      count: number
    }
  }
}

const POSTS_QUERY_LIMIT = 5

const inicialQuery = gql`
  query GetInitialPosts($first: Int!) {
    posts(first: $first, orderBy: date_DESC) {
      title
      slug
      image {
        url
      }
      date
      description
      category {
        name
        slug
      }
      author {
        name
        slug
      }
    }
    postsConnection {
      aggregate {
        count
      }
    }
  }
`

const loadMoreQuery = gql`
  query GetMorePosts($first: Int, $skip: Int) {
    posts(first: $first, skip: $skip, orderBy: date_DESC) {
      title
      slug
      image {
        url
      }
      date
      description
      category {
        name
        slug
      }
      author {
        name
        slug
      }
    }
    postsConnection {
      aggregate {
        count
      }
    }
  }
`

const loadMoreVariables = reactive({ first: POSTS_QUERY_LIMIT, skip: 0 })
const canLoadMore = ref(true)

const { result, fetchMore, loading } = useQuery<GetPosts>(inicialQuery, {
  first: POSTS_QUERY_LIMIT,
})

const totalPosts = computed(() => {
  return result.value?.postsConnection.aggregate.count
})

function loadMore() {
  loadMoreVariables.skip = loadMoreVariables.skip + POSTS_QUERY_LIMIT

  if (totalPosts.value) {
    if (loadMoreVariables.skip + POSTS_QUERY_LIMIT >= totalPosts.value) {
      canLoadMore.value = false
    }
  }

  fetchMore({
    query: loadMoreQuery,
    variables: loadMoreVariables,
    updateQuery: (previousResult, { fetchMoreResult }) => {
      if (!fetchMoreResult) return previousResult

      return {
        ...previousResult,
        cursor: fetchMoreResult.posts,
        posts: [...previousResult.posts, ...fetchMoreResult?.posts],
      }
    },
  })
}
</script>

<template>
  <section>
    <UiSectionTitle as="h1" text="Browse posts" class="mb-10" />
    <div v-if="result?.posts">
      <PostPreviewList :posts="result.posts" />
    </div>

    <UiButton
      v-if="canLoadMore"
      @click="loadMore"
      :loading="loading"
      class="bg-blue-400 p-2 font-bold"
    >
      LOAD MORE
    </UiButton>
  </section>
</template>
