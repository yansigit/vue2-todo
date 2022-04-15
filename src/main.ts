import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// createApp(App).use(store).use(router).mount('#app');

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');

// const app = createApp({
//   router,
//   store,
//   render: (h) => h(App),
// }).mount('#app');
