import axios from 'axios';

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
const VueAxios = require('vue-axios');

import VueAuthenticate from 'vue-authenticate';
import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App.vue';
import {AuthStore} from './stores/AuthStore';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);

const routes = [
    { path: '/', component: App }
];

const router = new VueRouter({
    routes: routes
});

const app = new Vue({
  router
}).$mount('#app');
