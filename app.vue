<script setup lang="ts">
const LOADING_INDICATOR_COLOR = "linear-gradient(to right, #CB6D4E, #B99D71)"
</script>

<template>
  <NuxtLoadingIndicator :color="LOADING_INDICATOR_COLOR" />
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
body,
html {
  @apply font-brand bg-brand-white text-brand-black;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.75rem);
}
</style>
