import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import Button from "../Button";
import { removeProduct, updateCart } from "../../reducer/cart";
import contentString from "../../contentStrings/en.json";

import "./cartItems.scss";

const CartItems = ({ items }) => {
  const dispatch = useDispatch();
  const { cart } = contentString;
  if (!items.length) {
    return (
      <div className="empty-cart">
        <h3>{cart.emptyCartHeading}</h3>
        <p>{cart.emptyCartDescription}</p>
      </div>
    );
  }

  const addProduct = (product) => dispatch(updateCart(product));
  const removeCartProduct = (product) => dispatch(removeProduct(product));

  return items.map(({ product, quantity, totalItemPrice }) => {
    return (
      <div className="item" key={product.id}>
        <img src={product.imageURL} alt={product.name} />
        <div className="item-description">
          <h3>{product.name}</h3>
          <div className="quantity">
            <Button onClickHandler={() => removeCartProduct(product)}>-</Button>
            <p>{quantity}</p>
            <Button onClickHandler={() => addProduct(product)}>+</Button>
            <p>x</p>
            <p>{`${cart.currency}${product.price}`}</p>
          </div>
        </div>
        <p className="total-price">{`${cart.currency}${totalItemPrice}`}</p>
      </div>
    );
  });
};

CartItems.propTypes = {
  items: PropTypes.array.isRequired,
};

export default CartItems;
