<script setup lang="ts">
interface Props {
  variant?: "ghost" | "outlined" | "filled"
  size?: "sm" | "base" | "lg"
  mode?: "light" | "dark"
  link?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: "outlined",
  size: "base",
  mode: "dark",
  link: false,
})

const baseClasses =
  "cursor-pointer flex items-center gap-3 uppercase font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed"

const buttonVariants = {
  variants: {
    ghost: "px-0 py-0 border-transparent border-b",
    outlined: "border",
    filled: "hover:opacity-80",
  },

  sizes: {
    sm: "text-sm px-2 py-1",
    base: "text-base px-4 py-2",
    lg: "text-lg px-6 py-2",
  },

  mode: {
    dark: {
      ghost: "text-brand-black hover:border-brand-black",
      outlined: "border-brand-black text-brand-black hover:bg-zinc-100 ",
      filled: "bg-brand-black text-brand-white",
    },
    light: {
      ghost: "text-brand-white hover:border-brand-white",
      outlined: "border-brand-white text-brand-white hover:bg-zinc-800",
      filled: "bg-brand-white text-brand-black",
    },
  },
}
</script>

<template>
  <button
    v-if="!link"
    :class="[
      baseClasses,
      buttonVariants.sizes[size],
      buttonVariants.variants[variant],
      buttonVariants.mode[mode][variant],
    ]"
  >
    <slot />
  </button>

  <NuxtLink
    v-else
    :class="[
      baseClasses,
      buttonVariants.sizes[size],
      buttonVariants.variants[variant],
      buttonVariants.mode[mode][variant],
    ]"
  >
    <slot />
  </NuxtLink>
</template>
