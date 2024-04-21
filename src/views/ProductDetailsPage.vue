<template>
  <div>
    <BreadCrumbSection pageTitle="Product Detials" />
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
              <img class="w-full h-full rounded-md" :src="mainImage" alt="" />
            </div>

            <div class="mt-5 grid grid-cols-4 gap-5">
              <div
                @click="selectIMG(img)"
                v-for="(img, i) in images"
                :key="i"
                class="h-32 w-full border-2 rounded-md"
              >
                <img class="w-full h-full rounded-md" :src="img" alt="img" />
              </div>
            </div>
          </div>
          <div>
            <div>
              <h1 class="text-ctah1 font-medium">{{ currentProduct.title }}</h1>
              <h1 class="text-ctah1 font-semibold my-2">
                ${{ currentProduct.price }}
              </h1>

              <div class="flex items-center gap-5">
                <div>
                  <Rating v-model="avgRating" readonly :cancel="false" />
                </div>

                <a href="">
                  <p class="text-lg hover:text-primary">
                    ( {{ reviewLists.length }} Customer Review)
                  </p>
                </a>
              </div>

              <div class="border my-10"></div>

              <p class="text-justify tracking-wider leading-7">
                Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do
                eiusmll tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad mill veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip exet commodo consequat. Duis aute irure dolor
              </p>

              <div class="py-5 flex items-center gap-10">
                <p class="font-medium text-xl">Color</p>

                <div>
                  <ul class="flex gap-5">
                    <li
                      v-for="(color, ind) in colors"
                      :key="ind"
                      :style="{ backgroundColor: color }"
                      @click="selectColor(color)"
                      :class="{ 'ring-primary': selectedColor === color }"
                      class="w-10 h-10 rounded-full border ring-1 ring-offset-2 ring-gray-300 hover:ring-primary"
                    ></li>
                  </ul>
                </div>
              </div>
              <div class="py-5 flex items-center gap-10">
                <p class="font-medium text-xl">Size</p>

                <div>
                  <ul class="flex gap-5">
                    <li
                      v-for="(size, ind) in sizes"
                      :key="ind"
                      @click="selectSize(size)"
                      :class="{ 'ring-primary': selectedSize === size }"
                      class="w-10 h-10 rounded-full bg-gray-300 border ring-1 ring-offset-2 ring-gray-300 hover:ring-primary flex items-center justify-center"
                    >
                      <p class="text-md cursor-pointer">{{ size }}</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="flex gap-5 items-center my-5">
                <div>
                  <input
                    type="text"
                    v-model="count"
                    class="border border-gray-200 w-16 h-10 text-center focus:border-gray-200 focus:ring-0"
                  />
                  <div class="flex">
                    <p
                      @click="count > 1 ? count-- : 1"
                      class="w-8 h-6 flex items-center justify-center border hover:bg-primary group"
                    >
                      <i
                        class="pi pi-minus text-xs font-semibold group-hover:text-white"
                      ></i>
                    </p>
                    <p
                      @click="count++"
                      class="w-8 h-6 flex items-center justify-center border hover:bg-primary group"
                    >
                      <i
                        class="pi pi-plus text-xs font-semibold group-hover:text-white"
                      ></i>
                    </p>
                  </div>
                </div>
                <div>
                  <ButtonComponent
                    title="Add to Cart"
                    path="/"
                  ></ButtonComponent>
                </div>
              </div>

              <div class="flex gap-10 pt-5 items-center">
                <div class="flex gap-3 items-center">
                  <i class="pi pi-heart text-primary text-xl font-medium"></i>
                  <RouterLink to="/wish-list">
                    <p class="text-[#424242] text-[18px] hover:text-primary">
                      Add to Wishlist
                    </p>
                  </RouterLink>
                </div>
                <div class="flex gap-3 items-center">
                  <img class="w-7" src="/images/shuffle.png" alt="" />
                  <RouterLink to="/wish-list">
                    <p class="text-[#424242] text-[18px] hover:text-primary">
                      Add to Compare
                    </p>
                  </RouterLink>
                </div>
              </div>

              <div class="divider"></div>

              <div class="flex items-center justify-between">
                <p><span class="text-primary">Code : </span> Ch-256xl</p>
                <p>
                  <span class="text-primary">Share </span>
                  <i
                    class="pi pi-facebook text-gray-500 mx-1 hover:text-primary"
                  ></i>
                  <i
                    class="pi pi-twitter text-gray-500 mx-1 hover:text-primary"
                  ></i>
                  <i
                    class="pi pi-linkedin text-gray-500 mx-1 hover:text-primary"
                  ></i>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Description and Reviews Section -->
        <div>
          <div class="py-20">
            <div class="px-4">
              <nav
                class="flex space-x-2 justify-center"
                aria-label="Tabs"
                role="tablist"
              >
                <button
                  @click="selectTab('Information')"
                  type="button"
                  :class="{ 'border-primary': showDesc }"
                  class="text-lg hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-x-2 border-b-2 transition duration-500 ease-in-out whitespace-nowrap text-gray-500 hover:text-primary active"
                >
                  Information
                </button>
                <button
                  @click="selectTab('Description')"
                  type="button"
                  :class="{ 'border-primary': showLongDesc }"
                  class="text-lg hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-x-2 border-b-2 transition duration-500 ease-in-out whitespace-nowrap text-gray-500 hover:text-primary"
                >
                  Description
                </button>
                <button
                  @click="selectTab('Reviews')"
                  type="button"
                  :class="{ 'border-primary': showReviews }"
                  class="text-lg hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-x-2 border-b-2 transition duration-500 ease-in-out whitespace-nowrap text-gray-500 hover:text-primary"
                >
                  Reviews ({{ reviewLists.length }})
                </button>
              </nav>
            </div>

            <div class="p-10 border">
              <div v-if="showDesc">
                <p class="text-gray-700 tracking-wider text-justify">
                  {{ currentProduct?.description }}
                </p>
              </div>
              <div v-if="showLongDesc">
                <p class="text-gray-700 tracking-wider text-justify">
                  {{ currentProduct?.long_description }}
                </p>
              </div>
              <div v-if="showReviews">
                <p class="text-gray-500 dark:text-gray-400">
                  <ReviewsSection :reviews="reviewLists" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";
import ReviewsSection from "../components/ProductDetails/ReviewsSection.vue";
import BreadCrumbSection from "../components/global/BreadCrumbSection.vue";
import ButtonComponent from "../components/global/ButtonComponent.vue";
import LoadingComponent from "../components/global/LoadingComponent.vue";
import { useProducts } from "../compositions/useProducts";
import { useReviews } from "../compositions/useReviews";

// get route
const route = useRoute();

// Composition
const { productLists, fetchProducts, isProductLoading } = useProducts();
const { reviewLists, fetchReviews, fetchReviewsById, isReviewLoading } =
  useReviews();

const mainImage = ref("");
const count = ref(1);
const loading = ref(false);
const currentProduct = ref({});
const sizes = ref([]);
const colors = ref([]);
const productId = ref("");
const reviews = ref([]);
const showDesc = ref(true);
const showLongDesc = ref(false);
const showReviews = ref(false);
const images = ref([]);
const selectedSize = ref("");
const selectedColor = ref("");
const avgRating = ref(null);

watch(
  () => route.value,
  async (newVal, oldVal) => {
    if (newVal.params.title !== oldVal.params.title) {
      await updateCurrentProduct();
    }
  }
);

watch(
  () => reviewLists.value,
  (newVal, oldVal) => {
    if (newVal) {
      const rating = newVal.map((rat) => rat.rating);
      avgRating.value = rating.reduce((p, n) => p + n, 0) / rating.length;
      console.log("rating", avgRating.value);
    }
  }
);

// set the products sizes
watch(
  () => currentProduct.value,
  (newVal, oldVal) => {
    if (newVal) {
      sizes.value = Array.isArray(newVal.size)
        ? newVal.size
        : JSON.parse(newVal.size);
      colors.value = Array.isArray(newVal.color)
        ? newVal.color
        : JSON.parse(newVal.color);
      mainImage.value = Array.isArray(newVal.img)
        ? newVal.img
        : JSON.parse(newVal.img)[0];
      images.value = Array.isArray(newVal.img)
        ? newVal.img
        : JSON.parse(newVal.img);
    }
  }
);

// fetch the reviews with the product id
watch(
  () => currentProduct.value,
  async (newVal, oldVal) => {
    if (newVal) {
      console.log("Current Product Detaisl: ", newVal);
      const productId = newVal.id;
      await fetchReviewsById(productId);
    }
  }
);

// Initially fetch the update current Product data
onMounted(async () => {
  await updateCurrentProduct();
});

// Get the current Product Value
const updateCurrentProduct = async () => {
  const title = route.params.title;
  loading.value = true;
  try {
    await fetchProducts();
    currentProduct.value = productLists.value?.find(
      (product) => product.title.replace(/ /g, "-") === title
    );
  } catch (error) {
    console.log("Error Fetching Details", error);
  } finally {
    loading.value = false;
  }
};

// Set  the main image value
const selectIMG = (img) => {
  mainImage.value = img;
};

// set selected color
const selectColor = (val) => {
  selectedColor.value = val;
};

// set selected color
const selectSize = (val) => {
  selectedSize.value = val;
};

// Select the tab
const selectTab = (val) => {
  console.log(val);
  if (val === "Information") {
    showDesc.value = true;
    showLongDesc.value = false;
    showReviews.value = false;
  } else if (val === "Description") {
    showDesc.value = false;
    showLongDesc.value = true;
    showReviews.value = false;
  } else {
    showDesc.value = false;
    showLongDesc.value = false;
    showReviews.value = true;
  }
};
</script>
<style scoped>
.p-tabview-nav {
  display: flex;
  justify-content: center !important;
}

@import "primeflex/primeflex.css";
</style>
