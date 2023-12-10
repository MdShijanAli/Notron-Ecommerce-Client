<template>
  <div>
     <!-- Form -->
     <form>
          <div class="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]">
            <div class="flex-[1_0_0%]">
              <label for="hs-search-article-1" class="block text-sm text-gray-700 font-medium dark:text-white"><span class="sr-only">Search</span></label>
              <input type="email" name="hs-search-article-1" id="hs-search-article-1" class="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-primary focus:ring-primary" placeholder="Search">
            </div>
            <div class="flex-[0_0_auto]">
              <a class="w-[46px] h-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary text-white hover:bg-red-700" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </a>
            </div>
          </div>
        </form>

        <!-- End Form -->

        <div class="p-10 bg-slate-100 mt-10 rounded-md border">
           <div>
              <h1 class="text-h3 font-semibold">Categories</h1>
              <div class="border-2 w-[180px] mt-3 mb-5"></div>

              <div>
                <ul>
                  <li class="my-3 hover:text-primary">
                    <RouterLink class="font-medium" to="/blog">Accesasories (6)</RouterLink>
                  </li>
                  <li class="my-3 hover:text-primary">
                    <RouterLink class="font-medium" to="/blog">Computer (4)</RouterLink>
                  </li>
                  <li class="my-3 hover:text-primary">
                    <RouterLink class="font-medium" to="/blog">Covid-19 (2)</RouterLink>
                  </li>
                  <li class="my-3 hover:text-primary">
                    <RouterLink class="font-medium" to="/blog">Electronics (6)</RouterLink>
                  </li>
                  <li class="my-3 hover:text-primary">
                    <RouterLink class="font-medium" to="/blog">Frame Sunglasses (12)</RouterLink>
                  </li>
                  <li class="my-3 hover:text-primary">
                    <RouterLink class="font-medium" to="/blog">Furniture (7)</RouterLink>
                  </li>
                  <li class="my-3 hover:text-primary">
                    <RouterLink class="font-medium" to="/blog">Genuine Leather (9)</RouterLink>
                  </li>
                </ul>
              </div>

           <div class="mt-10">
              <h1 class="text-h3 font-semibold">Recent Posts</h1>
              <div class="border-2 w-[180px] mt-3 mb-5"></div>

              <div v-for="blog in blogStore.blogs" :key="blog.id" class="sm:flex items-center grid gap-5 my-5">
                    <div class="xl:col-span-2 md:col-span-1 w-[110px] h-[110px]">
                      <img class="w-full h-full rounded-md" :src="blog.photo" alt="">
                    </div>
                    <div class=" py-2">
                      <div class="flex gap-2 items-center">
                                <i class="pi pi-calendar" style="color:#EB3E32ed;font-size: 1.2rem"></i>
                                <p class="hover:text-primary hover:underline transition duration-500 ease-in-out cursor-pointer">{{ blog.date.slice(0,10) }}</p>
                      </div>
                      <RouterLink to="/blog">
                                <h1 class="text-h3 mt-3 hover:text-primary  transition duration-500 ease-in-out">{{ blog.title.slice(0,30) }}</h1>
                            </RouterLink>
                    </div>
              </div>
           </div>

           <div class="mt-10">
            <h1 class="text-h3 font-semibold">Tages</h1>
              <div class="border-2 w-[180px] mt-3 mb-5"></div>

              <div class="flex flex-wrap gap-2">
                <button class="px-5 py-2 border bg-white hover:bg-primary transition duration-500 ease-in-out hover:text-white rounded-sm">Mobile</button>
                <button class="px-5 py-2 border bg-white hover:bg-primary transition duration-500 ease-in-out hover:text-white rounded-sm">Laptop</button>
                <button class="px-5 py-2 border bg-white hover:bg-primary transition duration-500 ease-in-out hover:text-white rounded-sm">Smart TV</button>
                <button class="px-5 py-2 border bg-white hover:bg-primary transition duration-500 ease-in-out hover:text-white rounded-sm">Pendrive</button>
                <button class="px-5 py-2 border bg-white hover:bg-primary transition duration-500 ease-in-out hover:text-white rounded-sm">Smart Watch</button>
                <button class="px-5 py-2 border bg-white hover:bg-primary transition duration-500 ease-in-out hover:text-white rounded-sm">Shooes</button>
              </div>
           </div>
           </div>
        </div>
  </div>
</template>
<script>
import { useBlogStore } from '../stores/blogStore';
import { onMounted } from 'vue';


export default {
  name: "BlogSideBar",



  setup() {
        const blogStore = useBlogStore();

        onMounted(() => {
            blogStore.fetchBlogs();
        });

        return {
            blogStore
        }
    }
}
</script>
<style>
  
</style>