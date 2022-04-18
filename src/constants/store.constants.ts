export interface TodoState {
  todos: Array<string>;
}

export interface JsonPlaceHolderTodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
