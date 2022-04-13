<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <TodoList :todos="todos" />
  </div>
</template>

<script lang="ts">
import TodoList from '@/components/TodoList.vue';
const storage = window.localStorage;
const todos = JSON.parse(storage.getItem('todos') || '[]');

export default {
  components: { TodoList },
  data: function () {
    return {
      todos,
    };
  },
};
</script>
