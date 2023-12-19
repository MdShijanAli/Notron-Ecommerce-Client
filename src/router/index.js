import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../views/HomePage.vue";
import AboutView from '../views/AboutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/ShopView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/product/:title',
      name: 'product-details',
      component: () => import('../views/ProductDetailsPage.vue')
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: ()=> import('../views/PrivacyPolicy.vue')
    },
    {
      path: '/terms-condition',
      name: 'terms-condition',
      component: () => import('../views/TermsCondition.vue')
    },
    {
      path: '/return-refund',
      name: 'return-refund',
      component: () => import('../views/ReturnRefund.vue')
    },
   
  ]
})

export default router
