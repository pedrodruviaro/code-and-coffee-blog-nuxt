<script setup lang="ts">
import type { NuxtError } from "#app"

useSeoMeta({
  title: "Something went wrong...",
})

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
        class="w-full h-full absolute inset-0 z-0 object-cover object-center"
      />

      <UiContainer class="z-10 grid place-items-center py-10 min-h-[85vh]">
        <div class="text-center grid gap-3 justify-items-center">
          <h2 class="font-black text-6xl">{{ error?.statusCode }}</h2>
          <p class="text-lg font-semibold">
            {{
              error?.statusMessage
                ? error?.statusMessage
                : "Something went wrong..."
            }}
          </p>
          <UiButton variant="filled" @click="handleError">Go back</UiButton>
        </div>
      </UiContainer>
    </main>
    <LayoutFooter />
  </div>
</template>
