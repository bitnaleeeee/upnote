import React from "react";
import App from "../Lexical/App";
import "./Main.scss";

const Main = () => {
  function addNewNote() {
    let userMemo = JSON.parse(localStorage.getItem("inputText"));
    console.log(userMemo);
  }

  return (
    <div className="upnoteWrap">
      <div className="upnoteIneer">
        <div className="notebookWrapp">노트북</div>
        <div className="memoWrap">메모</div>
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
