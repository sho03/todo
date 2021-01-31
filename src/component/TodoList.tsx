import React, { ChangeEvent } from "react";
import { Task } from "../domain/Task";

export function TodoList(props: Props) {

  const onChange = (event: ChangeEvent<HTMLInputElement>, task: Task) => {
    props.doComplete(event, task);
  }

  const todoList = () => {
    return props.tasks.map(task => {
      return(
      <div key={task.title}>
        <span>{task.title}</span>
        <input type="checkbox" defaultChecked={task.done} onChange={(e) => onChange(e, task)}/>
      </div>
      )
    })
  };
  return <div>
    {todoList()}
  </div>
}

type Props = {
  tasks: Task[],
  doComplete: (event: ChangeEvent<HTMLInputElement>, task: Task) => void
}