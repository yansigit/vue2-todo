import Vuex from 'vuex';
import axios from 'axios';
import { JsonPlaceHolderTodo, TodoState } from '@/constants/store.constants';

const vuex = new Vuex.Store({
  state() {
    return {
      todos: [],
    } as TodoState;
  },
  mutations: {
    addTodo(state: TodoState, todo: string) {
      state.todos.push(todo);
    },
  },
  getters: {
    getTodos(state: TodoState): Array<string> {
      return [...state.todos];
    },
  },
  actions: {
    async fetchTodo({ commit }: any, todoIdx: number) {
      console.log('fetchTodos', todoIdx);
      await axios
        .get('https://jsonplaceholder.typicode.com/todos/' + todoIdx)
        .then((response) => {
          const todos: JsonPlaceHolderTodo = response.data;
          commit('addTodo', todos.title);
        });
    },
  },
});

export default vuex;
