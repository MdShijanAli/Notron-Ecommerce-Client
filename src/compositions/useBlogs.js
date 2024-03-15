import { ref } from "vue";
import blogService from "../services/blogService";
import { useBlogStore } from "../stores/blogStore";

export function useBlogs(){
  const blogLists = ref([]);
  const isBlogLoading = ref(false);
  const blogStore  = useBlogStore()

  const fetchBlogs = async()=>{
       isBlogLoading.value = true;
       try{
        if(!blogStore.initialized){
          const fetchData = await blogService.fetchLists();
          blogStore.initialize(fetchData)
       }

      blogLists.value =  blogStore.getBlogs();
      console.log('Blogs From Composition:', blogLists.value);
       }
       catch(error){
        console.log(error);
       }
       finally{
        isBlogLoading.value = false
       }
  }

  return{
    blogLists,
    isBlogLoading,
    fetchBlogs
  }
}