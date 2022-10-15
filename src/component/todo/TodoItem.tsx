import React, { useState, useRef } from "react";
import styled from "styled-components";
import { todoApi } from "../../api/todoApi";
import { Todo } from "../../type/todoItemType";

interface Text {
  done: boolean;
}

export default function TodoItem(props: { todoEach: Todo }) {
  const { id, todo, isCompleted } = props.todoEach;

  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("");

  return (
    <TodoItemBox id={String(id)}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setText(e.target.value);
            }}
          />
          <Buttons>
            <Button
              onClick={() => {
                console.log(text);
                todoApi.editTodoText(id, text, isCompleted);
                setIsEditing(false);
              }}
            >
              수정
            </Button>
            <Button
              onClick={() => {
                setIsEditing(false);
              }}
            >
              취소
            </Button>
          </Buttons>
        </>
      ) : (
        <>
          <input
            id={String(id)}
            type="checkbox"
            onChange={todoApi.editTodoState(id, todo, isCompleted)}
            checked={isCompleted}
          />
          <TodoText
            htmlFor={String(id)}
            onClick={todoApi.editTodoState(id, todo, isCompleted)}
            done={isCompleted}
          >
            {todo}
          </TodoText>

          <Buttons>
            <Button onClick={() => setIsEditing(true)}>수정</Button>
            <Button onClick={todoApi.deleteTodo(id)}>삭제</Button>
          </Buttons>
        </>
      )}
    </TodoItemBox>
  );
}

const TodoItemBox = styled.li`
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const TodoText = styled.label<Text>`
  list-style: none;
  color: ${(props) => (props.done ? "gray" : "black")};
  text-decoration: ${(props) => (props.done ? "line-through" : "none")};
  cursor: pointer;
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
