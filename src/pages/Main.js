import React from "react";
import { useState } from "react";
import App from "../Lexical/App";
import "./Main.scss";

const Main = () => {
  const [memo, setMemo] = useState([]);
  const [list, setList] = useState([]);
  let inputText = JSON.parse(localStorage.getItem("inputText"));

  function addNewNote() {
    setMemo(inputText);
    setList([...list, memo]);
  }

  return (
    <div className="upnoteWrap">
      <div className="upnoteIneer">
        <div className="notebookWrapp">노트북</div>
        <div className="memoWrap">
          메모
          <p>{inputText}</p>
          <ul>
            {console.log(list[0])}
            {list.map((item, idx) =>
              item.length ? <li key={idx}>{item} </li> : null
            )}
          </ul>
        </div>
        <div className="editorWrap">
          에디터
          <button className="buttonAdd" type="submit" onClick={addNewNote}>
            새 노트
          </button>
          <App />
        </div>
      </div>
    </div>
  );
};

export default Main;
