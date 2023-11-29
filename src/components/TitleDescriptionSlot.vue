<template>
    <div class="text-center pb-12">
        <h1 class="text-h1 font-semibold">{{ headline }}</h1>
        <p class="text-h3 text-headingPara mt-3">
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