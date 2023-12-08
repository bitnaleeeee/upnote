import React, { useState } from "react";
import App from "../Lexical/App";
import Notebooks from "../Compotnets/Notebooks";
import Memos from "../Compotnets/Memos";
import "./Main.scss";

const Main = () => {
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
          <Memos />
        </div>
        <div className="editorWrap">
          에디터
          <App />
        </div>
      </div>
    </div>
  );
};

export default Main;
