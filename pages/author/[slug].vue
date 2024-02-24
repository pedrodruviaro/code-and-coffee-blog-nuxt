<script setup lang="ts">
const { slug } = useRoute().params
</script>

<template>
  <div>
    {{ slug }}
  </div>
</template>
