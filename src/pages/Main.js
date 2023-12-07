import React, { useEffect } from "react";
import { useState } from "react";
import App from "../Lexical/App";
import "./Main.scss";

const Main = () => {
  const [items, setItems] = useState([]);

  const [memo, setMemo] = useState([]);

  function addNoteBook() {
    let newItems = [...items, `노트북 ${items.length + 1}`];
    setItems(newItems);
  }
  function removeNoteBook() {
    const updatedList = items.slice(0, -1);
    setItems(updatedList);
  }

  function addNewMemo() {
    let inputText = JSON.parse(localStorage.getItem("inputText"));
    setMemo([...memo, inputText]);
  }

  return (
    <div className="upnoteWrap">
      <div className="upnoteIneer">
        <div className="notebookWrap">
          <div className="notebookNav">
            <div className="notebookTab">여러 노트북</div>
            <button className="notebookAdd" type="submit" onClick={addNoteBook}>
              Add+
            </button>
            <button
              className="notebookAdd"
              type="submit"
              onClick={removeNoteBook}
            >
              Delete
            </button>
          </div>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="memoWrap">
          메모
          <p>새노트</p>
          <ul>
            {memo.map((item, idx) =>
              item.length ? <li key={idx}>{item} </li> : null
            )}
          </ul>
        </div>
        <div className="editorWrap">
          에디터
          <button className="memoAdd" type="submit" onClick={addNewMemo}>
            새 노트
          </button>
          <App />
        </div>
      </div>
    </div>
  );
};

export default Main;
