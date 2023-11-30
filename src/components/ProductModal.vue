<template>
  <div>
    <dialog :id="modal" class="modal">
        <div class="modal-box w-11/12 max-w-5xl p-10 rounded-sm">
          <form method="dialog">
            <button
              class="btn btn-sm border border-black btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <div class="grid md:grid-cols-2 gap-10 mt-5">
            <div class="h-full flex items-center justify-center">
              <img class="w-[400px]" :src="selectedProduct?.img" alt="" />
            </div>
            <div>
              <h1 class="md:text-h2 text-xl font-semibold">{{ selectedProduct?.title }}</h1>

              <h1 class="md:text-bannerParagraph text-sm my-3">
                <span v-if="selectedProduct?.discountPrice" class="line-through mr-2">${{ selectedProduct?.discountPrice }} </span>
                <span class="text-primary"> ${{ selectedProduct?.price }}</span>
              </h1>

              <p class="text-justify md:text-footerBody text-sm md:leading-7 leading-6 md:tracking-wide">
                {{ selectedProduct?.description }}
              </p>

              <div class="mt-10">
                <div>
                  <label
                    for="size"
                    class="block mb-2 text-sm font-semibold text-product"
                    >Size:</label
                  >
                  <select
                    id="size"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-primary focus:border-primary block w-full p-2.5"
                  >
                    <option value="s">s</option>
                    <option value="mt-3">m</option>
                    <option value="l">l</option>
                    <option value="xl">xl</option>
                  </select>
                </div>

                <div class="mt-5">
                  <label
                    for="color"
                    class="block mb-2 text-sm font-semibold text-product"
                    >Color:</label
                  >
                  <select
                    id="color"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-primary focus:border-primary block w-full p-2.5"
                  >
                    <option value="red">red</option>
                    <option value="green">green</option>
                    <option value="blue">blue</option>
                    <option value="yellow">yellow</option>
                  </select>
                </div>
              </div>

              <div class="md:flex grid  md:justify-start gap-5 mt-5">
                <div
                  class="border border-black flex h-full items-center justify-center px-2 py-[3px]"
                >
                  <button class="text-3xl" @click="decrement">-</button>
                  <input
                    class="md:w-10 text-center px-2 border-none"
                    type="text"
                    v-model="counter"
                  />
                  <button class="text-2xl" @click="increment">+</button>
                </div>
                <div>
                  <button
                    class="uppercase w-full px-10 py-3 bg-black text-white hover:bg-primary transition duration-500 ease-in-out"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
      </dialog>
  </div>
</template>
<script>
export default {
  props: ['selectedProduct', 'modal'],
  name: "ProductModal",

  data() {
    return {
      counter: 1,
    }
  },

  methods: {
    increment() {
            this.counter++;
        },
        decrement() {
            if (this.counter > 0) {
                this.counter--;
            }
    },


  }
}
</script>
<style>
  
</style>