import Vue from 'vue';
import VueRouter from 'vue-router';

import './element-ui';

import App from './App.js';
import 'windi.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const Home = {
  template: '<div>HOME</div>',
};

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
  ],
});

new Vue({
  router,
  render: function (h) { return h(App); },
}).$mount('#app');
