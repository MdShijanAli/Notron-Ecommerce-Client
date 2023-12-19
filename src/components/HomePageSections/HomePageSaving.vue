<template>
  <div class="bg-savingBG">
    <div class="max-w-7xl mx-auto px-6 py-20">
        <div class="grid lg:grid-cols-2 justify-center items-center gap-10">
          <div class="relative group">
              <div class="">
              <div class=" absolute sm:bottom-[60px] lg:bottom-[70px] lg:left-[130px] md:bottom-[100px] md:left-[120px] bottom-[100px] left-[30px] sm:left-[100px] z-20">
                <span>
                  <img class="w-[350px] h-auto group-hover:-translate-y-5 transition ease-in-out duration-500" :src="img1" alt="Image-HasTech">
                </span>
              </div>
              <div class="absolute left-0 bottom-0 z-10" >
                <img class="w-[532px] h-[326px] group-hover:-translate-x-5 transition ease-in-out duration-500" :src="img2" alt="Image-HasTech">
              </div>
              <div class="sm:ml-20 ml-10">
                <img :src="img3" width="280" height="339" alt="Image-HasTech">
              </div>
            </div>
            </div>

           <SavingSection color="text-white" colorPara="text-white"/>
        </div>
    </div>
  </div>
</template>
<script>
import SavingSection from './SavingSection.vue';
import shapeimg from '@/assets/images/shape-img.webp'
import shape from '@/assets/images/shape.webp'
import shape1 from '@/assets/images/shape-1.webp'

export default {
    name: "HomePageSaving",
    data() {
        return {
          img1: shapeimg,
      img2: shape,
      img3: shape1
        };
    },
    components: { SavingSection }
}
</script>
<style scoped>

</style>