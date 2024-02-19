<script setup lang="ts">
const currentYear = computed(() => {
  return new Date().getFullYear()
})

const enteredEmail = ref("")

function handleSubmit() {
  console.log("Good that you are testing! Got ya!")
  enteredEmail.value = ""
}
</script>

<template>
  <footer class="bg-brand-black text-brand-white relative overflow-hidden">
    <UiContainer as="section" class="py-10 md:py-14 lg:py-20">
      <div class="grid gap-8 md:grid-cols-[max-content_1fr] items-center">
        <UiSectionTitle text="Code news to your inbox" class="max-w-[15ch]" />

        <form
          class="flex gap-2 flex-wrap md:justify-self-end md:grid md:grid-cols-[1fr_max-content]"
          @submit.prevent="handleSubmit"
        >
          <input
            required
            v-model="enteredEmail"
            type="email"
            placeholder="your.email@provider.com"
            class="text-brand-black p-2 focus:outline-brand-main w-full max-w-[22ch]"
          />
          <button
            type="submit"
            class="text-brand-black bg-brand-white px-4 py-2 hover:bg-opacity-80 focus:outline-brand-main"
          >
            Sign up
          </button>
        </form>
      </div>
    </UiContainer>

    <div class="w-full">
      <img
        src="~/assets/images/footer-bg.png"
        alt=""
        class="w-full h-full object-cover"
        loading="lazy"
        aria-hidden="true"
        decoding="async"
        width="1920"
        height="750"
      />
    </div>

    <UiContainer as="section" class="z-[2]">
      <p class="text-sm bg-brand-black max-w-max mx-auto py-6">
        &copy; Copyright Code & Coffee - {{ currentYear }}
      </p>
    </UiContainer>
  </footer>
</template>
