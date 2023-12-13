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
                 <div class="border rounded-md">
                       <img class="w-full" :src="currentProduct.img" alt="">
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
                </div>
              </div>
        </div>
    </div>
  </div>
</template>
<script>
import BreadCrumbSection from '../components/BreadCrumbSection.vue';
import LoadingComponent from '../components/LoadingComponent.vue'
import { useProductStore } from '../stores/ProductStore';
import { onMounted } from 'vue';


export default {
    name: "ProductDetailsPage",
    components: { BreadCrumbSection,LoadingComponent },

  data() {
    return {
      loading: false,
      currentProduct: {},
      responsiveOptions: [
                {
                    breakpoint: '1300px',
                    numVisible: 4
                },
                {
                    breakpoint: '575px',
                    numVisible: 1
                }
            ]
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
  async updateCurrentProduct() {
  this.loading = true;
  const title = this.$route.params.title;
  try {
    await this.productStore.fetchProducts();
    console.log(title);
    console.log(this.productStore.products);

    // Assuming the title is a unique identifier for the product
    this.currentProduct = this.productStore.products.find(product => product.title.replace(/ /g, '-') === title);
  } catch (error) {
    console.error('Error fetching product details:', error);
  } finally {
    this.loading = false;
  }
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
<style>
  
</style>