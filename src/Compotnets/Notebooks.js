import React, { useState, useEffect } from "react";

const Notebooks = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("notebooks"));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  function addNoteBook() {
    const newItems = [...items, `노트북 ${items.length + 1}`];
    setItems(newItems);
    localStorage.setItem("notebooks", JSON.stringify(newItems));
  }

  function removeNoteBook() {
    const updatedList = items.slice(0, -1);
    setItems(updatedList);
    localStorage.setItem("notebooks", JSON.stringify(updatedList));
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
      <ul className="basicLabel">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Notebooks;
