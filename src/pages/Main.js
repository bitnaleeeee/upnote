import React from "react";
import App from "../Lexical/App";
import "./Main.scss";

const Main = () => {
  return (
    <div className="upnoteWrap">
      <div className="upnoteIneer">
        <div className="notebookWrapp">노트북</div>
        <div className="memoWrap">메모</div>
        <div className="editor">
          <App />
        </div>
      </div>
    </div>
  );
};

export default Main;
