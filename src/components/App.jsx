import React, { useState } from "react";
import List from "./List";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem(ev) {
    ev.preventDefault();
    if (inputText) {
      setItems((prevItems) => {
        return [...prevItems, inputText];
      });
      setInputText("");
    } else alert("Enter something!");
  }

  function deleteItem(id) {
    setItems((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <form>
          <input onChange={handleChange} type="text" value={inputText} />
          <button onClick={addItem}>
            <span>Add</span>
          </button>
        </form>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <List key={index} id={index} text={todoItem} onCheck={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
