import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StartView from "../views/StartView.vue";
import WatchView from "@/views/WatchView.vue";
import ResourcesView from "@/views/ResourcesView.vue";
import PageView from "@/views/PageView.vue";
import OptionsView from "@/views/Options/OptionsView.vue";
import RacesView from "@/views/RacesView.vue";
import UpdatesView from "@/views/UpdatesView.vue";
import ContributeView from "@/views/ContributeView.vue";
import GameView from "@/views/GameView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/start',
    name: 'start',
    component: StartView
  },
  {
    path: '/watch',
    name: 'watch',
    component: WatchView
  },
  {
    path: '/resources',
    name: 'resources',
    component: PageView,
    props: { contentKey: 'resources'}
  },
  {
    path: '/options',
    name: 'options',
    component: OptionsView,
  },
  {
    path: '/races',
    name: 'races',
    component: RacesView,
  },
  {
    path: '/updates',
    name: 'updates',
    component: UpdatesView,
  },
  {
    path: '/contribute',
    name: 'contribute',
    component: ContributeView,
  },
  {
    path: '/daily',
    name: 'daily',
    component: PageView,
    props: { contentKey: 'daily'}
  },

  {
    path: '/h/:hash',
    name: 'daily',
    component: GameView,
    props: true
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
