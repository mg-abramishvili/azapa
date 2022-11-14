import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue'

import Shops from './components/shops/Index.vue'
import ShopMaster from './components/shops/Master.vue'

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
    {
        path: '/shop/:uid?',
        name: 'ShopMaster',
        component: ShopMaster
    },
];

export default createRouter({
    history: createWebHistory(),
    routes
})