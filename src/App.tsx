import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signin from "./page/Signin";
import Signup from "./page/Signup";
import Todo from "./page/Todo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
