import React from "react";

function Todo(props) {
  return <li onClick={() => props.isDone(props.id)}>{props.todo}</li>;
}

export default Todo;
