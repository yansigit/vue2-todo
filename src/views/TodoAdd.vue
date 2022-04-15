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
      todoIdx: 0,
    };
  },
  methods: {
    addTodo() {
      store.commit('addTodo', this.msg);
    },
    fetchTodo() {
      store.dispatch('fetchTodo', this.todoIdx);
    },
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
