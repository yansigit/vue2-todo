<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <li v-for="todo in todos" v-bind:key="todo">
      {{ todo.text }}
    </li>
    <todo-item v-for="item in todos" v-bind:todo="item" v-bind:key="item.text">
    </todo-item>
  </div>
</template>

<script lang="ts">
import mockup from '@/store/mockup';
import Vue from 'vue';

// 화면에서 표시 안되는 문제 있음
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>',
});

export default {
  components: {},
  data: function () {
    return {
      todos: mockup,
    };
  },
};
</script>
