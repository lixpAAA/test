export default [{
  // 大气环境
  name: 'aqi',
  path: '/aqi',
  redirect: '/index',
  component: () => import('../components/index'),
  children: [
    { // Aqi首页
      name: 'home',
      path: '/test',
      component: () => import('../components/test')
    }]
}]
