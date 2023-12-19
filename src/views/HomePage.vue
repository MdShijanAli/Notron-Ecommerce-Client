<template>

    <HomePageHeroSection></HomePageHeroSection>
    <HomePageCTASection></HomePageCTASection>
    <HomePageProducts></HomePageProducts>
    <HomePageSaving></HomePageSaving>
    <HomePageInfo></HomePageInfo>
    <HomeBestSallerSection></HomeBestSallerSection>
    <HomeTestimonial></HomeTestimonial>
</template>
<script>
import HomePageCTASection from '@/components/HomePageSections/HomePageCTASection.vue'
import HomePageHeroSection from '@/components/HomePageSections/HomePageHeroSection.vue'
import HomePageProducts from '@/components/HomePageSections/HomePageProducts.vue'
import HomePageInfo from '@/components/HomePageSections/HomePageinfo.vue'
import HomePageSaving from '@/components/HomePageSections/HomePageSaving.vue'
import HomeBestSallerSection from '@/components/HomePageSections/HomeBestSallerSection.vue';
import HomeTestimonial from '@/components/HomePageSections/HomeTestimonial.vue'

export default {
    name: "HomePage",
    components: { HomePageHeroSection, HomePageCTASection, HomePageProducts, HomePageSaving, HomePageInfo, HomeBestSallerSection, HomeTestimonial },

    data() {
        return {
         
        }
    }
}
</script>
<style>
  
</style>