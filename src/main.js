// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import router from './router';
import $ from 'webpack-zepto';
import VueRouter from 'vue-router';
import FastClick from 'fastclick';
import Alert from './libs/alert';

Vue.use(VueRouter);
Vue.use(Alert);

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);



FastClick.attach(document.body);

// 处理刷新的时候vuex被清空但是用户已经登录的情况
if (window.sessionStorage.user) {
    store.dispatch('setUserInfo', JSON.parse(window.sessionStorage.user));
}
$.ajaxSettings.crossDomain = true;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
