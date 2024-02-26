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
        class="mt-10 bg-brand-black text-brand-white w-full p-2 text-sm md:p-4 md:text-base"
      >
        <p class="grid grid-cols-[max-content_1fr] gap-4">
          <strong class="font-bold uppercase">Stay tuned - </strong>
          <NuxtMarquee :auto-fill="true">
            <span class="block mx-2"
              >Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias neque, eligendi voluptates harum.</span
            >
          </NuxtMarquee>
        </p>
      </div>
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
