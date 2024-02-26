<script setup lang="ts">
import type { Author } from "~/types"

interface Props {
  author: Author
}

defineProps<Props>()
</script>

<template>
  <div>
    <div class="flex items-center gap-4 mb-4">
      <div class="w-20 aspect-square rounded-full overflow-hidden">
        <img
          :src="author.avatar.url"
          :alt="author.name"
          class="w-full h-full object-cover object-center"
        />
      </div>
      <h4 class="font-bold text-2xl md:text-3xl max-w-[11ch]">
        {{ author.name }}
      </h4>
    </div>
    <p class="border-b-2 border-brand-gray pb-4 max-w-[50ch]">
      {{ author.description }}
    </p>
  </div>
</template>
