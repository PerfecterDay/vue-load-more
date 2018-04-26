import Vue from 'vue'
import app from './src/components/app.vue'
import list from './src/components/list.vue'
import detail from './src/components/detail.vue'
import component1 from './src/components/component1.vue'
import component2 from './src/components/component2.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


const routes = [
  { path: '/detail', component: detail },
  { path: '/', component: list },
  { path: '/com1', component: component1 },
  { path: '/com2', component: component2 }
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
});

new Vue({
	router,
	el:'#main',
	components:{app}
})