import React, { useState } from "react";
import styled from "styled-components";

export default function TodoInput(props: { addTodo: any }) {
  const [text, setText] = useState("");

  return (
    <InputBox onSubmit={props.addTodo(text)}>
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
