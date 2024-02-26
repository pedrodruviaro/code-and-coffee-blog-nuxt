<script setup lang="ts">
useSeoMeta({
  title: "Posts",
  description: "",
})

const query = gql`
  query GetPosts($first: Int, $skip: Int) {
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

const QUERY_OFFSET = 10

const { result, canLoadMore, loading, loadMore } = usePostsQuery({
  query: query,
  offset: QUERY_OFFSET,
})
</script>

<template>
  <section>
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
  </section>
</template>
