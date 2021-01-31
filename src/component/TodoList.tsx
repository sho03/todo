import React from "react";
import { Task } from "../domain/Task";

export function TodoList(props: Props) {

  return <div>
    <ul>
      {props.tasks.map(task=> <li>{task.title}</li>)}
    </ul>
  </div>
}

type Props = {
  tasks: Task[]
}