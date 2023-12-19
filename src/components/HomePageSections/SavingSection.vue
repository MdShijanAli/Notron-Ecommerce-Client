<template>
   <div class="text-center lg:text-left">
              <div class="lg:pb-20 pb-10">
                <h2 class="lg:text-h1 text-xl md:text-2xl text-primary font-light">Saving 50%</h2>
              <h1 :class="color" class="lg:text-head text-3xl md:text-4xl font-bold lg:py-8 py-5">All Online Store</h1>
              <p :class="colorPara" class="lg:text-bannerParagraph text-lg">OFFER AVAILABLE ALL SHOES & PRODUCTS</p>

              </div>
          
                <div class="lg:pb-10 pb-5">
                  <ButtonComponent title="Shop Now" path="/shop"/>
                </div>
          
            </div>
</template>
<script>
import ButtonComponent from '../global/ButtonComponent.vue';


export default {
    name: "SavingSection",
    props: ['color', 'colorPara'],
    data() {
        return {};
    },
    components: { ButtonComponent }
}
</script>
<style>
  
</style>