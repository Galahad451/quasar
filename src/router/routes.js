
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/salones',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/salones.vue') }
    ]
  },
  {
    path: '/registro',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/registro.vue') }
    ]
  },
  {
    path: '/recuperar',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/recuperar.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
