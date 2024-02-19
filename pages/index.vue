<script setup lang="ts">
useSeoMeta({
  title: "Home",
  description: "",
})
</script>

<template>
  <main>
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

    <PagesHomeRecentPosts />

    <NuxtLink
      to="/posts"
      class="font-black uppercase text-lg md:text-3xl mt-5 block"
      >See all posts</NuxtLink
    >

    <section class="mt-10 lg:mt-14 border-t-4 pt-10 lg:pt-14 border-brand-gray">
      <UiSectionTitle text="Authors" />
      <AuthorsListAll class="mt-8" />
    </section>
  </main>
</template>
