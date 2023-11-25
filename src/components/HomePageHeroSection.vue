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
    <swiper-slide
      ><img
        src="../assets/images/slider-02.webp" /></swiper-slide
    ><swiper-slide
      ><img
        src="../assets/images/slider-04.webp" /></swiper-slide
    >
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

  // import './style.css';

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
   name: "HomePageHeroSection",
  default() {
    return {
      
    }
  }
  };
</script>

<style scoped>
 .swiper-slide.swiper-slide-visible.swiper-slide-fully-visible img{
  width:100%;
 }
</style>
