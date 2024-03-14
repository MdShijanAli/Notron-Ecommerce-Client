
import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProductStore = defineStore('product', ()=>{
  const products = ref([])
  const isLoading = ref(false)
  const initialized = ref(false)

  const getProducts = ()=>{
    return products.value
  }

  const initialize = (products)=> {
    if (initialized) {
        products.value = products;
        initialized.value = true;
    }
   }

  const fetchProducts = async()=> {
    try {
      isLoading.value = true;
    
      const response = await axios.get('http://localhost:3000/api/products');

      products.value = response.data.data;
      
       console.log('Products array', products.value);
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    } finally {
      isLoading.value = false;
    }      
  }


  return { products,getProducts, initialize, initialized, isLoading, fetchProducts }
});

