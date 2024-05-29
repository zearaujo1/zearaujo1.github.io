
import { createRouter, createWebHistory } from 'vue-router';
import TestView from '../views/TestView.vue';
import TheAgenda from '../views/TheAgenda.vue'; 
import Login from '../views/Login.vue';
import Iniciativas from '../views/Iniciativas.vue'; 

const routes = [
  {
    path: '/',
    redirect: '/login' // Redireciona a rota padrão para a página de login
  },
  {
    path: '/test',
    name: 'TestView',
    component: TestView
  },
  {
    path: '/agenda',
    name: 'TheAgenda',
    component: TheAgenda
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/iniciativas',
    name: 'Iniciativas',
    component: Iniciativas
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;