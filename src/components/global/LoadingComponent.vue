<template>
  <div class="h-screen flex items-center justify-center">
    <div>
      <Skeleton class="mb-2"></Skeleton>
      <Skeleton width="10rem" class="mb-2"></Skeleton>
      <Skeleton width="5rem" class="mb-2"></Skeleton>
      <Skeleton height="2rem" class="mb-2"></Skeleton>
      <Skeleton width="10rem" height="4rem"></Skeleton>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoadingComponent"
}
</script>
<style>
  
</style>