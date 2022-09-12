import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue'
import ProductDetailView from "@/views/ProductDetailView";
import CartView from "@/views/CartView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/product-detail/:id",
    name: "productDetail",
    component: ProductDetailView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
