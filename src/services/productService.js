import { apiRoutes } from "../api/ApiRoutes";
import { useProductStore } from "../stores/ProductStore";
import createApiService from "./createApiService";

const productApiService = createApiService(apiRoutes.product.products, useProductStore);

const productService = {
    ...productApiService,
    // Fetch another logics
};

export default productService;