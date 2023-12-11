<template>
  <BreadCrumbSection pageTitle="Product Detials"/>
  <div>
    <!-- Conditionally render the loading component when loading is true -->
    <div v-if="loading">
      <LoadingComponent />
    </div>

    <!-- Render the product details when not loading -->
    <div v-else class="maz-w-7xl mx-auto px-6 py-20">
      <h1>{{ currentProduct.title }}</h1>
        <div class="grid grid-cols-2 gap-10">
              <div>
                <Galleria :value="currentProduct.img" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
                    <template #item="slotProps">
                        <img :src="slotProps.item" :alt="slotProps.item.alt" style="width: 100%" />
                    </template>
                    <template #thumbnail="slotProps">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
                    </template>
                </Galleria>
              </div>
              <div></div>
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
    console.log(this.currentProduct)
    this.updateCurrentProduct();
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
          console.log(productStore.products);
        });
        return {
            productStore
        };
    },
 

}
</script>
<style>
  
</style>