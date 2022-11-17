import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue'

import Shops from './components/shops/Index.vue'
import ShopMaster from './components/shops/Master.vue'

import Pricelists from './components/pricelists/Index.vue'
import PricelistMaster from './components/pricelists/Master.vue'

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
        path: '/shop-master/:uid?',
        name: 'ShopMaster',
        component: ShopMaster
    },
    {
        path: '/pricelists',
        name: 'Pricelists',
        component: Pricelists
    },
    {
        path: '/pricelist-master/:id?',
        name: 'PricelistMaster',
        component: PricelistMaster
    },
];

export default createRouter({
    history: createWebHistory(),
    routes
})