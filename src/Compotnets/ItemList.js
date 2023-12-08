import React from "react";

const ItemList = (props) => {
  const { items } = props;

  return (
    <>
      <ul className="basicLabel">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};
export default ItemList;
