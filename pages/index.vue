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

    <section class="custom-section">
      <UiSectionTitle text="Our shows" />
      <ShowsListAll class="mt-8" />
    </section>

    <section class="custom-section">
      <UiSectionTitle text="Authors" />
      <AuthorsListAll class="mt-8" />
    </section>
  </main>
</template>

<style scoped>
.custom-section {
  @apply mt-10 lg:mt-14 border-t-4 pt-10 lg:pt-14 border-brand-gray;
}
</style>
