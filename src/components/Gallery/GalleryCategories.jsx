import React from "react";

const GalleryCategories = ({
  categories,
  activeCategory,
  changeCategory,
}) => {
  return (
    <div className="category-wrapper">
      <div className="category-scroll">

        {categories.map((category) => (
          <button
            key={category}
            className={
              activeCategory === category
                ? "category-button active-category"
                : "category-button"
            }
            onClick={() => changeCategory(category)}
          >
            {category}
          </button>
        ))}

      </div>
    </div>
  );
};

export default GalleryCategories;