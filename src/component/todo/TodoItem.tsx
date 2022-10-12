import React from "react";
import styled from "styled-components";
import { Todo } from "../../type/todoItemType";

export default function TodoItem(props: { todoEach: Todo }) {
  const { id, todo } = props.todoEach;

  return (
    <TodoItemBox id={String(id)}>
      <li>{todo}</li>
      <Buttons>
        <Button>edit</Button>
        <Button>delete</Button>
      </Buttons>
    </TodoItemBox>
  );
}

const TodoItemBox = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Buttons = styled.div`
  display: flex;
`;
const Button = styled.button`
  border-radius: 10px;
  margin-left: 1rem;
  padding: 0.3rem;
  background-color: white;
  border: 2px green solid;
  cursor: pointer;
`;
