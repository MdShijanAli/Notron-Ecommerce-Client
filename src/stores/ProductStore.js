
import axios from 'axios';
import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    isLoading: false,
  }),

  actions: {
    async fetchProducts() {
      try {
        this.isLoading = true;
      
        const response = await axios.get('http://localhost:3000/api/products');
         console.log('Fetching products',response.data);
         
        this.products = response.data;
        
         console.log('Products array',this.products);
      } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
      } finally {
        this.isLoading = false;
      }      
    },

    
  },
});

