import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import './App.css';

const App = () => {
  const [items, setItems] = useState([""]);
  const [submittedItems, setSubmittedItems] = useState([]);

  const itemhandleChange = (event, index) => {
    let updatedItems = [...items];
    updatedItems[index] = event.target.value;
    setItems(updatedItems);
  };

  const additem = (event) => {
    event.preventDefault();
    setItems([...items, ""]);
  };

  const deleteitem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleSubmit = () => {
  
    setSubmittedItems(items.filter(item => item.trim() !== ""));
   
    setItems([""]);
  };

  return (
    <>
      <div className="card">
        <h1>Todo-List</h1>
        {items.map((item, index) => (
          <span key={index}>
            <input
              id={`item${index}`}
              type="text"
              name={`item${index}`}
              value={item}
              onChange={(event) => itemhandleChange(event, index)}
            />
          
          </span>
        ))}
        <button className="add" type="button" onClick={additem}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <button
              className="delete"
              type="button"
              onClick={ deleteitem}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
        <div>
          <button id="submit" type="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>




      <div className="submitted-items">
        <h2>List:</h2>
        <ul>
          {submittedItems.map((submittedItem, index) => (
            <li key={index}>{submittedItem}</li>
          ))}
        </ul>
      </div>
      </div>

      
    </>
  );
};

export default App;
