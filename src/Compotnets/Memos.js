import React from "react";
import { useState, useEffect } from "react";

const Memos = () => {
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
    <div className="memoWrap">
      <div className="title">메모</div>
      <ul>
        {memo.map((item, idx) =>
          item.length ? <li key={idx}>{item} </li> : null
        )}
      </ul>
      <button className="memoAdd" type="submit" onClick={addNewMemo}>
        새 노트
      </button>
    </div>
  );
};

export default Memos;
