import define from './define'
import Router from 'vue-router'

const {
  redirect,
  main,
  pcMain
} = define

const router = {
  routes: [redirect, main, pcMain]
}

export default new Router(router)
