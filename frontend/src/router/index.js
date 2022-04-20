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
        path: '/account',
        name: 'Account',
        component: () => import('../views/accountComponent')
    },
    {
        path: '/search',
        name: 'search',
        component: () => import('../views/SearchBar')
    },
    {
        path: '/recipe/:id',
        name: "recipe",
        props: true,
        component: () => import('../views/recipeComponent')
    }, 
    {
        path: '/accountdetails',
        name: 'Account Details',
        component: () => import('../views/accountDetailsComponent')    
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/contactComponent')
    },
    {
        path: '/barShelf',
        name: 'BarShelf',
        component: () => import('../views/barShelf')
    },
    {
        path: '/add',
        name: 'Add',
        component: () => import('../views/add')
    },
    {
        path: '/added',
        name: 'Add',
        component: () => import('../views/AddedIngredients')
    }

]

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
