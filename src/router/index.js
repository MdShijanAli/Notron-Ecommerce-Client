import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../views/HomePage.vue"
import ProductDetailsPage from "../views/ProductDetailsPage.vue"
import PrivacyPolicy from "../views/PrivacyPolicy.vue"
import TermaCondition from "../views/TermsCondition.vue"
import ReturnRefund from "../views/ReturnRefund.vue"

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
      component: () => import('../views/AboutView.vue')
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
      component: ProductDetailsPage
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicy
    },
    {
      path: '/terms-condition',
      name: 'terms-condition',
      component: TermaCondition
    },
    {
      path: '/return-refund',
      name: 'return-refund',
      component: ReturnRefund
    },
    /* {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    } */
  ]
})

export default router
