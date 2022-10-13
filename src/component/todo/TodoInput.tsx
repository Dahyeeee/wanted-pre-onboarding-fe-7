import React, { useState } from "react";
import styled from "styled-components";
import axios from "../../api/axios";

const TODO_URL = "/todos";
export default function TodoInput(props: { senseChange: any }) {
  const [todo, setTodo] = useState("");
  const token = localStorage.getItem("token");

  const addTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (todo) {
      await axios.post(TODO_URL, JSON.stringify({ todo: todo }), {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTodo("");
      props.senseChange((prev: any) => !prev);
    }
  };

  return (
    <InputBox onSubmit={addTodo}>
      <Input
        type="text"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        value={todo}
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
