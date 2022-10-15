import axios from "./axios";

const TODO_URL = "/todos";
const token = localStorage.getItem("token");

export const todoApi = {
  getTodo: async () => {
    const data = await axios.get(TODO_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.data;
  },

  addTodo: (todo: string) => async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo) {
      await axios.post(TODO_URL, JSON.stringify({ todo }), {
        headers: { Authorization: `Bearer ${token}` },
      });
    }
  },

  editTodoState:
    (id: number, todo: string, isCompleted: boolean) => async () => {
      await axios.put(
        `${TODO_URL}/${id}`,
        JSON.stringify({ todo, isCompleted: !isCompleted }),
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
  editTodoText:
    (id: number, todo: string, isCompleted: boolean) => async () => {
      await axios.put(
        `${TODO_URL}/${id}`,
        JSON.stringify({ todo, isCompleted }),
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
  deleteTodo: (id: number) => async () => {
    await axios.delete(`${TODO_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
