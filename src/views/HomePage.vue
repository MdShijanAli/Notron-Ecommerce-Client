<template>

    <HomePageHeroSection></HomePageHeroSection>
    <HomePageCTASection></HomePageCTASection>
 
</template>
<script>
import HomePageCTASection from '../components/HomePageCTASection.vue';
import HomePageHeroSection from '../components/HomePageHeroSection.vue';

export default {
    name: "HomePage",
    components: { HomePageHeroSection, HomePageCTASection }
}
</script>
<style>
  
</style>