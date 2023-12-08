import React, { useState } from "react";
import App from "../Lexical/App";
import Notebooks from "../Compotnets/Notebooks";
import "./Main.scss";

const Main = () => {
  const [isActive, setIsActive] = useState(false);
  const [memo, setMemo] = useState([]);

  function addNewMemo() {
    let inputText = JSON.parse(localStorage.getItem("inputText"));
    setMemo([...memo, inputText]);
  }

  const handleClick = () => {
    setIsActive(!isActive); // 클릭할 때마다 상태를 반전
  };

  return (
    <div className="upnoteWrap">
      <div className="upnoteIneer">
        <div className="notebookWrap">
          <div className="notebookNav">모든노트</div>
          <p
            className={isActive ? "basicLabeloff" : "basicLabel"}
            onClick={handleClick}
          >
            미분류
          </p>

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
