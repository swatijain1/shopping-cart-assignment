import PropTypes from "prop-types";
import "./productCategories.scss";

const ProductCategories = ({
  categoriesInfo,
  updateCategory,
  activeCategoryInfo,
}) => {
  const category = categoriesInfo.map((category) => {
    if (category.order < 0) return null;
    return (
      <li
        key={category.key}
        onClick={() => updateCategory(category.key)}
        className={activeCategoryInfo?.id === category.id ? "active" : ""}
      >
        {category.name}
      </li>
    );
  });
  return (
    <div className="categories-list">
      <ul>{category}</ul>
    </div>
  );
};

ProductCategories.prototype = {
  categoriesInfo: PropTypes.array.isRequired,
  activeCategoryInfo: PropTypes.object.isRequired,
  updateCategory: PropTypes.func.isRequired,
};

export default ProductCategories;
