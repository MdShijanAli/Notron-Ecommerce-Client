<template>
  <swiper
    :spaceBetween="30"
    :effect="'fade'"
    :navigation="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="xl:h-screen lg:h-[600px] md:h-[500px] h-[300px] w-full relative flex items-center">
          <img src="../assets/images/slider-02.webp" class="w-full h-full bg-cover" alt="Nature">
          <div class="absolute inset-0 bg-black opacity-30"></div>
        </div>
        <div class="md:max-w-7xl w-full mx-auto px-6 text-center absolute inset-0 flex flex-col xl:items-start items-center justify-center text-white">
          <div class="lg:text-left text-center">
            <p class="md:text-bannerParagraph text-base font-medium">Up To 30% Off</p>
            <h2 class="lg:text-banner md:text-5xl text-3xl font-semibold leading-none lg:mt-5 mt-3 lg:mb-10 mb-6">
              <span class="font-light">Exclusive<br> </span>New Shoes
            </h2>
            <RouterLink to="/shop">
              <button class="border-2 border-white hover:bg-primary hover:border-primary transition duration-700 ease-in-out text-white text-sm sm:text-md md:text-lg px-3 sm:px-4 py-2 md:px-10 md:py-3 mt-3 md:mt-4 animate-top">
                Shop Now
              </button>
            </RouterLink>
          </div>
        </div>
      </swiper-slide>
    <swiper-slide>
      <div class="xl:h-screen lg:h-[600px] md:h-[500px] h-[300px] w-full relative flex items-center">
          <img src="../assets/images/slider-04.webp" class="w-full h-full bg-cover" alt="Nature">
          <div class="absolute inset-0 bg-black opacity-30"></div>
        </div>
        <div class="md:max-w-7xl w-full mx-auto px-6 text-center absolute inset-0 flex flex-col xl:items-start items-center justify-center text-white">
          <div class="lg:text-left text-center">
            <p class="md:text-bannerParagraph text-base font-medium">Up To 30% Off</p>
            <h2 class="lg:text-banner md:text-5xl text-3xl font-semibold leading-none lg:mt-5 mt-3 lg:mb-10 mb-6">
              <span class="font-light">Exclusive<br> </span>New Shoes
            </h2>
            <RouterLink to="/shop">
              <button class="border-2 border-white hover:bg-primary hover:border-primary transition duration-700 ease-in-out text-white text-sm sm:text-md md:text-lg px-3 sm:px-4 py-2 md:px-10 md:py-3 mt-3 md:mt-4 animate-top">
                Shop Now
              </button>
            </RouterLink>
          </div>
        </div>
      </swiper-slide>

  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/effect-fade';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';


  // import required modules
  import { EffectFade, Navigation, Pagination } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [EffectFade, Navigation, Pagination],
      };
    },
  };
</script>


<style>
.swiper-slide.swiper-slide-visible.swiper-slide-fully-visible img {
  width: 100%
}
.swiper-button-prev,.swiper-button-next,span.swiper-pagination-bullet.swiper-pagination-bullet-active  {
    color: #EB3E32;
}

@media screen and (max-width: 767px) {
  .swiper-button-prev,.swiper-button-next{
    display:none;
  }
}
</style>