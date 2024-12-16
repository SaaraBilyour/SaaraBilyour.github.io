import { createRouter, createWebHistory } from 'vue-router';
import ListView from '../components/ListView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list',
      component: ListView, // Associate the ListView component
    }
  ],
});

export default router;
