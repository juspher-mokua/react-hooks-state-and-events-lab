import React,{ useState }  from  "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setCategory] = useState("All");

  function handleSelection(event) {
    setCategory(event.target.value);
  }
  const ShoppingListToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  });
  return (
    <div className="ShoppingList" onChange={handleSelection}>
      <div className="Filter">
        <select name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
      {ShoppingListToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} isAdded={item.isAdded}/>
        ))}       
      </ul>
    </div>
  );
}

export default ShoppingList;
