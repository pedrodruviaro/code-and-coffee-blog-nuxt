<script setup lang="ts">
import type { NuxtError } from "#app"

defineProps({
  error: Object as () => NuxtError,
})

function handleError() {
  clearError({ redirect: "/" })
}
</script>

<template>
  <div>
    <main class="relative grid">
      <img
        src="~/assets/images/error-page-bg.jpg"
        alt=""
        aria-hidden="true"
        class="w-full h-full absolute inset-0 z-0"
      />

      <UiContainer class="z-10 grid place-items-center py-24 md:py-36 lg:py-52">
        <div>
          <h2>{{ error?.statusCode }}</h2>
          <p>{{ error?.statusMessage }}</p>
          <button @click="handleError">Clear errors</button>
        </div>
      </UiContainer>
    </main>
    <LayoutFooter />
  </div>
</template>
