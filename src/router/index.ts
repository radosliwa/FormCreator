import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/:slug',
        name: 'slug',
        props: true,
        component: () => import(/* webpackChunkName: "Slug" */ '../views/Slug.vue')
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
