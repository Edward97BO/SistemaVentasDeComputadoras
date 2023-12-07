import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import { useAuthStore } from '@/stores'
import { getTokenFromLocalStorage } from '@/helpers'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', name: 'login', component: LoginView },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/carritos',
      name: 'carritos',
      component: () => import('../views/CompraView.vue'),
      children: [
        { path: '', component: () => import('../components/compra/CompraList.vue') },
        //{ path: 'crear', component: () => import('../components/compra/CompraCreate.vue') },
        // {
        //   path: 'editar/:id',
        //   component: () => import('../components/compra/CompraEdit.vue')
        // }
      ]
    },
    {
      path: '/compras',
      name: 'compras',
      component: () => import('../views/CompraView.vue'),
      children: [
        { path: '', component: () => import('../components/compra/CompraList.vue') },
        { path: 'crear', component: () => import('../components/compra/CompraCreate.vue') },
         {
           path: 'editar/:id',
           component: () => import('../components/compra/CompraEdit.vue')
         },
         { path: 'detalles', component: () =>import('../components/compra/CompraDetails.vue')}
      ]
    },
    {
      path: '/categorias',
      name: 'categorias',
      component: () => import('../views/CategoriaView.vue'),
      children: [
        { path: '', component: () => import('../components/categoria/CategoriaList.vue') },
        { path: 'crear', component: () => import('../components/categoria/CategoriaCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/categoria/CategoriaEdit.vue')
        }
      ]
    },
    {
      path: '/productos',
      name: 'productos',
      component: () => import('../views/ProductoView.vue'),
      children: [
        { path: '', component: () => import('../components/producto/ProductoList.vue') },
        { path: 'crear', component: () => import('../components/producto/ProductoCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/producto/ProductoEdit.vue')
        }
      ]
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: () => import('../views/ClienteView.vue'),
      children: [
        { path: '', component: () => import('../components/cliente/ClienteList.vue') },
        { path: 'crear', component: () => import('../components/cliente/ClienteCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/cliente/ClienteEdit.vue')
        }
      ]
    },
    {
      path: '/empleados',
      name: 'empleados',
      component: () => import('../views/EmpleadoView.vue'),
      children: [
        { path: '', component: () => import('../components/empleado/EmpleadoList.vue') },
        { path: 'crear', component: () => import('../components/empleado/EmpleadoCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/empleado/EmpleadoEdit.vue')
        }
      ]
    },
    {
      path: '/solicitudes',
      name: 'solicitudes',
      component: () => import('../views/SolicitudView.vue'),
      children: [
        { path: '', component: () => import('../components/solicitud/SolicitudList.vue') },
        { path: 'crear', component: () => import('../components/solicitud/SolicitudCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/solicitud/SolicitudEdit.vue')
        }
      ]
    },
    {
      path: '/pedidos',
      name: 'pedidos',
      component: () => import('../views/PedidoView.vue'),
      children: [
        { path: '', component: () => import('../components/pedido/PedidoList.vue') },
        { path: 'crear', component: () => import('../components/pedido/PedidoCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/pedido/PedidoEdit.vue')
        }
      ]
    }
  ]
})
router.beforeEach(async (to) => {
  const publicPages = ['/', '/about', '/login']
  const authRequired = !publicPages.includes(to.path)
  const authStore = useAuthStore()

  if (authRequired && !getTokenFromLocalStorage()) {
    if (authStore) authStore.logout()
    authStore.returnUrl = to.fullPath
    return '/login'
  }
})

export default router
