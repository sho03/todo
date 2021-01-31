import React from "react";
import { Task } from "../domain/Task";

export function TodoList(props: Props) {

  const todoList = () => {
    return props.tasks.map(task => {
      return(
      <div key={task.title}>
        <span>{task.title}</span>
        <input type="checkbox" defaultChecked={task.done}/>
      </div>
      )
    })
  };
  return <div>
    {todoList()}
  </div>
}

type Props = {
  tasks: Task[]
}