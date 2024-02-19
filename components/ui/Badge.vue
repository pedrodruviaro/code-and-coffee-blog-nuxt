<script setup lang="ts">
interface Props {
  text: string
}

defineProps<Props>()
</script>

<template>
  <span
    class="border-2 border-brand-black rounded-full px-3 py-1 font-semibold uppercase block max-w-max"
    >{{ text }}</span
  >
</template>
