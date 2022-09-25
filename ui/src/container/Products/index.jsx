import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { Button } from "../../components";
import { addProduct } from "../../reducer/cart";
import "./products.scss";

const Products = ({ productList }) => {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(addProduct(product));
  };

  const products = productList.map((product) => (
    <div className="product" key={product.id}>
      <h3>{product.name}</h3>
      <img src={product.imageURL} alt={product.name} />
      <p className="description">{product.description}</p>
      <div className="price">
        <p>MRP Rs. {product.price}</p>
        <Button onClickHandler={() => addToCart(product)}>Buy Now</Button>
      </div>
    </div>
  ));

  return <div className="products">{products}</div>;
};

Products.propTypes = {
  productList: PropTypes.array.isRequired,
};

export default Products;
