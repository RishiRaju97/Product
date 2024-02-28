import { createRouter, createWebHistory } from 'vue-router'
import product from '@/views/products.vue'
import productDetails from '@/views/productDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'product',
      component: product
    },
    {
      path: '/product/:id',
      name: 'productDetails',
      component: productDetails
    }
  ]
})

export default router
