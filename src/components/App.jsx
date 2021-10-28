import React, {useState} from "react";

function App() {

  const [currentItem, setCurrentItem] = useState("");
  const [items, setItems] = useState([]);

  function addInput(event){
    let newValue = event.target.value;
    setCurrentItem(newValue);
  }
  function addBtn(ev){
    ev.preventDefault();
    setItems((previousItem) => {
      return [...previousItem, currentItem]
    })
    setCurrentItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <form>
        <div className="form">
          <input onChange={addInput} type="text" value={currentItem} />
          <button onClick={addBtn}>
            <span>Add</span>
          </button>
        </div>
      </form>
      <div>
        <ul>
          {items.map((item)=>{
            return <li>{item}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s
