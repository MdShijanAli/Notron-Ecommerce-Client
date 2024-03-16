import { ref } from "vue";
import reviewService from '../services/reviewService';
import { useReviewStore } from "../stores/reviewStore";

export function useReviews(){
  const reviewLists = ref([]);
  const isReviewLoading = ref(false);
  const reviewStore = useReviewStore()

  const fetchReviews = async(reviewId) =>{
      try{
        if(!reviewStore.initialized){
          const fetchData = await reviewService.fetchLists(reviewId);
          reviewStore.initialize(fetchData)
        }

        reviewLists.value = reviewStore.getAllReviews()
      }
      catch(error){
        console.log(error);
      }
      finally{
        isReviewLoading.value = false
      }
  }

  const fetchReviewsById = async(productId) =>{
      try{
        const fetchData = await reviewService.fetchReviewsById(productId);

        reviewLists.value = fetchData
        console.log('Reviews match ProductId', reviewLists.value);
      }
      catch(error){
        console.log(error);
      }
      finally{
        isReviewLoading.value = false
      }
  }

  return {
    reviewLists,
    isReviewLoading,
    fetchReviews,
    fetchReviewsById
  }
}