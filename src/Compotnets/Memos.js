import React from "react";
import { useState } from "react";

const Memos = () => {
  const [memo, setMemo] = useState([]);

  function addNewMemo() {
    let inputText = JSON.parse(localStorage.getItem("inputText"));
    setMemo([...memo, inputText]);
  }
  return (
    <>
      <ul>
        {memo.map((item, idx) =>
          item.length ? <li key={idx}>{item} </li> : null
        )}
      </ul>
      <button className="memoAdd" type="submit" onClick={addNewMemo}>
        새 노트
      </button>
    </>
  );
};
export default Memos;
