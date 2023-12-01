<template>
  <!-- :style="{ backgroundImage: 'url(' + item.img + ')' }" -->
  <div class="lg:p-[120px] md:p-[100px] p-[50px] bg-cover bg-no-repeat bg-center" :style="{ backgroundImage: 'url(' + img + ')' }">
     <div class="text-center">
        <h1 class="lg:text-breadCrumbHeader md:text-4xl text-2xl text-white">{{ pageTitle }}</h1>

        <div class="lg:mt-5 ">
          <ol class="flex items-center justify-center whitespace-nowrap p-2 text-primary" aria-label="Breadcrumb">
              <li class="inline-flex items-center">
                <RouterLink class="flex items-center lg:text-2xl md:text-lg text-md text-[#bbbbbb] hover:text-primary focus:outline-none focus:text-primary" to="/">
                  <svg class="flex-shrink-0 me-3 lg:h-5 w-4 h-4 lg:w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  Home
                </RouterLink>
                <svg class="flex-shrink-0 mx-2 overflow-visible lg:h-6 w-5 h-5 lg:w-6 text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </li>
              <li class="inline-flex items-center lg:text-2xl md:text-lg text-md" aria-current="page">
                {{ pageTitle }}
              </li>
          </ol>
        </div>
    
     </div>
  </div>
</template>
<script>
import breaddcurmbimg from '../assets/images/breadCrumbSection.webp'


export default {
  name: "BreadCrumbSection",
  props: ['pageTitle'],

  data() {
    return {
      img: breaddcurmbimg
    }
  }
}

</script>
<style>
  
</style>