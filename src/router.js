import VueRouter from 'vue-router';

const Home = {
  template: '<div>HOME</div>',
};

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
  ],
});

export default router;
