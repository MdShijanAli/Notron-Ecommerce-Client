<template>

<Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header flex justify-end">
          <button @click="$emit('close')"
              class="text-lg bg-gray-200 hover:bg-gray-300 rounded-full w-7 h-7 flex items-center justify-center m-3 font-semibold p-3 border-black"
            >
              ✕
            </button>
        </div>
        <div class="modal-body">
          <div class="w-11/12 max-w-5xl mx-auto p-10 pt-0 rounded-sm">
            
          <div class="grid md:grid-cols-2 gap-10 mt-5">
            <div class="h-full flex items-center justify-center">
              <img class="w-[400px]" :src="getSingleValueFromArray(selectedProduct?.img)" alt="" />
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
                    <option v-for="(size, ind) in sizes" :key="ind" value="s">{{ size }}</option>
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
                    <option v-for="(color, ind) in colors" :key="ind" :value="color" :style="{backgroundColor: color}">{{ color }}</option>
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
                  <button @click="addToCart(selectedProduct)"
                    class="uppercase w-full px-10 py-3 bg-black text-white hover:bg-primary transition duration-500 ease-in-out"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script setup>
import { ref, watch } from "vue";
import { getSingleValueFromArray } from "../compossables/getSingleValueFromArray";

  const props = defineProps(['selectedProduct', 'modal', 'show']);

  const counter= ref(1);
  const sizes = ref([])
  const colors = ref([])

  // set the products sizes
  watch([()=> props.selectedProduct, ()=> props.show], ([newVal, newShow])=>{
    if(newShow){
      console.log('selectedProduct ', newVal);
      sizes.value = Array.isArray(newVal.size) ? newVal.size : JSON.parse(newVal.size);
      colors.value = Array.isArray(newVal.color) ? newVal.color : JSON.parse(newVal.color);
    }
  })



    const increment =()=> {
            counter.value++;
        }

     const decrement = () => {
            if (counter.value > 1) {
                counter.value--;
            }
      }

   const addToCart = (product)=> {
      // Retrieve existing cart items from local storage or initialize an empty array
      const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];

      // Check if the product is already in the cart
      const existingProductIndex = existingCartItems.findIndex(item => item.id === product.id);

      if (existingProductIndex !== -1) {
        // If the product is already in the cart, you can update quantity or other properties
        existingCartItems[existingProductIndex] = {
          ...existingCartItems[existingProductIndex],
          // Update other properties as needed
        };
      } else {
        // If the product is not in the cart, add it
        existingCartItems.push(product);
      }

      // Save the updated cart back to local storage
      localStorage.setItem('cart', JSON.stringify(existingCartItems));

      // You can also provide feedback to the user (optional)
      alert('Product added to cart!');
    }

</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  margin: auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>