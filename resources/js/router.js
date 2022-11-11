import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue'

import Profile from './components/profile/Profile.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
];

export default createRouter({
    history: createWebHistory(),
    routes
})