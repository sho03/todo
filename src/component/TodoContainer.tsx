import React, { useState } from "react";
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";

export function TodoContainer() {

  const [todos, setTodos] = useState(["Reactを学ぶ", "英語を学ぶ"]);

  const addTodo = (todo: string) => {
    setTodos(todos.concat(todo));
  }

  return <div>
    <h1>This is Todo Component!</h1>
    <AddTodo addTodo={addTodo}/>
    <TodoList names={todos}/>
  </div>
};