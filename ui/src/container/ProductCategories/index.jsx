import PropTypes from "prop-types";
import { useState } from "react";
import "./productCategories.scss";

const ProductCategories = ({
  categoriesInfo,
  updateCategory,
  activeCategoryInfo,
}) => {
  const [isOpen, toggleOpen] = useState(false);

  const width = window && window.innerWidth;
  const isMobile = !!(width <= 480);

  const onCategoryClick = (category) => {
    if (isMobile) toggleOpen(!isOpen);
    updateCategory(category.key);
  };

  const category = categoriesInfo.map((category) => {
    if (category.order < 0) return null;

    const isActiveCategory = activeCategoryInfo?.id === category.id;
    return (
      <li
        key={category.key}
        onClick={() => onCategoryClick(category)}
        className={isActiveCategory ? "active" : ""}
      >
        {category.name}
      </li>
    );
  });
  return (
    <div className="categories-list">
      {isMobile ? (
        <div className="selected" onClick={() => toggleOpen(!isOpen)}>
          {activeCategoryInfo?.name || categoriesInfo[0].name}
        </div>
      ) : null}
      <ul className={isMobile && !isOpen ? "hide" : "show"}>{category}</ul>
    </div>
  );
};

ProductCategories.prototype = {
  categoriesInfo: PropTypes.array.isRequired,
  activeCategoryInfo: PropTypes.object.isRequired,
  updateCategory: PropTypes.func.isRequired,
};

export default ProductCategories;
