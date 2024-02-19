<script setup lang="ts">
interface Props {
  as?: string
}

withDefaults(defineProps<Props>(), {
  as: "button",
})
</script>

<template>
  <Component
    :is="as"
    class="cursor-pointer font-semibold uppercase text-brand-black bg-brand-white px-4 py-2 hover:bg-opacity-80 focus:outline-brand-main"
  >
    <slot />
  </Component>
</template>
