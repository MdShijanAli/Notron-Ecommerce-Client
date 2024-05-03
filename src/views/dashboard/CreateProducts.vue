<template>
  <div class="p-3 sm:p-10 bg-white border">
    <ButtonComponent
      title="Back"
      path="/products"
      bgColor="#000000"
      borderColor="#000000"
    />
    <div class="mt-20">
      <h1>This is Product Details age</h1>

      <!-- Product Name -->
      <div>
        <BaseInput
          type="text"
          label="Product Name"
          placeholder="Type the Product Name"
          v-model="product_name"
        />
      </div>

      <!-- Product Images -->
      <BaseUpload label="Upload Product Photos" />

      <div class="grid md:grid-cols-2 grid-cols-1 gap-5">
        <div class="col-span-1 flex gap-5">
          <!-- Product Price -->
          <div class="w-full">
            <BaseInput
              type="number"
              label="Product Price"
              placeholder="Enter Product Price"
              v-model.number="product_price"
            />
          </div>
          <!-- Product Sale Price -->
          <div class="w-full">
            <BaseInput
              type="number"
              label="Sale Price"
              placeholder="Enter Sale Price"
              v-model.number="sale_price"
            />
          </div>
        </div>

        <div class="col-span-1"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BaseInput from "../../components/form/BaseInput.vue";
import BaseUpload from "../../components/form/BaseUpload.vue";
import ButtonComponent from "../../components/global/ButtonComponent.vue";

const product_name = ref("");
const product_price = ref("");
const sale_price = ref("");
</script>
