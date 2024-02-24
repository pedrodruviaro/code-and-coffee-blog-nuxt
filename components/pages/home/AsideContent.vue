<script setup lang="ts">
interface FeaturedPosts {
  posts: {
    __typename: string
    title: string
    slug: string
  }
}

const query = gql`
  query GetFirstThreeFeaturedPosts {
    posts(
      first: 4
      stage: PUBLISHED
      orderBy: date_DESC
      where: { featured: true }
    ) {
      title
      slug
    }
  }
`

const { data } = await useAsyncQuery<FeaturedPosts>(query)
</script>

<template>
  <aside v-if="data.posts">
    <div
      class="w-full border border-brand-gray p-4 grid gap-4 md:grid-cols-2 lg:gap-4 lg:grid-cols-1 lg:overflow-hidden lg:w-72 xl:w-96"
    >
      <div>
        <h2 class="font-bold uppercase text-2xl mb-2">Featured</h2>
        <p class="border-b border-brand-gray pb-4 mb-4 font-semibold">
          The most hyped content
        </p>

        <ul class="grid gap-2">
          <li
            v-for="(post, index) in data.posts"
            :key="post.id"
            class="max-w-max grid grid-cols-[18px_1fr] gap-1 hover:text-brand-gray transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="#000000"
              viewBox="0 0 256 256"
              class="relative top-1"
            >
              <path
                d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"
              ></path>
            </svg>

            <NuxtLink :to="`/posts/${post.slug}`">
              <span class="lg:text-sm xl:text-base">{{ post.title }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="border border-brand-gray">
        <img src="~/assets/images/aside-image.jpg" alt="" />
      </div>
    </div>
  </aside>
</template>
