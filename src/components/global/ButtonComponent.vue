<template>
  <RouterLink
    :style="{ backgroundColor: bgColor, color: textColor, border: borderColor }"
    :to="path"
    class="px-10 py-5 hover:bg-white rounded-sm hover:text-black transition duration-500 ease-in-out font-semibold border-2"
  >
    {{ title }}
  </RouterLink>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  path: {
    type: String,
  },
  bgColor: {
    type: String,
    default: "#EB3E32",
  },
  textColor: {
    type: String,
    default: "#ffffff",
  },
  borderColor: {
    type: String,
    default: "#EB3E32",
  },
});
</script>
<style></style>
