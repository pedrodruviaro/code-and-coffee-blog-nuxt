<script setup lang="ts">
import type { PostPreview } from "@/types"

interface GetFirstSevenPostsPreview {
  posts: PostPreview[]
}

const query = gql`
  query GetFirstSevenPostsPreview {
    posts(first: 7, orderBy: date_DESC) {
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
  }
`

const { data } = await useAsyncQuery<GetFirstSevenPostsPreview>(query)
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
