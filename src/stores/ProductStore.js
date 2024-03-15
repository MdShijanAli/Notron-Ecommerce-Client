
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProductStore = defineStore('product', ()=>{
  const products = ref([])
  const initialized = ref(false)

  const getProducts = ()=>{
    return products.value
  }

  const initialize = (newProducts)=> {
    if (!initialized.value) {
        products.value = newProducts;
        initialized.value = true;
    }
   }

  return { products,getProducts, initialize, initialized }
});

