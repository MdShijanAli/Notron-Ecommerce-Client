<template>
  <div class="p-3 sm:p-10 bg-white border">
    <ButtonComponent title="Back" path="/products" />
    <div class="mt-20">
      <h1>This is Product Details age</h1>

      <BaseUpload />
    </div>
  </div>
</template>

<script setup>
import BaseUpload from "../../components/form/BaseUpload.vue";
import ButtonComponent from "../../components/global/ButtonComponent.vue";
</script>
