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
        html
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

const { data, error } = await useAsyncQuery<Post>(query, variables)

if (error.value) {
  throw createError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.statusMessage,
    fatal: true,
  })
}

if (!data.value.post) {
  throw createError({
    statusCode: 404,
    statusMessage: "Post not found",
    fatal: true,
  })
}

useSeoMeta({
  title: data.value.post.title,
  description: data.value.post.description,
})
</script>

<template>
  <main>
    <section>
      <article
        class="prose prose-zinc max-w-full"
        v-html="data.post.content.html"
        v-if="data.post && !error"
      ></article>
    </section>
  </main>
</template>
