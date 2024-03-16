import axios from "axios";
import { apiRoutes } from "../api/ApiRoutes";
import { useReviewStore } from "../stores/reviewStore";
import createApiService from "./createApiService";

const reviewApiService =  createApiService(apiRoutes.review.reviews, useReviewStore);

const reviewService =  {
  ...reviewApiService,
  // Fetch here others reviews

   fetchReviewsById: async (id) => {
    try {
        const url = `${apiRoutes.review.reviewsByProductId}${id ? `/${id}` : ''}`;
        console.log('url:', url);
        const response = await axios.get(url);

        console.log('response from reviewService:', response.data.data);

        if (response && response.status === 200) {
            return response.data.data;
        }
    } catch (error) {
        throw error;
    }
}

}

export default reviewService;