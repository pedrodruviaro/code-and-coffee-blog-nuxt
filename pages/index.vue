<script setup lang="ts"></script>

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
    <div class="grid gap-6 lg:gap-10">
      <!-- card -->
      <NuxtLink
        to="/"
        v-for="i in 7"
        :key="i"
        class="grid gap-4 md:grid-cols-[max-content_1fr] border-b-4 border-brand-gray pb-6 lg:pb-10 lg:gap-10"
      >
        <div class="w-full aspect-square md:max-w-72">
          <img
            src="~/assets/images/post-mock.jpg"
            alt=""
            class="object-cover w-full h-full"
          />
        </div>
        <div class="grid gap-4 lg:gap-10 grid-rows-[1fr_max-content]">
          <div class="flex flex-col gap-4">
            <h3 class="text-3xl font-black">Lorem ipsum dolor sit</h3>
            <p class="lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              sapiente ducimus amet pariatur exercitationem, aliquid excepturi
              nisi rerum illum dolorem omnis dolorum, iste dolores aspernatur
              recusandae delectus, consequatur dolor deleniti?
            </p>
          </div>

          <div
            class="grid gap-4 md:flex md:flex-wrap md:items-center md:justify-between"
          >
            <div class="grid md:flex md:gap-4 md:items-center">
              <p><strong>Author:</strong> Pedro Ruviaro</p>
              <p><strong>Date:</strong> 16.fev/24</p>
            </div>
            <span
              class="border-2 border-brand-black rounded-full px-3 py-1 font-semibold uppercase block max-w-max"
              >JavaScript</span
            >
          </div>
        </div>
      </NuxtLink>
    </div>

    <!-- banner -->
    <aside>
      <div class="w-full h-40 bg-brand-black lg:w-52 lg:h-[600px]"></div>
    </aside>
  </section>
</template>
