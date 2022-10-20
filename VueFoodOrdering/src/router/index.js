import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import * as firebase from "firebase";

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Home,
    meta: {
      header_text: 'Food Ordering Application',
      title: 'Login page',
      description: 'This page is a test page for learning about Vue CLI. Its subject is cats',
    }
  },
  {
    path: '/locations',
    name: 'Locations',
    meta: {
      header_text: 'Restaurant Locations',
      title: 'Location page',
      description: 'This page is for showing locations of resaurants.',
      requiresAuth: true
    },

    // route level code-splitting
    // this generates a separate chunk (locations.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "locations" */ '../views/Locations.vue')
  },
  {
    path: '/',
    alias: '/menu',
    name: 'Menu',
    meta: {
      header_text: 'Menu',
      title: 'Menu page',
      description: 'This page is a test page for learning about Vue CLI. Its subject is cats',
      requiresAuth: true
    },
    component: () => import(/* webpackChunkName: "menu" */ '../views/Menu.vue')
  },
  {
    path: '/news',
    name: 'News',
    meta: {
      header_text: 'News',
      title: 'News page',
      description: 'This page is a test page for learning about Vue CLI. Its subject is cats',
      requiresAuth: true
    },
    component: () => import(/* webpackChunkName: "news" */ '../views/News.vue')
  },
  {
    path: '/currentOrder',
    name: 'CurrentOrder',
    meta: {
      header_text: 'Current Order',
      title: 'Current Order page',
      description: 'This page is for showing the current order.',
      requiresAuth: true
    },

    // route level code-splitting
    // this generates a separate chunk (currentOrder.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "currentOrder" */ '../views/CurrentOrder.vue')
  },
  {
    path: '/foodComplaint',
    name: 'Food Complaint',
    meta: {
      header_text: 'Food Complaint',
      title: 'Food complaint page',
      description: 'This page is for complaining about food.',
      requiresAuth: true
    },

    // route level code-splitting
    // this generates a separate chunk (foodComplaints.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "foodComplaints" */ '../views/FoodComplaints.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const storedUser = localStorage.getItem("storedUser");
  if (requiresAuth && !currentUser && !storedUser) {
    alert("Please login.")
    next('login')
  }
  else if (!requiresAuth && currentUser && storedUser) {
    next('Menu')
  }
  else {
    next();
  }
})
export default router
