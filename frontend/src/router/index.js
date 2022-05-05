import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// the local storage is used to see whether a user is logged in or not
const val = localStorage.getItem('user');

//this router is the router for the vue components on the frontend side, based on the base url
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/homeComponent'),
        //the before enter function is used for navigation guards, if a user is logged in, other components show where others do not
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
        path: '/search/:headerSearch?',
        name: 'search',
        props: true,
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
<<<<<<< HEAD
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
        name: 'Added',
        component: () => import('../views/addedIngredients')
=======
        path: '/popular',
        name: 'Popular',
        component: () => import('../views/popular'),
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
        path: '/popularrecipe/:id',
        name: "popularrecipe",
        props: true,
        component: () => import('../views/popularRecipeComponent'),
        beforeEnter(to,from,next) {
            if(val == "unknown"){
                next('/login');
            }else{
                next();
            }
            next();
        }
>>>>>>> 729fa6847ee59c125f2eecf7fd56296a4104acbb
    }

]

// exports the router for our vue project
export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
