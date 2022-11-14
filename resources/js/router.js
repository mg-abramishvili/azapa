import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue'

import Shops from './components/shops/Index.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/shops',
        name: 'Shops',
        component: Shops
    },
];

export default createRouter({
    history: createWebHistory(),
    routes
})