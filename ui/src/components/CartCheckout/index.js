import PropTypes from "prop-types";

import Button from "../Button";
import contentString from "../../contentStrings/en.json";

import "./cartCheckout.scss";

const CartCheckout = ({ displayTotalPrice, isEmptyCart, closeCart }) => {
  const { cart } = contentString;
  let checkout;
  if (isEmptyCart) {
    checkout = <Button onClickHandler={closeCart}>{cart.startShopping}</Button>;
  } else {
    checkout = (
      <>
        <p>{cart.promoCodeMessage}</p>
        <div className="checkout">
          <Button onClickHandler={closeCart}>
            <div className="total">
              <p className="proceed">{cart.proceed}</p>
              <p>{`${cart.currency}${displayTotalPrice}`}</p>
              <p>❱</p>
            </div>
          </Button>
        </div>
      </>
    );
  }

  return <div className="checkout-container">{checkout}</div>;
};

CartCheckout.propTypes = {
  displayTotalPrice: PropTypes.string,
  isEmptyCart: PropTypes.bool.isRequired,
  closeCart: PropTypes.func.isRequired,
};

export default CartCheckout;
