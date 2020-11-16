import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper /* { default options with global component } */);

new Vue({
    created() {
        AOS.init();
    },
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount('#app');
