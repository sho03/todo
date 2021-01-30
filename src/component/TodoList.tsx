import React from "react";

export function TodoList(props: Props) {

  return <div>
    <ul>
      {props.names.map(name => <li>{name}</li>)}
    </ul>
  </div>
}

type Props = {
  names: string[]
}