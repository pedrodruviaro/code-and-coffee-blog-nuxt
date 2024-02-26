<script setup lang="ts"></script>

<template>
  <div class="grid gap-12 lg:gap-14 lg:grid-cols-[1fr_max-content]">
    <section>
      <slot />
    </section>
    <PostAsideFeaturedList />
  </div>
</template>
