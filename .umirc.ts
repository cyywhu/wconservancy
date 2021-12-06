import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index', redirect: '/river' },
    { path: '/river', component: '@/pages/RiverDisplay' },
  ],
  fastRefresh: {},
});
