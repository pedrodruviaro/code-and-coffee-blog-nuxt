<script setup lang="ts">
import type { Post } from "@/types"

const query = gql`
  query GetPostBySlug($slug: String) {
    post(where: { slug: $slug }) {
      author {
        avatar {
          url
        }
        description
        name
        slug
      }
      category {
        name
        slug
      }
      content {
        markdown
      }
      title
      date
      description
      image {
        url
      }
    }
  }
`
const {
  params: { slug },
} = useRoute()

const variables = { slug }

const { data } = await useAsyncQuery<Post>(query, variables)

if (!data.value.post) {
  throw createError({
    statusCode: 404,
    statusMessage: "Post not found",
    fatal: true,
  })
}
</script>

<template>
  <main>
    <section>
      <h1>{{ slug }}</h1>
    </section>
  </main>
</template>
