<template>
  <div class="bg-bannerBg">
  <div class="max-w-7xl mx-auto px-6 py-20">
    <div class="sm:grid sm:grid-cols-2 flex flex-col-reverse items-center gap-10">
             <div class="text-white">
                 <h1 class="lg:text-banner text-2xl text-center sm:text-left uppercase font-semibold lg:leading-[6rem] tracking-wider">Exclusive New Shoes</h1>
                 <p class="lg:text-bannerParagraph text-base tracking-wider lg:my-6 my-3 text-center sm:text-left">Up To 30% Off All Shoes & Products</p>

                 <div class="lg:mt-16 mt-10 text-center sm:text-left">
                  <RouterLink class="lg:px-16 px-10 lg:py-5 py-3 text-h3 font-medium  border-2 hover:bg-primary transition duration-500 ease-in-out hover:border-primary" to="/shop">
                    Shop Now
                 </RouterLink>
                 </div>
             </div>
             <div class="p-10">
              <div class="bg-cover bg-no-repeat relative w-full h-full" style="background-image: url(../src/assets/images/2.webp);">
                      <img classs="w-[200px]" src="../assets/images/slider-01.webp" alt="">
             </div>
             </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "HomePageHeroSection"
}
</script>
<style scoped>


    .bg-no-repeat img {
      transition: transform 0.3s ease-in-out;
    }

    .bg-no-repeat:hover img {
      transform: translate(10px, 10px); /* Adjust the values according to your preference */
    }
</style>