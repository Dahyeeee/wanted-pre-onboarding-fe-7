import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../../api/axios";
import { Todo } from "../../type/todoItemType";
import TodoItem from "./TodoItem";

const TODO_URL = "/todos";
export default function TodoList(props: { change: boolean; senseChange: any }) {
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
        setTodoList(res.data);
      });
  }, [props.change, token]);

  return (
    <TodoListWrapper>
      {todoList.map((todoEach: Todo) => (
        <TodoItem
          key={todoEach.id}
          todoEach={todoEach}
          senseChange={props.senseChange}
        />
      ))}
    </TodoListWrapper>
  );
}

const TodoListWrapper = styled.ul`
  padding-inline-start: 2px;
`;
