<template>
  <h3 v-if="todos.length <= 0">목록이 없습니다</h3>
  <ul v-else>
    <li v-for="todo in todos" :key="todo.text">{{ todo.text }}</li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.component('TodoList', {
  props: ['todos'],
});
</script>

<style lang="scss" module>
li {
  list-style: none;
}
</style>
