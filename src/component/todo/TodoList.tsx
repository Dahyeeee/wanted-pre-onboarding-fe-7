import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { Todo } from "../../type/todoItemType";
import TodoItem from "./TodoItem";

const TODO_URL = "/todos";
export default function TodoList() {
  const token = localStorage.getItem("token");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    axios
      .get(TODO_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setTodoList(res.data);
      });
  }, [token]);
  return (
    <ul>
      {todoList.map((todoEach: Todo) => (
        <TodoItem key={todoEach.id} todoEach={todoEach} />
      ))}
    </ul>
  );
}
