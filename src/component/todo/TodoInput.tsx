import React, { useState } from "react";
import styled from "styled-components";
import axios from "../../api/axios";
import { Todo } from "../../type/todoItemType";

export default function TodoInput() {
  const [todoText, setTodoText] = useState("");
  const token = localStorage.getItem("token");

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: Todo = {
      id: 2,
      todo: todoText,
      isCompleted: false,
      userId: 1,
    };

    axios
      .post("/todos", JSON.stringify(newTodo), {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => console.log(res));
  };

  return (
    <InputBox onSubmit={addTodo}>
      <Input
        type="text"
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
      ></Input>
      <Button>Add</Button>
    </InputBox>
  );
}

const InputBox = styled.form`
  width: 90%;
  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  width: 70%;
  margin-right: 0.7rem;
`;

const Button = styled.button`
  border-radius: 10px;
  margin-left: 1rem;
  padding: 0.5rem;
  background-color: white;
  border: 2px green solid;
  cursor: pointer;
`;
