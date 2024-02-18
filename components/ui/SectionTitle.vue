<script setup lang="ts">
interface Props {
  text: string
  as?: string
}

withDefaults(defineProps<Props>(), {
  as: "h2",
})
</script>

<template>
  <Component
    :is="as"
    class="font-black uppercase text-4xl md:text-5xl lg:text-6xl"
  >
    {{ text }}
  </Component>
</template>
