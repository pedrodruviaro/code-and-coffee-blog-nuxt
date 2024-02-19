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
  <section
    class="mt-10 lg:mt-14 grid gap-12 lg:gap-14 lg:grid-cols-[1fr_max-content]"
    v-if="data.posts"
  >
    <PostPreviewList :posts="data.posts" />
    <PagesHomeAsideContent />
  </section>
</template>
