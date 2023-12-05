<template>
 <BreadCrumbSection pageTitle="Blog"/>

 <div>
    <div class="max-w-7xl mx-auto px-6 py-20">
        <div class="grid md:grid-cols-3 sm:grid-sols-2 gap-8">
            <div class="xl:col-span-2 md:col-span-3 sm:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-8">
                 <div v-for="blog in blogStore.blogs" :key="blog.id">
                    <div class="h-[250px] overflow-hidden rounded-md">
                        <img class="h-full w-full rounded-md hover:scale-110 transition duration-500 ease-in-out" :src="blog.photo" alt="">
                    </div>
                   <div class="mt-5">
                        <div class="flex justify-between items-center">
                            <div class="flex gap-2 items-center">
                                <i class="pi pi-calendar text-sm sm:text-base" style="color:#EB3E32ed;"></i>
                                <p class="hover:text-primary text-sm sm:text-base hover:underline transition duration-500 ease-in-out cursor-pointer">{{ blog.date.slice(0,10) }}</p>
                            </div>
                            <div class="flex gap-2 items-center">
                                <i class="pi pi-user text-sm sm:text-base" style="color:#EB3E32ed;"></i>
                                <p class="hover:text-primary text-sm sm:text-base hover:underline transition duration-500 ease-in-out cursor-pointer">{{ blog.author }}</p>
                            </div>
                        </div>

                        <div>
                            <RouterLink to="/blog">
                                <h1 class="md:text-h2 text-xl font-semibold my-5 hover:text-primary  transition duration-500 ease-in-out">{{ blog.title.slice(0,50) }}</h1>
                            </RouterLink>
                            <div class="py-5">
                             <RouterLink class="sm:px-10 px-6 sm:py-4 py-2.5 rounded-sm bg-slate-950 hover:bg-primary transition duration-500 ease-in-out text-white" to="/blog">Read More</RouterLink>
                            </div>
                        </div>
                   </div>
                 </div>
            </div>
            <div class="md:col-span-3 xl:col-span-1 sm:col-span-2">
                <BlogSideBar></BlogSideBar>
            </div>
        </div>
    </div>
 </div>

</template>
<script>
import { RouterLink } from 'vue-router';
import BreadCrumbSection from '../components/BreadCrumbSection.vue';
import { useBlogStore } from '../stores/blogStore';
import { onMounted } from 'vue';
import BlogSideBar from '../components/BlogSidebar.vue'


export default {
    name: "BlogView",
    components: { BreadCrumbSection, RouterLink, BlogSideBar},


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