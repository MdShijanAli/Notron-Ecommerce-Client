<script setup>
import { RouterView } from 'vue-router'
import Header from './components/global/Header.vue';
import Footer from './components/global/Footer.vue';
</script>

<template>
    
    <Header />
     <slot></slot>
     <RouterView />
    <Footer />

</template>
