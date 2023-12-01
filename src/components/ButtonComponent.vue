<template>
   <RouterLink :to="path" class="bg-primary px-10 py-5 hover:bg-white rounded-sm hover:text-black transition duration-500 ease-in-out font-semibold border-2 border-primary text-white">
                    {{ title }}
   </RouterLink>
</template>
<script>
export default {
  name: "ButtonComponent",
  props: ['title', 'path']
}
</script>
<style>
  
</style>