import React from "react";
import { useState } from "react";
import App from "../Lexical/App";
import "./Main.scss";

const Main = () => {
  const [memo, setMemo] = useState();
  let inputText = JSON.parse(localStorage.getItem("inputText"));

  function addNewNote() {
    setMemo(inputText);
  }

  return (
    <div className="upnoteWrap">
      <div className="upnoteIneer">
        <div className="notebookWrapp">노트북</div>
        <div className="memoWrap">
          메모
          {inputText}
          {/* {memo.map((item, index) => {
            return <span key={index}>{item}</span>;
          })} */}
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
