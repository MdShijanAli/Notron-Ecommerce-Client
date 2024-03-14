import axios from "axios";
import { defineStore } from "pinia";


export const useReviewStore = defineStore('review', {
  
  state: () => ({
    reviews: [],
    isLoading: false,
  }),


  actions: {
    async fetchReviews(id) {
      try {
        this.isLoading = true;
        const response = await axios.get(`http://localhost:3000/api/reviews/${id}`);
        this.reviews = response.data
          
        console.log('review', this.reviews)
      }
      catch {
        console.error('Error fetching reviews:', error.message);
      }
      finally {
        this.isLoading = false;
      }
    }
  }



})