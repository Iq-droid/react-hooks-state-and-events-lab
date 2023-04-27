import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  function handleDarkModeToggle() {
    setDarkMode(!darkMode);
  }

  function handleCategorySelect(category) {
    setSelectedCategory(category);
  }

  const appClass = darkMode ? "App dark" : "App light";
  const filteredItems = selectedCategory
    ? itemData.filter((item) => item.category === selectedCategory)
    : itemData;

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeToggle}>Dark Mode</button>
      </header>
      <div>
        <h3>Categories</h3>
        <button onClick={() => handleCategorySelect("")}>All</button>
        <button onClick={() => handleCategorySelect("food")}>Food</button>
        <button onClick={() => handleCategorySelect("clothing")}>Clothing</button>
        <button onClick={() => handleCategorySelect("electronics")}>Electronics</button>
      </div>
      <ShoppingList items={filteredItems} />
    </div>
  );
}

export default App;

