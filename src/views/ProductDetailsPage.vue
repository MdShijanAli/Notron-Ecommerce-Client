<template>
  <BreadCrumbSection pageTitle="Product Detials"/>
  <div>
    <!-- Conditionally render the loading component when loading is true -->
    <div v-if="loading">
      <LoadingComponent />
    </div>

    <!-- Render the product details when not loading -->
    <div v-else class="max-w-7xl mx-auto px-6 py-20">
     
        <div class="grid grid-cols-2 gap-10">
              <div>
                 <div class="border-2 rounded-md h-[550px]">
                       <img class="w-full h-full rounded-md" :src="mainImage" alt="">
                 </div>

                 <div class="mt-5 flex gap-5">
                  <div @click="selectIMG(img)" v-for="(img,i) in images" :key="i" class="h-36 border-2 rounded-md">
                    <img class="w-full h-full rounded-md" :src="img" alt="img">
                  </div>
                 </div>
              </div>
              <div>
                <div>
                  <h1 class="text-ctah1 font-medium">{{ currentProduct.title }}</h1>
                  <h1 class="text-ctah1 font-semibold my-2">${{ currentProduct.price }}</h1>

                  <div class="flex items-center gap-5">
                    <div>
                      <i class="pi pi-star-fill text-yellow-300 mr-2 text-xl"></i>
                      <i class="pi pi-star-fill text-yellow-300 mr-2 text-xl"></i>
                      <i class="pi pi-star-fill text-yellow-300 mr-2 text-xl"></i>
                      <i class="pi pi-star-fill text-yellow-300 mr-2 text-xl"></i>
                      <i class="pi pi-star-fill text-yellow-300 mr-2 text-xl"></i>
                    </div>

                    <a href="">
                      <p class="text-lg hover:text-primary">(5 Customer Review)</p>
                    </a>
                  </div>

                  <div class="border my-10"></div>

                  <p class="text-justify tracking-wider leading-7">Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmll tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mill veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exet commodo consequat. Duis aute irure dolor</p>
                
                  <div class="py-5 flex items-center gap-10">
                    <p class="font-medium text-xl">Color</p>

                    <div>
                      <ul class="flex gap-5">
                        <li class="w-9 h-9 rounded-full bg-slate-500 border ring-1 ring-offset-2 ring-gray-300 hover:ring-primary"></li>
                        <li class="w-9 h-9 rounded-full bg-slate-800 border ring-1 ring-offset-2 ring-gray-300 hover:ring-primary"></li>
                        <li class="w-9 h-9 rounded-full bg-[#73707A] border ring-1 ring-offset-2 ring-gray-300 hover:ring-primary"></li>
                        <li class="w-9 h-9 rounded-full bg-[#C7BB9B] border ring-1 ring-offset-2 ring-gray-300 hover:ring-primary"></li>
                      </ul>
                    </div>
                  </div>
                  <div class="py-5 flex items-center gap-10">
                    <p class="font-medium text-xl">Size</p>

                    <div>
                      <ul class="flex gap-5">
                        <li class="w-9 h-9 rounded-full bg-gray-300 border ring-1 ring-offset-2 ring-gray-300 hover:ring-primary flex items-center justify-center"><a class="text-md" href="">S</a></li>
                        <li class="w-9 h-9 rounded-full bg-gray-300 border ring-1 ring-offset-2 ring-gray-300 hover:ring-primary flex items-center justify-center"><a class="text-md" href="">M</a></li>
                        <li class="w-9 h-9 rounded-full bg-gray-300 border ring-1 ring-offset-2 ring-gray-300 hover:ring-primary flex items-center justify-center"><a class="text-md" href="">L</a></li>
                        <li class="w-9 h-9 rounded-full bg-gray-300 border ring-1 ring-offset-2 ring-gray-300 hover:ring-primary flex items-center justify-center"><a class="text-md" href="">XL</a></li>
                      </ul>
                    </div>
                  </div>

                  <div class="flex gap-5 items-center my-5">
                    <div>
                      <input type="text" v-model="count" class="border border-gray-200 w-16 h-10 text-center focus:border-gray-200 focus:ring-0">
                      <div class="flex">
                        <p @click="count > 1 ? count-- : 1" class="w-8 h-6 flex items-center justify-center border hover:bg-primary group"><i class="pi pi-minus text-xs font-semibold group-hover:text-white"></i></p>
                        <p @click="count++" class="w-8 h-6 flex items-center justify-center border hover:bg-primary group"><i class="pi pi-plus text-xs font-semibold group-hover:text-white"></i></p>
                      </div>
                    </div>
                    <div>
                      <ButtonComponent title="Add to Cart" path="/"></ButtonComponent>
                    </div>
                  </div>

                  <div class="flex gap-10 pt-5 items-center">
                    <div class="flex gap-3 items-center">
                      <i class="pi pi-heart text-primary text-xl font-medium"></i>
                      <RouterLink to="/wish-list">
                        <p class="text-[#424242] text-[18px] hover:text-primary">Add to Wishlist</p>
                      </RouterLink>
                    </div>
                    <div class="flex gap-3 items-center">
                      <img class="w-7" src="/images/shuffle.png" alt="">
                      <RouterLink to="/wish-list">
                        <p class="text-[#424242] text-[18px] hover:text-primary">Add to Compare</p>
                      </RouterLink>
                    </div>
                  </div>

                  <div class="divider"></div>

                  <div class="flex items-center justify-between">
                    <p><span class="text-primary">Code : </span> Ch-256xl</p>
                    <p><span class="text-primary">Share </span> 
                    <i class="pi pi-facebook text-gray-500 mx-1 hover:text-primary"></i>
                    <i class="pi pi-twitter text-gray-500 mx-1 hover:text-primary"></i>
                    <i class="pi pi-linkedin text-gray-500 mx-1 hover:text-primary"></i>
                    </p>
                  </div>
                </div>
              </div>
        </div>

        <div>
          <div class="py-20">
            <div class=" px-4">
  <nav class="flex space-x-2 justify-center" aria-label="Tabs" role="tablist">
    <button type="button" class="hs-tab-active:font-semibold text-lg hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap text-gray-500 hover:text-primary active" id="basic-tabs-item-1" data-hs-tab="#basic-tabs-1" aria-controls="basic-tabs-1" role="tab">
      Information
    </button>
    <button type="button" class="hs-tab-active:font-semibold text-lg hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap text-gray-500 hover:text-primary" id="basic-tabs-item-2" data-hs-tab="#basic-tabs-2" aria-controls="basic-tabs-2" role="tab">
      Description
    </button>
    <button type="button" class="hs-tab-active:font-semibold text-lg hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap text-gray-500 hover:text-primary" id="basic-tabs-item-3" data-hs-tab="#basic-tabs-3" aria-controls="basic-tabs-3" role="tab">
      Reviews ({{ reviews.length }})
    </button>
  </nav>
</div>

<div class="p-10 border">
  <div id="basic-tabs-1" role="tabpanel" aria-labelledby="basic-tabs-item-1">
    <p class="text-gray-700 tracking-wider text-justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adlo minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in tun tuni reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserun mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rel aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
    </p>
  </div>
  <div id="basic-tabs-2" class="hidden" role="tabpanel" aria-labelledby="basic-tabs-item-2">
    <p class="text-gray-700 tracking-wider text-justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adlo minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in tun tuni reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserun mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rel aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
    </p>
  </div>
  <div id="basic-tabs-3" class="hidden" role="tabpanel" aria-labelledby="basic-tabs-item-3">
    <p class="text-gray-500 dark:text-gray-400">
      This is the <em class="font-semibold text-gray-800 dark:text-gray-200">third</em> item's tab body.
    </p>
  </div>
</div>
    </div>
        </div>
    </div>
  </div>
</template>
<script>
import BreadCrumbSection from '../components/global/BreadCrumbSection.vue';
import LoadingComponent from '../components/global/LoadingComponent.vue'
import { useProductStore } from '../stores/ProductStore';
import { onMounted } from 'vue';
import ButtonComponent from '../components/global/ButtonComponent.vue'
import { RouterLink } from 'vue-router';
import axios from 'axios'


export default {
    name: "ProductDetailsPage",
    components: { BreadCrumbSection, LoadingComponent, ButtonComponent, RouterLink },

  data() {
    return {
      mainImage: "",
      count: 1,
      loading: false,
      currentProduct: {},
      reviews: [],
      responsiveOptions: [
                {
                    breakpoint: '1300px',
                    numVisible: 4
                },
                {
                    breakpoint: '575px',
                    numVisible: 1
                }
      ],
      images: ['/images/product-2.webp','/images/product-3.webp', '/images/product-4.webp','/images/product-5.webp']
      }
  },
  watch: {
    $route(to, from) {
      
      if (to.params.title !== from.params.title) {
        this.updateCurrentProduct();
      }
    },
  }, 

  mounted() {
    this.updateCurrentProduct();
    // console.log(this.currentProduct)
    
  },




  methods: {

    async fetchReviews(currentProduct) {
      const id = currentProduct.id
      this.loading = true;
      
      try {
        const response = await axios.get(`http://localhost:3000/api/reviews/${id}`);

        this.reviews = response.data;
        console.log('Fetched reviews:', this.reviews);

      }catch (error) {
        console.error('Error fetching reviews:', error.message);
      } finally {
        this.loading = false;
      }
      
    },

  async updateCurrentProduct() {
  this.loading = true;
  const title = this.$route.params.title;
  try {
    await this.productStore.fetchProducts();
    console.log(title);
    console.log(this.productStore.products);

    // Assuming the title is a unique identifier for the product
    this.currentProduct = this.productStore.products.find(product => product.title.replace(/ /g, '-') === title);
    this.mainImage = this.currentProduct.img
  } catch (error) {
    console.error('Error fetching product details:', error);
  } finally {
    this.loading = false;
    this.fetchReviews(this.currentProduct)
  }
    },
    selectIMG(img) {
      this.mainImage = img
    }

  },


  setup() {
        const productStore = useProductStore();
        onMounted(async () => {
          await productStore.fetchProducts();
          // console.log(productStore.products);
        });
        return {
            productStore
        };
    },
 

}
</script>
<style scoped>
.p-tabview-nav {
    display: flex;
    justify-content: center !important;
}

@import "primeflex/primeflex.css";
</style>