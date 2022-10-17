import React, { useState } from "react";
import styled from "styled-components";
import TodoApi from "../../api/todoApi";
import { addItem } from "../../utils/todo";

export default function TodoInput(props: { onSuccess: any }) {
  const [text, setText] = useState("");
  const todoApi = new TodoApi();

  return (
    <InputBox
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (text) {
          todoApi.addTodo(text).then((res) => {
            props.onSuccess(addItem(res));
          });
          setText("");
        }
      }}
    >
      <Input
        type="text"
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setText(e.target.value);
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
