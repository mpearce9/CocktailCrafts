import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import AsyncComputed from 'vue-async-computed'

Vue.config.productionTip = false

Vue.use(AsyncComputed)
Vue.config.devtools = true

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')

