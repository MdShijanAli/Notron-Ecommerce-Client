
import { defineStore } from 'pinia';

export const useBlogStore = defineStore('blog', {
  state: () => ({
    blogs: [],
    isLoading: false,
  }),

  actions: {
    async fetchBlogs() {
      try {
        this.isLoading = true;

        // Replace 'your_api_endpoint' with the actual API endpoint to fetch products
        const response = await fetch('http://localhost:3000/api/blogs');
        const data = await response.json();

        // Assuming the API response contains an array of products
        this.blogs = data;
        // console.log(this.products)

        this.isLoading = false;
      } catch (error) {
        console.error('Error fetching products:', error);
        this.isLoading = false;
      }
    },
  },
});

// Export a function to create a new instance of the store
export function setup() {
  return useBlogStore();
}