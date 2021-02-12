import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import VueHighlightJS from 'vue-highlightjs'
//import EditorJS from '@editorjs/editorjs';

// Tell Vue.js to use vue-highlightjs
Vue.use(VueHighlightJS)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
