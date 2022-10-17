import { Todo } from "../type/todoItemType";

export const addItem = (newTodo: Todo) => (list: Todo[]) => [...list, newTodo];

export const editItemText = (id: number, text: string) => (list: Todo[]) =>
  list.map((todo) => (todo.id === id ? { ...todo, todo: text } : todo));

export const editItemState =
  (id: number, isCompleted: boolean) => (list: Todo[]) =>
    list.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !isCompleted } : todo
    );

export const deleteItem = (id: number) => (list: Todo[]) =>
  list.filter((todo) => todo.id !== id);
