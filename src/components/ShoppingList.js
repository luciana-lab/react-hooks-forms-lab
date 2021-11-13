import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  // set up your initial state
  const [search, setSearch] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // set state when the input changes
  function handleSearchChange(e) {
    setSearch(e.target.value)
  }

  // use that state value to determine which items are being displayed on the page
  const itemsToDisplay = items
    // category
    .filter(item => selectedCategory === "All" || item.category === selectedCategory)

    // search
    .filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={search} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;