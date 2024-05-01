import AppLayout from '@/layout/AppLayout.vue';
import DefaultLayout from '@/layout/DefaultLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '../views/AboutView.vue';
import HomePage from "../views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
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
          component: () => import('../views/PrivacyPolicy.vue')
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
    },
    {
      path: '/dashboard',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('@/views/Dashboard.vue')
        },
        {
          path: '/products',
          name: 'products',
          component: () => import('@/views/dashboard/DashboardProducts.vue')
        },
      ]
    }
  ]
})

export default router
