import { defineStore } from "pinia";
import { ref } from "vue";

export const useReviewStore = defineStore('review', ()=>{
  const reviews = ref([]);
  const initialized = ref(false);

  const getAllReviews = () =>{
    return reviews.value;
  }

  const initialize = (newReviews)=>{
    if(!initialized.value){
      reviews.value = newReviews;
      initialized.value = true
    }
  }

  return {reviews, initialize, initialized, getAllReviews}
})