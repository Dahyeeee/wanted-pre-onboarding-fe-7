import React, { useState } from "react";
import styled from "styled-components";
import { todoApi } from "../../api/todoApi";
import { Todo } from "../../type/todoItemType";

export default function TodoInput(props: { onSuccess: any }) {
  const [text, setText] = useState("");

  return (
    <InputBox
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        todoApi.addTodo(text).then((res) => {
          console.log(res);
          props.onSuccess((prev: Todo[]) => [...prev, res]);
        });
        setText("");
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
