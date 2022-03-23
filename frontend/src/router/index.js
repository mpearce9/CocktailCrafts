import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/homeComponent')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/loginComponent')
    },
    {
        path: '/aboutus',
        name: 'About Us',
        component: () => import('../views/aboutComponent')
    },
    {
        path: '/discover',
        name: 'Discover',
        component: () => import('../views/discoverComponent')
    },
    {
        path: '/search',
        name: 'search',
        component: () => import('../components/SearchBar')
    }
]

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
