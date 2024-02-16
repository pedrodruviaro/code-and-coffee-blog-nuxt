<script setup lang="ts">
interface Props {
  as?: string
}

withDefaults(defineProps<Props>(), {
  as: "div",
})
</script>

<template>
  <Component :is="as" class="w-[94%] max-w-[90rem] mx-auto">
    <slot />
  </Component>
</template>
