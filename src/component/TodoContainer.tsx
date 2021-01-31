import React, { useState, ChangeEvent } from "react";
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";
import { Task } from "../domain/Task";

export function TodoContainer() {

  const [tasks, setTasks] = useState<Task[]>([]);

  const addTodo = (task: Task) => {
    setTasks(tasks.concat(task));
  };

  const doComplete = (event: ChangeEvent<HTMLInputElement>, task: Task) => {
    const newTasks = [...tasks];
    const target = newTasks.find(t => t.title === task.title);
    if (!target) {
      return;
    }
    target.done = event.target.checked;
    setTasks(newTasks);
  };

  return <div>
    <h1>This is Todo Component!</h1>
    <AddTodo addTodo={addTodo}/>
    <TodoList tasks={tasks} doComplete={doComplete}/>
  </div>
};