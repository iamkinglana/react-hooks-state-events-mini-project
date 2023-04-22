import React from "react";
import {useState} from "react";

function CategoryFilter({categories, onCategoryFilter}) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategoryFilter(category);
  };
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {
        categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "selected" : ""}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))
      }
    </div>
  );
}

export default CategoryFilter;
