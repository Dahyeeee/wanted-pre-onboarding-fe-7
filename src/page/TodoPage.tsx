import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "../api/axios";
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
    axios
      .get("/todos", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setTodoList(res.data);
      });
  }, [setTodoList, token]);

  return (
    <Wrapper>
      <h1>To Do List</h1>
      <TodoInput addTodo={todoApi.addTodo} />
      <TodoList todoList={todoList} />
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
