import React, { useState } from "react";
import Todo from "./todoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  // deleting a todo via remving it from the array
  function deleteTodo(id) {
    setItems(
      items.filter((item, index) => {
        return index !== id;
      })
    );
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          {items.map((todoItem, index) => {
            return <Todo key={index} id={index} todo={todoItem} isDone={deleteTodo} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
