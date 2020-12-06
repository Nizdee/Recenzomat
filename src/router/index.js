import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Recenzije from '../views/Recenzije.vue'
import Trazilica from '../views/Trazilica.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Recenzije',
    name: 'Recenzije',
    component: Recenzije,
  },
  {
    path: '/Trazilica',
    name: 'Trazilica',
    component: Trazilica
  }
]

const router = new VueRouter({
  routes
})

export default router
