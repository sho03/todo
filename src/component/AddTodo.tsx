import React, { useState } from "react";

export function AddTodo(props: Props) {

  const [inputValue, setValue] = useState('');

  const addNewTodo = () => {
    props.addTodo(inputValue);
    setValue('');
  }

  return <div>
    <input type="text" value={inputValue} onChange={(e) => setValue(e.target.value)}/>
    <button onClick={addNewTodo}>追加</button>
  </div>
};

type Props = {
  addTodo: (todo: string) => void
}