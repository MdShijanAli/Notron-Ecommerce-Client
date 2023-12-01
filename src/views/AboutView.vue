<template>
  <BreadCrumbSection pageTitle="About Us"/>
  
  <div class="">
    <div class="max-w-7xl mx-auto px-6 py-10 lg:py-20">
        <div class="lg:grid lg:grid-cols-2 flex flex-col-reverse gap-10 items-center">
            <div>
                <h1 class="lg:text-h1 text-2xl font-semibold lg:font-light">Welcome To Notron Store!</h1>
                <p class="text-justify py-3 lg:py-5 leading-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident ducimus id mollitia quisquam accusamus recusandae enim dolorem vitae laborum amet molestiae, molestias alias, neque impedit, assumenda corporis. Facere esse, error? Molestias explicabo voluptate, odit excepturi molestiae pariatur facilis facere, sunt laborum earum tenetur inventore! Error voluptatum iusto quidem officia, et omnis cupiditate rem, tenetur odit explicabo adipisci totam, eius?</p>
            
                <div class="mt-10">
                 <ButtonComponent title="See All Products" path="/shop"/>
                </div>
              </div>
            <div class="relative">
               <img :src="img1" alt="">
               <div class="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
            </div>
        </div>
    </div>
  </div>

  <AboutInfoSection />
</template>
<script>
import BreadCrumbSection from '../components/BreadCrumbSection.vue';
import AboutInfoSection from '../components/AboutInfoSection.vue';
import bg1 from '../assets/images/bg1.webp'
import SavingSection from '../components/SavingSection.vue';
import ButtonComponent from '../components/ButtonComponent.vue';
import aboutimg from '../assets/images/about2.webp'

export default {
    name: "AboutView",
    components: { BreadCrumbSection, AboutInfoSection, SavingSection, ButtonComponent },

  data() {
    return {
      img: bg1,
      img1: aboutimg
    }
  }
}
</script>
<style>

</style>