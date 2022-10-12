import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TodoInput from "../component/todo/TodoInput";
import TodoList from "../component/todo/TodoList";

export default function TodoPage() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <Wrapper>
      <h1>To Do List</h1>
      <TodoInput />
      <TodoList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 5rem;
`;