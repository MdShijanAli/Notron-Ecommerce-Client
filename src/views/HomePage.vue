<template>

    <HomePageHeroSection></HomePageHeroSection>
    <HomePageCTASection></HomePageCTASection>
    <HomePageProducts></HomePageProducts>
</template>
<script>
import HomePageCTASection from '../components/HomePageCTASection.vue';
import HomePageHeroSection from '../components/HomePageHeroSection.vue';
import HomePageProducts from '../components/HomePageProducts.vue';

export default {
    name: "HomePage",
    components: { HomePageHeroSection, HomePageCTASection, HomePageProducts }
}
</script>
<style>
  
</style>