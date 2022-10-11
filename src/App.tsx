import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./page/Signin";
import Signup from "./page/Signup";
import Todo from "./page/Todo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/singup" element={<Signup />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
