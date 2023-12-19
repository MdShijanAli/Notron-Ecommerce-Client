<template>
  <BreadCrumbSection pageTitle="Shop"/>
  <ColumnShop4 />
</template>
<script>
import BreadCrumbSection from '../components/global/BreadCrumbSection.vue';
import ColumnShop4 from '../components/ShopComponents/4ColumnShop.vue';


export default {
    name: "ShopView",
    components: { BreadCrumbSection,ColumnShop4 }
}
</script>
<style>
  
</style>