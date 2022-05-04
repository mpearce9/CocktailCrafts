import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import AsyncComputed from 'vue-async-computed'

Vue.config.productionTip = false

Vue.use(AsyncComputed)
Vue.config.devtools = true

//simply instantiates the vue app and exports it to the website
new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app');

