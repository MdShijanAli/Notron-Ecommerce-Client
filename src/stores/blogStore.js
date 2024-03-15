import { defineStore } from "pinia";
import { ref } from "vue";

export const useBlogStore = defineStore('blog', ()=>{
  const blogs = ref([]);
  const initialized = ref(false)

  const getBlogs = ()=>{
    return blogs.value
  }

  const initialize = (newBlogs)=>{
    if(!initialized.value){
      blogs.value =  newBlogs;
      initialized.value = true
    }
  }

  return {blogs, getBlogs, initialize, initialized}
})