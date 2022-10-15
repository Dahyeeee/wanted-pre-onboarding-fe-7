import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Todo } from "../../type/todoItemType";
import TodoItem from "./TodoItem";

export default function TodoList(props: { todoList: Todo[]; onSuccess: any }) {
  return (
    <TodoListWrapper>
      {props.todoList.map((todoEach: Todo) => (
        <TodoItem
          key={todoEach.id}
          todoEach={todoEach}
          onSuccess={props.onSuccess}
        />
      ))}
    </TodoListWrapper>
  );
}

const TodoListWrapper = styled.ul`
  padding-inline-start: 2px;
`;
