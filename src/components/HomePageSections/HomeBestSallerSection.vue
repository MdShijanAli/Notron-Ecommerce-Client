<template>
  <div>
    <div class="max-w-7xl mx-auto px-6 py-10">
      <TitleDescriptionSlot
        headline="Best Seller"
        description="There are many variations of passages of Lorem Ipsum available"
      ></TitleDescriptionSlot>

      <div class="card">
        <!--  -->
        <Carousel
          :value="productLists"
          :numVisible="4"
          :numScroll="1"
          :responsiveOptions="responsiveOptions"
        >
          <template #item="{ data }">
            <div
              class="border-1 surface-border border-round m-2 text-center py-5 px-3 group"
            >
              <div class="border rounded-sm relative overflow-hidden">
                <div class="relative group flex justify-center">
                  <Image
                    preview
                    class="hover:scale-110 transition duration-500 ease-in-out"
                    :src="getSingleValueFromArray(data?.img)"
                    alt=""
                  />
                </div>

                <div
                  v-if="data?.offer"
                  class="absolute top-5 left-5 bg-primary px-2 rounded-sm"
                >
                  <p class="text-white">{{ data?.offer }}</p>
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
                        selectProduct(data);
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
                  {{ getSingleValueFromArray(data?.category) }}
                </p>
                <RouterLink
                  :to="{
                    name: 'product-details',
                    params: { title: data.title.replace(/ /g, '-') },
                  }"
                >
                  <h1 class="font-semibold my-1.5 hover:text-primary">
                    {{ data?.title }}
                  </h1>
                </RouterLink>
                <h1 class="text-product">
                  <span v-if="data?.discountPrice" class="line-through"
                    >${{ data?.discountPrice }}
                  </span>
                  <span v-if="data?.discountPrice">-</span> ${{ data?.price }}
                </h1>
              </div>
            </div>
          </template>
        </Carousel>
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
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useProducts } from "../../compositions/useProducts";
import { getSingleValueFromArray } from "../../compossables/getSingleValueFromArray";
import ProductModal from "../ProductModal.vue";
import TitleDescriptionSlot from "../global/TitleDescriptionSlot.vue";

const { productLists, fetchProducts, isProductLoading } = useProducts();

const responsiveOptions = ref([
  {
    breakpoint: "1400px",
    numVisible: 4,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
    numScroll: 1,
  },
]);

const showModal = ref(false);

const selectedProduct = ref({});

const selectProduct = (product) => {
  selectedProduct.value = product;
};

onMounted(async () => {
  await fetchProducts();
});
</script>
<style>
button.p-carousel-prev.p-link,
button.p-carousel-next.p-link {
  border: 1px solid #eb3e32;
  color: #eb3e32;
}

button.p-carousel-prev.p-link:hover,
button.p-carousel-next.p-link:hover {
  background-color: #eb3e32;
  color: white;
}
</style>
