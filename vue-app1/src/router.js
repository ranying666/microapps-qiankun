import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home'
import HelloWorld from "./components/HelloWorld";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/helloword',
        name: 'HelloWorld',
        component: HelloWorld,
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ './components/About.vue'),
    },
    {
        path: '/action',
        name: 'Action',
        component: () => import('./components/Action'),
    },
];
export default routes;
