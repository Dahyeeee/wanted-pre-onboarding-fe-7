import React, { useState } from "react";
import styled from "styled-components";
import axios from "../../api/axios";
import { Todo } from "../../type/todoItemType";

interface Text {
  done: boolean;
}

export default function TodoItem(props: { todoEach: Todo; senseChange: any }) {
  const token = localStorage.getItem("token");
  const { id, todo, isCompleted } = props.todoEach;
  const TODO_URL = `/todos/${id}`;

  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo);

  const changeState = async () => {
    await axios.put(
      TODO_URL,
      JSON.stringify({ todo: todo, isCompleted: !isCompleted }),
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    props.senseChange((prev: any) => !prev);
  };

  const editText = () => {
    setIsEditing(true);
  };

  const deleteItem = async () => {
    await axios.delete(TODO_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    props.senseChange((prev: any) => !prev);
  };

  const confirmEdit = async () => {
    setIsEditing(false);
    await axios.put(
      TODO_URL,
      JSON.stringify({ todo: text, isCompleted: isCompleted }),
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    props.senseChange((prev: any) => !prev);
  };

  const cancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <TodoItemBox id={String(id)}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <Buttons>
            <Button onClick={confirmEdit}>수정</Button>
            <Button onClick={cancelEdit}>취소</Button>
          </Buttons>
        </>
      ) : (
        <>
          <input
            id={String(id)}
            type="checkbox"
            onChange={changeState}
            checked={isCompleted}
          />
          <TodoText
            htmlFor={String(id)}
            onClick={changeState}
            done={isCompleted}
          >
            {todo}
          </TodoText>

          <Buttons>
            <Button onClick={editText}>수정</Button>
            <Button onClick={deleteItem}>삭제</Button>
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
