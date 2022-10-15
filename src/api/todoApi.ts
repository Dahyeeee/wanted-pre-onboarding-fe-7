import axios from "./axios";

const TODO_URL = "/todos";
const token = localStorage.getItem("token");

export const todoApi = {
  getTodo: async () => {
    const res = await axios.get(TODO_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  },

  addTodo: async (todo: string) => {
    if (todo) {
      const res = await axios.post(TODO_URL, JSON.stringify({ todo }), {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    }
  },

  editTodoState: async (id: number, todo: string, isCompleted: boolean) => {
    const res = await axios.put(
      `${TODO_URL}/${id}`,
      JSON.stringify({ todo, isCompleted: !isCompleted }),
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  },
  editTodoText: async (id: number, todo: string, isCompleted: boolean) => {
    const res = await axios.put(
      `${TODO_URL}/${id}`,
      JSON.stringify({ todo, isCompleted }),
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  },
  deleteTodo: async (id: number) => {
    await axios.delete(`${TODO_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
