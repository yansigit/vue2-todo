<template>
  <div class="about">
    <h3>할일을 작성해주세요</h3>
    <div>
      <input v-model="msg" name="msg" type="text" />
      <button @click="addTodo">추가</button>
      <span>|</span>
      <input
        v-model.number="todoIdx"
        :class="$style.todoIdx"
        name="todoIdx"
        type="number"
      />
      <button @click="fetchTodo">TODO 추가</button>
    </div>
    <TodoList />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import TodoList from '@/components/TodoList.vue';
import store from '@/store';

export default defineComponent({
  name: 'TodoAdd',
  components: {
    TodoList,
  },
  setup() {
    const msg = ref('');
    const todoIdx = ref(0);
    const addTodo = () => {
      store.commit('addTodo', msg.value);
    };
    const fetchTodo = () => {
      store.dispatch('fetchTodo', todoIdx.value);
    };

    return {
      msg,
      todoIdx,
      addTodo,
      fetchTodo,
    };
  },
});
</script>

<style lang="scss" module>
button {
  margin-left: 10px;
}

span {
  margin: 0 10px;
}

.todoIdx {
  width: 30px;
}
</style>
