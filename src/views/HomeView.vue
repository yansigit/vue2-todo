<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <TodoList :todos="todos" />
  </div>
</template>

<script lang="ts">
import TodoList from '@/components/TodoList.vue';
import { defineComponent } from 'vue';
import store from '@/store';

export default defineComponent({
  components: { TodoList },
  data() {
    return {
      todos: store.getters.getTodos,
    };
  },
});
</script>
