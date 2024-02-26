<script setup lang="ts">
import type { Post } from "@/types"
import { GetPostBySlug } from "@/queries"

const {
  params: { slug },
} = useRoute()

const variables = { slug }
const { data, error } = await useAsyncQuery<Post>(GetPostBySlug, variables)

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

const { date: postDate } = usePostDate(data.value.post.date)

useSeoMeta({
  title: data.value.post.title,
  description: data.value.post.description,
})
</script>

<template>
  <main>
    <section class="flex items-center justify-between">
      <button
        class="flex items-center uppercase font-semibold gap-2 hover:opacity-50"
        @click="$router.go(-1)"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path
              d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"
            ></path>
          </svg>
        </span>
        <span>Go back</span>
      </button>
    </section>

    <section
      class="grid gap-4 my-10 lg:mt-14 lg:mb-20 md:grid-cols-2 md:gap-6 lg:gap-20 lg:grid-cols-2"
    >
      <div class="flex flex-col">
        <h1 class="font-black uppercase text-3xl lg:text-5xl">
          {{ data.post.title }}
        </h1>
        <p class="text-lg my-5">{{ data.post.description }}</p>
        <UiBadge :text="data.post.category.name" class="mt-auto" />
      </div>

      <div class="w-full aspect-video">
        <img
          :src="data.post.image.url"
          alt=""
          aria-hidden="true"
          class="w-full h-full object-cover object-center"
        />
      </div>
    </section>

    <section
      class="flex flex-col-reverse gap-10 lg:grid lg:grid-cols-[1fr_2fr] lg:items-start xl:gap-14"
    >
      <aside class="lg:sticky lg:top-8">
        <div class="flex items-center gap-4 mb-4">
          <div class="w-20 aspect-square rounded-full overflow-hidden">
            <img
              :src="data.post.author.avatar.url"
              :alt="data.post.author.name"
              class="w-full h-full object-cover object-center"
            />
          </div>
          <h4 class="font-bold text-2xl md:text-3xl max-w-[11ch]">
            {{ data.post.author.name }}
          </h4>
        </div>
        <p class="border-b-2 border-brand-gray pb-4 mb-4 max-w-[50ch]">
          {{ data.post.author.description }}
        </p>
        <p><strong>Date: </strong>{{ postDate }}</p>
      </aside>

      <!-- CONTENT -->
      <article
        class="prose prose-zinc max-w-full"
        v-html="data.post.content.html"
        v-if="data.post && !error"
      ></article>
    </section>
  </main>
</template>
