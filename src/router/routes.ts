import { type RouteRecordRaw } from 'vue-router'
import { lazyLoad, Loading } from './tools'

const routers: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
    component: lazyLoad('index', 'Index'),
    meta: { needAuth: true, menuName: 'index' },
    children: [
      {
        path: '',
        name: 'Home',
        component: lazyLoad('index', 'Home'),
        meta: { needAuth: true, menuName: 'homePage' }
      },
      {
        path: 'personalCenter',
        name: 'PersonalCenter',
        component: lazyLoad('personal-center', 'Index'),
        meta: { needAuth: true, menuName: 'personalCenter' }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: lazyLoad('authenticate', 'Login'),
    meta: { needAuth: false }
  },
  {
    path: '/register',
    name: 'Register',
    component: lazyLoad('authenticate', 'Register'),
    meta: { needAuth: false }
  },
  {
    path: '/findPassword',
    name: 'FindPassword',
    component: lazyLoad('authenticate', 'FindPassword'),
    meta: { needAuth: false }
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: lazyLoad('mixed', 'Privacy')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    // 初始为Loading
    component: Loading
  }
]

export default routers
