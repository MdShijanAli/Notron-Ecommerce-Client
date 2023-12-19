<template>
  <BreadCrumbSection pageTitle="Contact Us"/>

  <div>
    <div class="max-w-7xl mx-auto px-6 py-20">
          <div class="grid xl:grid-cols-5 grid-cols-1 gap-8">
                 <div class="xl:col-span-4 rounded-md shadow-lg border md:p-10 p-5 py-10 relative">
                    <h1 class="lg:text-h1 text-h2 font-semibold">We Are Here! <br>
                        Please Send A Quest</h1>

                        <div class="mt-10">
                          <form action="">
                            <div class="sm:flex grid gap-8">
                              <input required type="text" class="py-4 px-4 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary" placeholder="Name *">
                              <input required type="email" class="py-4 px-4 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary" placeholder="Email *">
                            </div>
                            <input type="text" class="py-4 my-8 px-4 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary" placeholder="Subject (Optional)">
                            <textarea class="py-3 px-4 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary" rows="10" placeholder="Message"></textarea>                         
                          
                             <button type="submit" class="md:px-14 px-8 py-3 md:py-4 rounded-sm bg-primary border-2 md:mt-20 mt-10 text-white transition duration-500 ease-in-out hover:text-black font-semibold text-lg border-primary hover:bg-white">Send Message</button>
                          </form>
                        </div>

                        <div class="absolute top-0 left-0 -z-10">
                          <img src="/images/footershape1.webp" alt="">
                        </div>
                        <div class="absolute top-0 right-14 -z-10">
                          <img src="/images/footershape2.webp" alt="">
                        </div>
                        <div class="absolute bottom-0 left-0 -z-10">
                          <img src="/images/footershape3.webp" alt="">
                        </div>
                        <div class="absolute bottom-0 right-0 -z-10">
                          <img src="/images/footershape4.webp" alt="">
                        </div>
                 </div>
                 <div class="xl:col-span-1 grid md:grid-cols-3 xl:grid-cols-1 gap-8">
                  <div class="text-center shadow-lg rounded-md px-5 py-10 border">
                    <i class="pi pi-home text-[50px] font-normal text-primary"></i>
                    <h1 class="text-h2 font-semibold my-5">Address</h1>
                    <p>Newtown 7no, Dinajpur Sadar, Bangladesh</p>
                  </div>
                  <div class="text-center shadow-lg rounded-md px-5 py-10 border">
                    <i class="pi pi-phone text-[50px] font-normal text-primary"></i>
                    <h1 class="text-h2 font-semibold my-5">Phone No</h1>
                    <p><a href="tel:01571261165" class="hover:text-primary">+880 1571261165</a></p>
                    <p><a href="tel:01571261165" class="hover:text-primary">+880 1790221828</a></p>
                  </div>
                  <div class="text-center shadow-lg rounded-md px-5 py-10 border">
                    <i class="pi pi-envelope text-[50px] font-normal text-primary"></i>
                    <h1 class="text-h2 font-semibold my-5">Email / Web</h1>
                    <a href="mailto:shijan135@gmail.com" class="hover:text-primary">shijan135@gmail.com</a>
                    <p>www.example.com</p>
                  </div>
                 </div>
          </div>
    </div>
  </div>
</template>
<script>
import BreadCrumbSection from '../components/global/BreadCrumbSection.vue';

export default {
    name: "ContactView",
    components: { BreadCrumbSection }
}
</script>
<style>
  
</style>