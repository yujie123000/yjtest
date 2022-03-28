/*
 * @Author: your name
 * @Date: 2022-03-21 20:52:04
 * @LastEditTime: 2022-03-21 20:58:16
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \shoppings\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/project.js";
import Vant from 'vant';
import 'vant/lib/index.css'
Vue.use(Vant)
Vue.use(ElementUI)
import { Switch } from 'vant';
Vue.use(Switch);
// 全局注册npm
if(process.env.NODE_ENV==="development"){
  require("@/pages/wode/mock/mock")
  require("./mock/index")
}
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
