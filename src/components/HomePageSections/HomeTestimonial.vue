<template>
  <div>
    <div class="max-w-7xl mx-auto px-6 pt-10 pb-20">
            <TitleDescriptionSlot headline="Client Feedback" description="There are many variations of passages of Lorem Ipsum available"></TitleDescriptionSlot>
    
    
            <!-- <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"> -->
      <!-- Card -->
      <!-- <div v-for="testimonial in testimonials" :key="testimonial.id" class="flex h-auto border rounded-sm"> -->
        <div class="card">
          <!-- circular :autoplayInterval="3000" -->
        <Carousel :value="testimonials" :numVisible="2" :numScroll="1" :responsiveOptions="responsiveOptions" >  
            <template #item="{data}">
        <div class="border  mx-3 bg-white rounded-sm ">
          <div class="flex-auto p-4 md:p-6">
            <p class="text-base italic md:text-lg text-gray-800 dark:text-gray-200">
              " {{ data.description }} "
            </p>
          </div>

          <div class="p-4 bg-gray-100 rounded-b-sm md:px-7 dark:bg-slate-700">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img class="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]" :src="data.img" :alt="data.name">
              </div>

              <div class="grow ms-3">
                <p class="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200">
                  {{ data.name }}
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  {{ data.job }}
                </p>
              </div>
            </div>
          </div>
        </div>
              </template>
          </Carousel>    
        </div>

      <!-- </div> -->

      
      <!-- End Card -->
    <!-- </div> -->
    <!-- End Grid -->

          </div>
  </div>
</template>
<script setup>
import TitleDescriptionSlot from '../global/TitleDescriptionSlot.vue';
import img1 from "@/assets/images/client-1.avif"
import img2 from "@/assets/images/client-2.avif"
import img3 from "@/assets/images/client-3.avif"
import { ref } from "vue";


const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '600px',
        numVisible: 1,
        numScroll: 1
    }
]);


const testimonials = [
        {
          id: 1,
          img: img1,
          name: "Josh Tyson",
          job: " Product Manager | Capsule",
          description: "With Preline, we're able to easily track our performance in full detail. It's become an essential tool for us to grow and engage with our audience."
        },
        {
          id: 2,
          img: img2,
          name: "Luisa",
          job: " Senior Director of Operations | Fitbit",
          description: "In September, I will be using this theme for 2 years. I went through multiple updates and changes and I'm very glad to see the consistency and effort made by the team."
        },
        {
          id: 3,
          img: img3,
          name: "Alisa Williams",
          job: " Entrepreneur | Happy customer",
          description: "Refreshing and Thought provoking design and it changes my view about how I design the websites. Great typography, modern clean white design, nice tones of the color."
        },
        
      ]
</script>
<style>
  
</style>