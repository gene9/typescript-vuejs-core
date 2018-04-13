import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import {AuthStore} from './stores/AuthStore';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: App }
];

const router = new VueRouter({
    routes: routes
});

const app = new Vue({
  router
}).$mount('#app');
