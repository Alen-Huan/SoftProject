import "ant-design-vue/dist/antd.css";

import { createApp } from "vue";

import Antd from "ant-design-vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

// use注册插件，注册全局组件，注册全局指令
createApp(App)
.use(store)
.use(router)
.use(Antd)
.mount('#app');
