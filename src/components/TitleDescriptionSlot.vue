<template>
    <div class="text-center pb-12">
        <h1 class="lg:text-h1 text-3xl md:text-4xl font-semibold">{{ headline }}</h1>
        <p class="lg:text-h3 text-sm text-headingPara mt-3">
          {{ description }}
        </p>
        <slot></slot>
      </div>
</template>
<script>
export default {
  name: "TitleDescriptionSlot",
  props: {
    headline: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    }
  }
}
</script>
<style>
  
</style>