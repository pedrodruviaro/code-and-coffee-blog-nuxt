<script setup lang="ts">
const currentYear = computed(() => {
  return new Date().getFullYear()
})
</script>

<template>
  <footer
    class="bg-brand-black text-brand-white py-8 text-center relative place-items-end md:place-items-center grid overflow-hidden min-h-60 lg:min-h-96"
  >
    <UiContainer class="z-[2]">
      <p class="text-sm bg-brand-black max-w-max mx-auto p-3">
        &copy; Copyright Code & Coffee - {{ currentYear }}
      </p>
    </UiContainer>

    <div class="z-[1] absolute inset-0">
      <img
        src="~/assets/images/footer-bg.png"
        alt=""
        class="w-full h-full object-cover"
        loading="lazy"
        aria-hidden="true"
        decoding="async"
        width="1920"
        height="750"
      />
    </div>
  </footer>
</template>
