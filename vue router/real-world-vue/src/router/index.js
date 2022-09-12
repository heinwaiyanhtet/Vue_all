import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ContactView from "../views/ContactView";
import ProfileView from "../views/ProfileView";



const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/Contact",
    name: "Contact",
    component: ContactView,
  },
  {
    path:"/profile-detail/:name",
    name:"profile",
    component: ProfileView,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass:"active",
});

export default router;
