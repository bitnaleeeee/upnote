import React from "react";
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
          <p className="basicLabel">- 미분류</p>
          <Notebooks />
        </div>
        <Memos />
        <div className="editorWrap">
          <div className="title">에디터</div>
          <App />
        </div>
      </div>
    </div>
  );
};

export default Main;
