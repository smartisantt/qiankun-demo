import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false;

const apps = [
  {
    name: 'vueApp',
    entry: 'http://localhost:9000',
    container: '#appContainer',
    activeRule: '/app-vue',
  },
  {
    name: 'reactApp',
    entry: 'http://localhost:9001',
    container: '#appContainer',
    activeRule: '/app-react',
  },
];

registerMicroApps(apps);
start({
  prefetch: false, // 取消预加载
});

Vue.use(ElementUI);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
