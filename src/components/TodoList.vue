<template>
  <h3 v-if="isTodosEmpty">목록이 없습니다</h3>
  <ul v-else>
    <li v-for="todo in todos" :key="todo.text">{{ todo }}</li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import store from '@/store';

export default defineComponent({
  setup() {
    const todos = computed(() => {
      return store.getters.getTodos as Array<string>;
    });
    const isTodosEmpty = computed(() => {
      return store.state.todos.length <= 0;
    });
    return {
      todos,
      isTodosEmpty,
    };
  },
});
</script>

<style lang="scss" module>
li {
  list-style: none;
}
</style>
