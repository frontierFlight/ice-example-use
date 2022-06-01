import { IRouterConfig, lazy } from 'ice';
import Layout from '@/Layouts/BasicLayout';
import WrapperPage from '@/components/WrapperPage';

const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Home = lazy(() => import('@/pages/Home'));
const NotFound = lazy(() => import('@/components/NotFound'));
const Login = lazy(() => import('@/pages/Login'));

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/dashboard',
        component: Dashboard,
        wrappers: [WrapperPage],
      }, {
        path: '/',
        exact: true,
        component: Home,
      }, {
        // 这里配置带点的路由存在问题，页面无法访问
        // https://ice.work/docs/guide/basic/router#%E5%A6%82%E4%BD%95%E9%85%8D%E7%BD%AE%E5%B8%A6--%E7%9A%84%E8%B7%AF%E7%94%B1%E6%AF%94%E5%A6%82-ahtml
        path: '/about.html',
        exact: true,
        component: Home,
      }, {
        path: '/login',
        component: Login,
        pageConfig: {
          title: '登录页面',
        },
      }, {
        path: '/dynamicRoute/:id',
        component: Login,
      }, {
        component: NotFound,
      },
    ],
  },
];

export default routerConfig;
