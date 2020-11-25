import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import './plugins/iview.js'

// 导入的全局样式
import './assets/css/global.css'

import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
Vue.use(mavonEditor);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
