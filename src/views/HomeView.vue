<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <TodoList :todos="todos" />
  </div>
</template>

<script lang="ts">
import TodoList from '@/components/TodoList.vue';
import { STORAGE } from '@/constants/storage.constrant';
const storage = window.localStorage;
const todos = JSON.parse(storage.getItem(STORAGE.TODOS) || '[]');

export default {
  components: { TodoList },
  data: function () {
    return {
      todos,
    };
  },
};
</script>
