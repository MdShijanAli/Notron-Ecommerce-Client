import { ref } from "vue"
import productService from "../services/productService"
import { useProductStore } from "../stores/ProductStore"

export function useProducts(){
  const productLists = ref([])
  const isProductLoading = ref(false)
  const productStore = useProductStore()

  const fetchProducts = async()=>{
    isProductLoading.value = true
    try{
      if (!productStore.initialized) {
        const fetchedData = await productService.fetchLists();
        productStore.initialize(fetchedData);
      }

    // Update productList with the fetched data
      productLists.value = productStore.getProducts();
      console.log('produtcLost', productLists.value);
    }
    catch(error){
       console.log(error);
    }
    finally{
       isProductLoading.value = false
    }
  }


  return{
    productLists,
    fetchProducts,
    isProductLoading
  }
}