import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { todoApi } from "../api/todoApi";
import TodoInput from "../component/todo/TodoInput";
import TodoList from "../component/todo/TodoList";

export default function TodoPage() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  useEffect(() => {
    todoApi.getTodo().then((res) => {
      setTodoList(res);
    });
  }, []);

  return (
    <Wrapper>
      <h1>To Do List</h1>
      <TodoInput onSuccess={setTodoList} />
      <TodoList todoList={todoList} onSuccess={setTodoList} />
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
