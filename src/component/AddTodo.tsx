import React, { useState } from "react";
import { Task } from "../domain/Task";

export function AddTodo(props: Props) {

  const [inputValue, setValue] = useState('');
  const [disabled, setDisabled] = useState(true);

  const addNewTodo = () => {
    const newTask = new Task(inputValue);
    props.addTodo(newTask);
    setValue('');
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (e.target.value) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  return <div>
    <input type="text" value={inputValue} onChange={onChange} />
    <button onClick={addNewTodo} disabled={disabled}>追加</button>
  </div>
};

type Props = {
  addTodo: (task: Task) => void
}