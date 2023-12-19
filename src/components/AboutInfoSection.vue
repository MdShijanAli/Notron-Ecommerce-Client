<template>
  <div>
    <div class="max-w-7xl mx-auto px-6 py-20">
        <div class="grid lg:grid-cols-2 justify-center items-center gap-10">
            <div class="group">
              <img class="group-hover:-translate-y-5 transition ease-in-out duration-500" :src="img" alt="">
            </div>
            <div class="">
              <div class="lg:pb-16 pb-8">
                <h2 class="lg:text-h1 text-xl md:text-2xl text-[#444444] font-thin">Smart Life</h2>
              <h1 class="lg:text-head text-3xl md:text-4xl lg:mt-4 mt-2 font-bold text-[#444444] lg:py-5 ">With Smart Shoes</h1>
              <p class="lg:text-paragraph leading-8 mt-4 lg:tracking-wider tracking-wide text-md text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmol tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minivel quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata non proident, sunt in culpa qui officia.</p>

              </div>
          
                <div class="lg:pb-10 pb-5">
                  <ButtonComponent title="Shop Now" path="/shop"/>
                </div>
          
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import img1 from '@/assets/images/aboutinfornimg.webp';
import ButtonComponent from './global/ButtonComponent.vue';

export default {
    name: "AboutInfoSection",
    data() {
        return {
            img: img1
        };
    },
    components: { ButtonComponent }
}
</script>
<style>
  
</style>