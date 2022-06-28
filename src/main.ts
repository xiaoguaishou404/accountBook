import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue'
import Layout from '@/components/Layout.vue'
import IconSvg from "@/components/IconSvg.vue";

// 手写vuex：建一个myVuexd的es module模块，导出所有方法，在这里import，然后
// Vue.prototype.$myVuex = myVuexd
// 在我们自定义的全局ts声明类型文件custom.d.ts里面声明一个类型 
// https://cn.vuejs.org/v2/guide/typescript.html#%E5%A2%9E%E5%BC%BA%E7%B1%BB%E5%9E%8B%E4%BB%A5%E9%85%8D%E5%90%88%E6%8F%92%E4%BB%B6%E4%BD%BF%E7%94%A8

// // 1. 确保在声明补充的类型之前导入 'vue'
// import Vue from 'vue'

// // 2. 定制一个文件，设置你想要补充的类型
// //    在 types/vue.d.ts 里 Vue 有构造函数类型
// declare module 'vue/types/vue' {
// // 3. 声明为 Vue 补充的东西
//   interface Vue {
//     $myVuex: string
//   }
// }

// 这样我们就可以在任意一个子组件使用this.$myVuex
// 但是这样文件里声明的其他类型就不能全局使用了，需要导入才能读取到类型
// 所以真的ts很难办


Vue.config.productionTip = false
Vue.component('Nav', Nav)
Vue.component('Layout', Layout)
Vue.component('IconSvg', IconSvg)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

