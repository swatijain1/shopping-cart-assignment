import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { Button, Divider } from "../../components";
import { PAGE_URL } from "../../constants";
import "./homePageCategories.scss";

const HomePageCategories = ({ categories }) => {
  const navigate = useNavigate();
  const explore = (key) => {
    navigate(`${PAGE_URL.PRODUCT_LIST}?category=${key}`);
  };

  const categoryList = categories.map((category, index) => (
    <li key={category.key}>
      <Divider />
      <div
        className={`category-list${index % 2 === 0 ? " toggle-content" : ""}`}
      >
        <img src={category.imageUrl} alt={category.name} />
        <div className="description">
          <h2>{category.name}</h2>
          <p>{category.description}</p>
          <Button
            onClickHandler={() => explore(category.key)}
          >{`Explore ${category.key}`}</Button>
        </div>
      </div>
    </li>
  ));

  return <ul className="homePageCategories">{categoryList}</ul>;
};

HomePageCategories.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default HomePageCategories;
