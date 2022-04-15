<template>
  <div class="about">
    <h3>할일을 작성해주세요</h3>
    <div>
      <input v-model="msg" name="msg" type="text" />
      <button @click="addTodo">추가</button>
    </div>
    <TodoList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoList from '@/components/TodoList.vue';
import store from '@/store';

export default defineComponent({
  name: 'TodoAdd',
  components: {
    TodoList,
  },
  data() {
    return {
      msg: '',
    };
  },
  computed: {
    todos() {
      return store.state.todos as Array<string>;
    },
  },
  methods: {
    addTodo() {
      store.commit('addTodo', this.msg);
    },
  },
});
</script>

<style lang="scss" module>
button {
  margin-left: 10px;
}
</style>
