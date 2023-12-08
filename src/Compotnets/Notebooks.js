import React from "react";
import { useState } from "react";
import ItemList from "./ItemList";

const Notebooks = () => {
  const [items, setItems] = useState([]);

  function addNoteBook() {
    let newItems = [...items, `노트북 ${items.length + 1}`];
    setItems(newItems);
  }

  function removeNoteBook() {
    const updatedList = items.slice(0, -1);
    setItems(updatedList);
  }

  return (
    <>
      <div className="notebookLabel">
        <p>여러 노트북</p>
        <button className="notebookAdd" type="submit" onClick={addNoteBook}>
          Add+
        </button>
        <button className="notebookAdd" type="submit" onClick={removeNoteBook}>
          Delete-
        </button>
      </div>
      <ItemList items={items} />
    </>
  );
};

export default Notebooks;
