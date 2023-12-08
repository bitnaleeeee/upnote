import React, { useState } from "react";
import App from "../Lexical/App";
import Notebooks from "../Compotnets/Notebooks";
import "./Main.scss";

const Main = () => {
  const [memo, setMemo] = useState([]);

  function addNewMemo() {
    let inputText = JSON.parse(localStorage.getItem("inputText"));
    setMemo([...memo, inputText]);
  }

  return (
    <div className="upnoteWrap">
      <div className="upnoteIneer">
        <div className="notebookWrap">
          <div className="notebookNav">모든노트</div>
          <p className="basicLabel">미분류</p>
          <Notebooks />
        </div>
        <div className="memoWrap">
          변수들어갈거임
          <ul>
            {memo.map((item, idx) =>
              item.length ? <li key={idx}>{item} </li> : null
            )}
          </ul>
        </div>
        <button className="memoAdd" type="submit" onClick={addNewMemo}>
          새 노트
        </button>
        <div className="editorWrap">
          에디터
          <App />
        </div>
      </div>
    </div>
  );
};

export default Main;
