<template>

    <HomePageHeroSection></HomePageHeroSection>
    <HomePageCTASection></HomePageCTASection>
    <HomePageProducts :products="products"></HomePageProducts>
    <HomePageSaving></HomePageSaving>
</template>
<script>
import HomePageCTASection from '../components/HomePageCTASection.vue';
import HomePageHeroSection from '../components/HomePageHeroSection.vue';
import HomePageProducts from '../components/HomePageProducts.vue';


import img1 from "../assets/images/product-1.webp";
import img2 from "../assets/images/product-2.webp";
import img3 from "../assets/images/product-3.webp";
import img4 from "../assets/images/product-4.webp";
import img5 from "../assets/images/product-5.webp";
import img6 from "../assets/images/product-6.webp";
import img7 from "../assets/images/product-7.webp";
import img8 from "../assets/images/product-8.webp";
import HomePageSaving from '../components/HomePageSaving.vue';

export default {
    name: "HomePage",
    components: { HomePageHeroSection, HomePageCTASection, HomePageProducts, HomePageSaving },

    data() {
        return {
            products: [
        {
          id: 1,
          img: img1,
          category: "Men/Women",
          title: "Leather Mens Slipper",
          price: "240.00",
          description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
          discountPrice: 100,
          offer: "-10%",
        },
        {
          id: 2,
          img: img2,
          category: "Men/Women",
          title: "Quickiin Mens shoes",
          price: "140.00",
          description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
        },
        {
          id: 3,
          img: img3,
          category: "Men/Women",
          title: "Rexpo Womens shoes",
          price: "260.00",
          description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
          discountPrice: 60,
          offer: "-10%",
        },
        {
          id: 4,
          img: img4,
          category: "Men/Women",
          title: "Hollister V-Neck Knit",
          description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
          price: "880.00",
        },
        {
          id: 5,
          img: img5,
          category: "Men/Women",
          title: "Primitive Mens shoes",
          description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
          price: "500.00",
        },
        {
          id: 6,
          img: img6,
          category: "Men/Women",
          title: "New Womens High Hills",
          price: "333.00",
          description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
          discountPrice: 300,
          offer: "-10%",
        },
        {
          id: 7,
          img: img7,
          category: "Men/Women",
          title: "Simple Fabric Shoe",
          price: "133.00",
          description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
        },
        {
          id: 8,
          img: img8,
          category: "Men/Women",
          title: "exclusive mens shoe",
          price: "420.00",
          description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
          discountPrice: 300,
          offer: "-10%",
        },
            ],

            
        }
    }
}
</script>
<style>
  
</style>