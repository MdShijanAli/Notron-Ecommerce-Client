<template>
  <div>
    <div>
      <div class="max-w-7xl mx-auto px-6 py-10">
        <div
          class="grid sm:grid-cols-3 border py-2 px-5 items-center justify-between"
        >
          <div>
            <p>
              Total Products:
              <span class="text-primary">{{ productLists.length }}</span>
            </p>
          </div>
          <div class="flex gap-5 items-center justify-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 448 512"
              >
                <path
                  d="M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40H88c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40H40c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40H88c22.1 0 40-17.9 40-40V328zm32-192v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40H200c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V328zm32-192v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40H360c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V328z"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 512 512"
              >
                <path
                  d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"
                />
              </svg>
            </div>
          </div>
          <div class="flex justify-end gap-2 items-center">
            <p class="">Sort By:</p>
            <select name="" id="" class="border-none focus:ring-primary">
              <option value="Default">Default</option>
              <option value="Popularity">Popularity</option>
              <option value="Average Rating">Average Rating</option>
              <option value="Newness">Newness</option>
              <option value="Price Low to High">Price Low to High</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="max-w-7xl mx-auto px-6 pb-20">
        <div
          class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8"
        >
          <div class="group" v-for="product in productLists" :key="product.id">
            <div class="border rounded-sm relative overflow-hidden">
              <div class="relative group flex justify-center">
                <Image
                  preview
                  class="hover:scale-110 transition duration-500 ease-in-out"
                  :src="getSingleValueFromArray(product?.img)"
                  alt=""
                />
              </div>

              <div
                v-if="product.offer"
                class="absolute top-5 left-5 bg-primary px-2 rounded-sm"
              >
                <p class="text-white">{{ product?.offer }}</p>
              </div>

              <div
                class="hidden group-hover:flex flex-col gap-2 absolute top-5 right-5 transition-all duration-700 ease-in-out"
              >
                <div
                  class="border w-10 h-10 flex items-center justify-center rounded-sm bg-white hover:bg-primary transition duration-500 ease-in-out hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
                <div
                  class="border w-10 h-10 flex items-center justify-center rounded-sm bg-white hover:bg-primary transition duration-500 ease-in-out hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </div>

                <div
                  @click="
                    () => {
                      showModal = true;
                      selectProduct(product);
                    }
                  "
                  class="border w-10 h-10 flex items-center justify-center rounded-sm bg-white hover:bg-primary transition duration-500 ease-in-out hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div class="mt-3">
              <p class="text-sm text-product">
                {{ getSingleValueFromArray(product.category) }}
              </p>
              <RouterLink
                :to="{
                  name: 'product-details',
                  params: { title: product.title.replace(/ /g, '-') },
                }"
              >
                <h1 class="font-semibold my-1.5 hover:text-primary">
                  {{ product.title }}
                </h1>
              </RouterLink>
              <h1 class="text-product">
                <span v-if="product.discountPrice" class="line-through"
                  >${{ product?.discountPrice }}
                </span>
                <span v-if="product.discountPrice">-</span> ${{ product.price }}
              </h1>
            </div>
          </div>
        </div>

        <Teleport to="body">
          <ProductModal
            :show="showModal"
            @close="showModal = false"
            :selectedProduct="selectedProduct"
          ></ProductModal>
        </Teleport>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useProducts } from "../../compositions/useProducts";
import { getSingleValueFromArray } from "../../compossables/getSingleValueFromArray";
import ProductModal from "../ProductModal.vue";

const { productLists, fetchProducts, isProductLoading } = useProducts();

const showModal = ref(false);

const selectedProduct = ref({});

const selectProduct = (product) => {
  selectedProduct.value = product;
};

onMounted(async () => {
  await fetchProducts();
});
</script>
<style></style>
