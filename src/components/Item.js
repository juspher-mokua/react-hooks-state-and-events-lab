import React, { useState }  from "react";

function Item({ name, category }) {
  const [isAdded, setIsAdded] = useState(false);
  const addClass = isAdded ? "in-cart" : "";
  const addColorClass = isAdded ? "remove" : "add";

  function handleAdd() {
    return setIsAdded((isAdded) => !isAdded);
  }
  return (
    <li className={addClass} >
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addColorClass} onClick={handleAdd}>{!isAdded ? "Add to Cart" : "Remove From Cart"} </button>
    </li>
  );
}

export default Item;
