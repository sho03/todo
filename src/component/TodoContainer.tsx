import React, { useState } from "react";
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";
import { Task } from "../domain/Task";

export function TodoContainer() {

  const [tasks, setTasks] = useState<Task[]>([]);

  const addTodo = (task: Task) => {
    setTasks(tasks.concat(task));
  }

  return <div>
    <h1>This is Todo Component!</h1>
    <AddTodo addTodo={addTodo}/>
    <TodoList tasks={tasks}/>
  </div>
};