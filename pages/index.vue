<template>
  <div>
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

    <section class="mt-10 lg:mt-14">
      <UiSectionTitle text="Authors" />
      <AuthorsListAll class="mt-8" />
    </section>
  </div>
</template>
