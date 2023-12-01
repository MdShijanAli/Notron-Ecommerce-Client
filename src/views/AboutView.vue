<template>
  <BreadCrumbSection pageTitle="About Us"/>
  <AboutInfoSection />
</template>
<script>
import BreadCrumbSection from '../components/BreadCrumbSection.vue';
import AboutInfoSection from '../components/AboutInfoSection.vue';

export default {
    name: "AboutView",
    components: { BreadCrumbSection,AboutInfoSection }
}
</script>
<style>
  
</style>