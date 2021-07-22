import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from "./components/HelloWorld";
import About from "./components/About";
import Action from "./components/Action";

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/action',
        name: 'Action',
        component: Action,
    }
];

const router = new Router({
    mode: 'history',
    routes: routes,
})

export default router;
