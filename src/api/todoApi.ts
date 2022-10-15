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

  addTodo: async (todo: string) => {
    if (todo) {
      const data = await axios.post(TODO_URL, JSON.stringify({ todo }), {
        headers: { Authorization: `Bearer ${token}` },
      });
      return data.data;
    }
  },

  editTodoState:
    (id: number, todo: string, isCompleted: boolean) => async () => {
      const data = await axios.put(
        `${TODO_URL}/${id}`,
        JSON.stringify({ todo, isCompleted: !isCompleted }),
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data.data;
    },
  editTodoText:
    (id: number, todo: string, isCompleted: boolean) => async () => {
      const data = await axios.put(
        `${TODO_URL}/${id}`,
        JSON.stringify({ todo, isCompleted }),
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data.data;
    },
  deleteTodo: (id: number) => async () => {
    await axios.delete(`${TODO_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
