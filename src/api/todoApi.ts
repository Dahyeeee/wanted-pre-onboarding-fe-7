import axios from "./axios";

export default class TodoApi {
  TODO_URL: string;
  token: string | null;

  constructor() {
    this.TODO_URL = "/todos";
    this.token = localStorage.getItem("token");
  }

  getToken = () => {
    return this.token;
  };

  getTodo = async () => {
    const res = await axios.get(this.TODO_URL, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
    return res.data;
  };

  addTodo = async (todo: string) => {
    const res = await axios.post(this.TODO_URL, JSON.stringify({ todo }), {
      headers: { Authorization: `Bearer ${this.token}` },
    });
    return res.data;
  };

  editTodoState = async (id: number, todo: string, isCompleted: boolean) => {
    const res = await axios.put(
      `${this.TODO_URL}/${id}`,
      JSON.stringify({ todo, isCompleted: !isCompleted }),
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }
    );
    return res;
  };

  editTodoText = async (id: number, todo: string, isCompleted: boolean) => {
    const res = await axios.put(
      `${this.TODO_URL}/${id}`,
      JSON.stringify({ todo, isCompleted }),
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }
    );
    return res;
  };

  deleteTodo = async (id: number) => {
    await axios.delete(`${this.TODO_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  };
}
