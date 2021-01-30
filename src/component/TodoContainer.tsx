import React, { useState } from "react";
import { AddTodo } from "./AddTodo";

export function TodoContainer() {

  const [todos, setTodos] = useState([]);

  return <div>
    <h1>This is Todo Component!</h1>
    <AddTodo />
  </div>
};