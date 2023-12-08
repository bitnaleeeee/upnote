import React from "react";
import { useState, useEffect } from "react";

import App from "../Lexical/App";
import Notebooks from "../Compotnets/Notebooks";
import Memos from "../Compotnets/Memos";
import "./Main.scss";

const Main = () => {
  const [memo, setMemo] = useState([]);

  useEffect(() => {
    const storedMemo = JSON.parse(localStorage.getItem("memo"));
    if (storedMemo) {
      setMemo(storedMemo);
    }
  }, []);

  function addNewMemo() {
    let inputText = JSON.parse(localStorage.getItem("inputText"));
    const newMemo = [...memo, inputText];
    setMemo(newMemo);

    localStorage.setItem("memo", JSON.stringify(newMemo));
  }

  return (
    <div className="upnoteWrap">
      <div className="upnoteIneer">
        <div className="notebookWrap">
          <div className="notebookNav">모든노트</div>
          <p className="basicLabel">- 미분류</p>
          <Notebooks />
        </div>
        <Memos memo={memo} />
        <div className="editorWrap">
          <div className="title">
            에디터
            <button className="memoAdd" type="submit" onClick={addNewMemo}>
              새 노트
            </button>
          </div>

          <App />
        </div>
      </div>
    </div>
  );
};

export default Main;
