import React from "react";

const Memos = (props) => {
  const { memo } = props;

  return (
    <div className="memoWrap">
      <div className="title">메모</div>
      <ul>
        {memo.map((item, idx) =>
          item.length ? <li key={idx}>{item} </li> : null
        )}
      </ul>
    </div>
  );
};

export default Memos;
