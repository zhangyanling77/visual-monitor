export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
    ],
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'desktop',
    component: './Dashboard',
  },
  {
    path: '/monitor',
    name: '监控页',
    icon: 'send',
    component: './Monitor',
    routes: [
      {
        path: '/monitor/sub-page',
        name: '二级页面',
        icon: 'smile',
        component: './Welcome',
      }
    ]
  },
  {
    name: '全局监控',
    path: '/global',
    component: './GlobalMonitor',
  },
  {
    name: '服务监控',
    path: '/service',
    component: './ServiceMonitor',
  },
  {
    name: '用户行为',
    path: '/behavior',
    component: './UserBehavior',
  },
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    component: './404',
  },
];
