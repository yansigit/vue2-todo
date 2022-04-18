<template>
  <h3 v-if="isTodosEmpty">목록이 없습니다</h3>
  <ul v-else>
    <li v-for="todo in todos" :key="todo.text">{{ todo }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '@/store';

export default defineComponent({
  computed: {
    todos() {
      return store.getters.getTodos as Array<string>;
    },
    isTodosEmpty(): boolean {
      return store.state.todos.length <= 0;
    },
  },
});
</script>

<style lang="scss" module>
li {
  list-style: none;
}
</style>
