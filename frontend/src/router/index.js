import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const val = localStorage.getItem('user');

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/homeComponent'),
        beforeEnter(to,from,next) {
            if(val == "known"){
                next('/homelogin=true');
            }else{
                next();
            }
            next();
        }
    },
    {
        path:'/homelogin=true',
        name: 'home',
        component: () => import('../views/homeLoginComponent.vue'),
        beforeEnter(to,from,next) {
            if(val == 'known') {
                next();
            }
            else {
                next('/home');
            }
        }
    },

    {
        path: '/login',
        name: 'login',
        component: () => import('../views/loginComponent'),
        beforeEnter(to,from,next) {
            if(val == "known"){
                next('/account');
            }else{
                next();
            }
            next();
        }
    },
    {
        path: '/aboutus',
        name: 'About Us',
        component: () => import('../views/aboutComponent')
    },
    {
        path: '/discover',
        name: 'Discover',
        component: () => import('../views/discoverComponent'),
        beforeEnter(to,from,next) {
            if(val == "unknown"){
                next('/login');
            }else{
                next();
            }
            next();
        }
    },
    {
        path: '/account',
        name: 'Account',
        component: () => import('../views/accountComponent'),
        beforeEnter(to,from,next) {
            if(val == "unknown"){
                next('/login');
            }else{
                next();
            }
            next();
        }
    },
    {
        path: '/search',
        name: 'search',
        component: () => import('../views/SearchBar'),
        beforeEnter(to,from,next) {
            if(val == "unknown"){
                next('/login');
            }else{
                next();
            }
            next();
        }
    },
    {
        path: '/recipe/:id',
        name: "recipe",
        props: true,
        component: () => import('../views/recipeComponent'),
        beforeEnter(to,from,next) {
            if(val == "unknown"){
                next('/login');
            }else{
                next();
            }
            next();
        }
    }, 
    {
        path: '/accountdetails',
        name: 'Account Details',
        component: () => import('../views/accountDetailsComponent'),
        beforeEnter(to,from,next) {
            if(val == "unknown"){
                next('/login');
            }else{
                next();
            }
            next();
        }    
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/contactComponent')
    },
    {
        path: '/random',
        name: 'Random',
        component: () => import('../views/randomComponent'),
        beforeEnter(to,from,next) {
            if(val == "unknown"){
                next('/login');
            }else{
                next();
            }
            next();
        }
    },
    {
        path: '/savedCocktails',
        name: 'Saved Cocktails',
        component: () => import('../views/SavedCocktails'),
        beforeEnter(to,from,next) {
            if(val == "unknown"){
                next('/login');
            }else{
                next();
            }
            next();
        }
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
