import React, { useState } from "react";

export function AddTodo() {

  const [inputValue, setValue] = useState('');

  return <div>
    <input type="text" value={inputValue} onChange={(e) => setValue(e.target.value)}/>
    <button>追加</button>
  </div>
};