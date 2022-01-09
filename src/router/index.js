import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/auth/login.vue')
  },
    {
    path: '/signup',
    name: 'signup',
    component: () => import('../pages/auth/signup.vue')
  },
  {
    path: '/movie',
    name: 'movie',
    component: () => import('../pages/movie/movie-list.vue')
  },
  {
    path: '/movie/rated',
    name: 'movie-rated',
    component: () => import('../pages/movie/movie-rated.vue')
  },
  {
    path: '/movie/upcoming',
    name: 'movie-upcoming',
    component: () => import('../pages/movie/movie-upcoming.vue')
  },
  {
    path: '/movie/:itemId',
    name: 'movieItem',
    component: () => import('../pages/movie/movie.vue')
  },
  {
    path: '/movie/:itemId/cast',
    name: 'movie-cast',
    component: () => import('../pages/movie/movie-cast.vue')
  },
  {
    path: '/tv',
    name: 'tv',
    component: () => import('../pages/tv/tv-list.vue')
  },
  {
    path: '/tv/rated',
    name: 'tv-rated',
    component: () => import('../pages/tv/tv-rated.vue')
  },
  {
    path: '/tv/today',
    name: 'tv-upcoming',
    component: () => import('../pages/tv/tv-airing-today.vue')
  },
  {
    path: '/tv/:itemId',
    name: 'tvItem',
    component: () => import('../pages/tv/tv.vue')
  },
  {
    path: '/person',
    name: 'people',
    component: () => import('../pages/person/person-list.vue')
  },
  {
    path: '/person/:itemId',
    name: 'person',
    component: () => import('../pages/person/person.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router