import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Team from '@/views/Team.vue';
import SignIn from '@/views/SignInFlow/SignIn.vue';
import Request from '@/views/SignInFlow/Request.vue';
import Recover from '@/views/SignInFlow/Recover.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/team',
    name: 'Team',
    component: Team,
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/request',
    name: 'Request',
    component: Request,
  },
  {
    path: '/recover',
    name: 'Recover',
    component: Recover,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
