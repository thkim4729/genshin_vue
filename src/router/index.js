import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/',
                component: () => import('../views/Main.vue'),
            },
            {
                path: '/Character',
                component: () => import('../views/Character.vue'),
            },
            {
                path: '/Coupon',
                component: () => import('../views/Coupon.vue'),
            },
        ],
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
