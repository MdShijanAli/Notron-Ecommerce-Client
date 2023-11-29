<template>
  <div>
    <div class="max-w-7xl mx-auto px-6 py-10">
            <TitleDescriptionSlot headline="Client Feedback" description="There are many variations of passages of Lorem Ipsum available"></TitleDescriptionSlot>
    
    
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Card -->
      <div v-for="testimonial in testimonials" :key="testimonial.id" class="flex h-auto border rounded-sm">
        <div class="flex flex-col bg-white rounded-sm dark:bg-slate-900">
          <div class="flex-auto p-4 md:p-6">
            <p class="text-base italic md:text-lg text-gray-800 dark:text-gray-200">
              " {{ testimonial.description }} "
            </p>
          </div>

          <div class="p-4 bg-gray-100 rounded-b-sm md:px-7 dark:bg-slate-700">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img class="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]" :src="testimonial.img" :alt="testimonial.name">
              </div>

              <div class="grow ms-3">
                <p class="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200">
                  {{ testimonial.name }}
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  {{ testimonial.job }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Card -->
    </div>
    <!-- End Grid -->

          </div>
  </div>
</template>
<script>
import TitleDescriptionSlot from './TitleDescriptionSlot.vue';
import img1 from "../assets/images/client-1.avif"
import img2 from "../assets/images/client-2.avif"
import img3 from "../assets/images/client-3.avif"

export default {
    name: "HomeTestimonial",
  components: { TitleDescriptionSlot },

  data() {
    return {
      testimonials: [
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
    }
  }
}
</script>
<style>
  
</style>