import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import FastClick from 'fastclick'
import LazyLoad from 'vue-lazyload'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
// 解决移动端300ms延迟
FastClick.attach(document.body)

// 解决图片懒加载的问题
 Vue.use(LazyLoad,{
	 loading:require('assets/img/icon/shot-1.gif')
 })

router.beforeEach((to,form,next)=>{
	if(to.path === '/login' || to.path.indexOf('detail')!=-1 || to.path === '/collect' || to.path === '/information' || to.path === '/address' || to.path === '/extraAddress' || to.path.indexOf('buyorder')!=-1){
		store.commit('MyTabIf',false)
	}else{
		store.commit('MyTabIf',true)
	}
	next()
})



let MyApp = new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')



export default MyApp