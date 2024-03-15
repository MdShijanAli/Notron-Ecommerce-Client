import { ref } from "vue";
import { useReviewStore } from "../stores/reviewStore";
import reviewService from './../services/userReviewService';

export function useReviews(){
  const reviewLists = ref([]);
  const isReviewLoading = ref(false);
  const reviewStore = useReviewStore()

  const fetchReviews = async(productId) =>{
      try{
        if(!reviewStore.initialized){
          const fetchData = await reviewService.fetchLists();
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

  return {
    reviewLists,
    isReviewLoading,
    fetchReviews
  }
}