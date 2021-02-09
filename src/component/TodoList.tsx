import React, {ChangeEvent} from "react";
import {Task} from "../domain/Task";
import {useSelector} from "react-redux";
import {AppState, TodoState} from "../redux/store";

export function TodoList(props: Props) {

  const onChange = (event: ChangeEvent<HTMLInputElement>, task: Task) => {
    props.doComplete(event, task);
  }
  const tasks = useSelector((state: AppState) => state.todo.tasks)
  console.log(tasks)
  if (!tasks) {
    return <div>no contents</div>
  }
  const todoList = () => {
    return tasks.map(task => {
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