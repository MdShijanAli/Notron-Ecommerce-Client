import { apiRoutes } from "../api/ApiRoutes";
import { useBlogStore } from './../stores/blogStore';
import createApiService from "./createApiService";

const blogApiService = createApiService(apiRoutes.blog.blogs, useBlogStore);

const blogService = {
  ...blogApiService,
  // Extra  API Data
}

export default blogService;