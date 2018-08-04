import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const main = resolve => require(['../page/main/index.vue'], resolve)
const pcMain = resolve => require(['../page/main/pc/index.vue'], resolve)

export default {
  redirect: {
    path: '/',
    redirect: '/pcmain'
  },
  main: {
    path: '/main',
    name: 'main',
    component: main
  },
  pcMain: {
    path: '/pcmain',
    name: 'pcMain',
    component: pcMain
  }
}
