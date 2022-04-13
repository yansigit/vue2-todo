<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <TodoList v-for="todo in todos" v-bind:key="todo.text" v-bind:todo="todo" />
  </div>
</template>

<script lang="ts">
import mockup from '@/store/mockup';
import TodoList from '@/components/TodoList.vue';

export default {
  components: { TodoList },
  data: function () {
    return {
      todos: mockup,
    };
  },
};
</script>
