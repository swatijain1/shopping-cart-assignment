import PropTypes from "prop-types";

import Button from "../Button";
import contentString from "../../contentStrings/en.json";

import "./cartCheckout.scss";

const CartCheckout = ({ displayTotalPrice, isEmptyCart }) => {
  const { cart } = contentString;

  if (isEmptyCart) {
    return <Button onClickHandler={() => {}}>{cart.startShopping}</Button>;
  }

  return (
    <div className="checkout-container">
      <p>{cart.promoCodeMessage}</p>
      <div className="checkout">
        <Button onClickHandler={() => {}}>
          <div className="total">
            <p className="proceed">{cart.proceed}</p>
            <p>{`${cart.currency}${displayTotalPrice}`}</p>
            <p>❱</p>
          </div>
        </Button>
      </div>
    </div>
  );
};

CartCheckout.propTypes = {
  displayTotalPrice: PropTypes.string,
  isEmptyCart: PropTypes.bool,
};

CartCheckout.defaultProps = {
  isEmptyCart: false,
};

export default CartCheckout;
