<script setup lang="ts">
import { GetPostsByAuthorWithPagination } from "@/queries"

const { slug } = useRoute().params

const variables = {
  author: slug,
  first: 2,
  skip: 0,
}

const { data } = await useAsyncQuery(GetPostsByAuthorWithPagination, variables)

console.log(data.value)
</script>

<template>
  <PostListAndFeaturedGrid>
    <div>
      {{ slug }}
    </div>
  </PostListAndFeaturedGrid>
</template>
