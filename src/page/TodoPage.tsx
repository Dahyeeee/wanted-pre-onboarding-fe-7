import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TodoApi from "../api/todoApi";
import TodoInput from "../component/todo/TodoInput";
import TodoList from "../component/todo/TodoList";

export default function TodoPage() {
  const todoApi = useMemo(() => new TodoApi(), []);
  const navigate = useNavigate();
  const token = todoApi.getToken();
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  useEffect(() => {
    if (token) {
      todoApi.getTodo().then((res) => {
        setTodoList(res);
      });
    }
  }, [todoApi, token]);

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
