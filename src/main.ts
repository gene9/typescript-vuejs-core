import Vue from 'vue';
import VueRouter from 'vue-router';
//import * as VueAxios from 'vue-axios';

import VueAuthenticate from 'vue-authenticate';
import axios from 'axios';
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue';
import {AuthStore} from './stores/AuthStore';

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const routes = [
    { path: '/', component: App }
];

const router = new VueRouter({
    routes: routes
});

const app = new Vue({
  router
}).$mount('#app');
