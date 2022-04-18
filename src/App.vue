<template>
  <div id="app">
    <nav>
      <router-link :to="ROUTE.HOME.PATH">{{ ROUTE.HOME.NAME }}</router-link>
      |
      <router-link :to="ROUTE.WRITE.PATH">{{ ROUTE.WRITE.NAME }}</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import { ROUTE } from '@/constants/router.constant';

export default {
  name: 'App',
  setup() {
    return {
      ROUTE,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
