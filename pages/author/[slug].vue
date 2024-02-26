<script setup lang="ts">
const { slug } = useRoute().params
</script>

<template>
  <PostListAndFeaturedGrid>
    <div>
      {{ slug }}
    </div>
  </PostListAndFeaturedGrid>
</template>
