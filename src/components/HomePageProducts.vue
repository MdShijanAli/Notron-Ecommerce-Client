<template>
  <div>
    <div class="max-w-7xl mx-auto px-6 py-10">
      <div class="text-center pb-12">
        <h1 class="text-h1 font-semibold">Featured Items</h1>
        <p class="text-h3 text-headingPara mt-3">
          There are many variations of passages of Lorem Ipsum available
        </p>
      </div>
      <div
        class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8"
      >
        <div class="group" v-for="product in products" :key="product.id">
          <div class="border rounded-sm p-5 relative overflow-hidden">
            <img
              class="hover:scale-110 transition duration-500 ease-in-out"
              :src="product?.img"
              alt=""
            />

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
             
              <div @click="selectProduct(product)" onclick="my_modal_3.showModal()"
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
            <p class="text-sm text-product">{{ product.category }}</p>
            <RouterLink to="/shop">
              <h1 class="font-semibold my-1.5 hover:text-primary">
                {{ product.title }}
              </h1>
            </RouterLink>
            <h1 class="text-product">
              <span v-if="product.discountPrice" class="line-through"
                >${{ product?.discountPrice }} -</span
              >
              ${{ product.price }}
            </h1>
          </div>
        </div>

      </div>

      <!-- You can open the modal using ID.showModal() method -->

        <dialog id="my_modal_3" class="modal">
          <div class="modal-box w-11/12 max-w-5xl p-10 rounded-sm">
            <form method="dialog">
              <button class="btn btn-sm border border-black btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <div class="grid grid-cols-2 gap-10 mt-5">
                 <div>
                  <img :src="selectedProduct.img" alt="">
                 </div>
                 <div>
                    <h1 class="text-h2 font-semibold">Space X Bag For Office</h1>

                    <h1 class="text-bannerParagraph my-3">
              <span class="line-through mr-2"
                >$85.00 </span> <span class="text-primary"> $70.00</span> </h1>

                <p class="text-justify text-footerBody leading-7 tracking-wide">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,</p>
                 
              
              <div class="mt-10">
               <div>
                <label for="size" class="block mb-2 text-sm font-semibold text-product">Size:</label>
                <select id="size" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-primary focus:border-primary block w-full p-2.5">
                  <option value="s">s</option>
                  <option value="mt-3">m</option>
                  <option value="l">l</option>
                  <option value="xl">xl</option>
                </select>
               </div>

             <div class="mt-5">
              <label for="color" class="block mb-2 text-sm font-semibold text-product">Color:</label>
              <select id="color" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-primary focus:border-primary block w-full p-2.5">
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="yellow">yellow</option>
              </select>
             </div>
              </div>

              <div class="flex gap-5 mt-5">
               <div class="">
                

    <div class="card flex justify-content-center">
        <InputNumber v-model="value" showButtons buttonLayout="horizontal" class="w-10 h-10 border-black"
             incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
    </div>



               </div>

               <div>
                <button class="uppercase px-10 py-3 bg-black text-white">Add to cart</button>
               </div>

              </div>
              
              
              </div>

              
            </div>
          </div>
        </dialog>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

const value = ref(50);
export default {
  name: "HomePageProducts",
  props: ["products"],
  data() {
    return {
        selectedProduct: {},
    };
  },

  methods: {
    selectProduct(product) {
      // this.selectProduct = product;
      console.log(product)
    }
  }
};
</script>
<style></style>
