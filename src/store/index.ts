import Vuex from 'vuex';

interface TodoState {
  todos: Array<string>;
}

export default new Vuex.Store({
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
      return state.todos;
    },
  },
});
