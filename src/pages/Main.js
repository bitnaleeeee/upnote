import React from "react";
import { useState } from "react";
import App from "../Lexical/App";
import "./Main.scss";

const Main = () => {
  let inputText = JSON.parse(localStorage.getItem("inputText"));

  const [memo, setMemo] = useState([]);
  const [list, setList] = useState([]);
  const [items, setItems] = useState([]);

  function addNoteBook() {
    const newItems = [...items, `Item ${items.length + 1}`];
    setItems(newItems);
  }

  function addNewNote() {
    setMemo(inputText);
    setList([...list, memo]);
  }

  return (
    <div className="upnoteWrap">
      <div className="upnoteIneer">
        <div className="notebookWrap">
          <div className="notebookNav">
            <div className="notebookTab">여러 노트북</div>
            <button className="notebookAdd" type="submit" onClick={addNoteBook}>
              +
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
          <p>{inputText}</p>
          <ul>
            {list.map((item, idx) =>
              item.length ? <li key={idx}>{item} </li> : null
            )}
          </ul>
        </div>
        <div className="editorWrap">
          에디터
          <button className="memoAdd" type="submit" onClick={addNewNote}>
            새 노트
          </button>
          <App />
        </div>
      </div>
    </div>
  );
};

export default Main;
