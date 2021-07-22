import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入qiankun.js
import {registerMicroApps, start} from "qiankun";

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');


// 注册子应用
registerMicroApps([
    {
        name: 'vue app1',            // 子应用名称
        entry: '//localhost:7101',  // 子应用入口
        container: '#container',    // 子应用所在容器
        activeRule: '/vue',         // 子应用触发规则（路径）
    },
    {
        name: 'vue app2',            // 子应用名称
        entry: '//localhost:7102',  // 子应用入口
        container: '#container',    // 子应用所在容器
        activeRule: '/app2',         // 子应用触发规则（路径）
    },
]);

// 启动默认应用
//setDefaultMountApp('/vue')

// 开启服务
start({
    sandbox: { //开启 Shadow DOM 沙箱，做到真正隔离
        strictStyleIsolation: true
    }
})
