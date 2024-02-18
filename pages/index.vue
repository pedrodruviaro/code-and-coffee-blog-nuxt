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
  <section>
    <h1 class="text-6xl font-black">
      <span class="hidden">Code & Coffee</span>
      <img
        src="~/assets/images/logo-big.svg"
        class="w-full"
        alt="Code & Coffee"
      />
    </h1>

    <div
      class="bg-brand-black text-brand-white w-full h-16 mt-10 lg:mt-14"
    ></div>
  </section>

  <section
    class="mt-10 lg:mt-14 grid gap-12 lg:gap-14 lg:grid-cols-[1fr_max-content]"
  >
    <PostPreviewList :posts="data.posts" />

    <!-- banner -->
    <aside>
      <div class="w-full h-40 bg-brand-black lg:w-52 lg:h-[600px]"></div>
    </aside>
  </section>
</template>
