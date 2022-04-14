<template>
  <div class="about">
    <h3>할일을 작성해주세요</h3>
    <div>
      <input v-model="msg" name="msg" type="text" />
      <button @click="addTodo">추가</button>
    </div>
    <TodoList :todos="todos" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoList from '@/components/TodoList.vue';
import { STORAGE } from '@/constants/storage.constrant';

const storage = window.localStorage;
const todos = JSON.parse(storage.getItem(STORAGE.TODOS) || '[]');

export default Vue.extend({
  name: 'TodoAdd',
  components: {
    TodoList,
  },
  data() {
    return {
      todos,
      msg: '',
    };
  },
  methods: {
    addTodo(): void {
      this.todos = [...this.todos, { text: this.msg }];
      storage.setItem(STORAGE.TODOS, JSON.stringify(this.todos));
    },
  },
});
</script>

<style lang="scss" module>
button {
  margin-left: 10px;
}
</style>
