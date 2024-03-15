import { apiRoutes } from "../api/ApiRoutes";
import { useReviewStore } from "../stores/reviewStore";
import createApiService from "./createApiService";

const reviewApiService =  createApiService(apiRoutes.review.reviews, useReviewStore);

const reviewService =  {
  ...reviewApiService,
  // Fetch here others reviews
}

export default reviewService;