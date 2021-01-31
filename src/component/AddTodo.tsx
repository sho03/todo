import React, { useState } from "react";
import { Task } from "../domain/Task";

export function AddTodo(props: Props) {

  const [inputValue, setValue] = useState('');

  const addNewTodo = () => {
    const newTask = new Task(inputValue);
    props.addTodo(newTask);
    setValue('');
  }

  return <div>
    <input type="text" value={inputValue} onChange={(e) => setValue(e.target.value)}/>
    <button onClick={addNewTodo}>追加</button>
  </div>
};

type Props = {
  addTodo: (task: Task) => void
}