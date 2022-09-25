import { useSelector } from "react-redux";
import Proptypes from "prop-types";

import { CartItems, CartCheckout } from "../../components";
import { getCartInfo } from "../../reducer/cart";
import contentString from "../../contentStrings/en.json";

import "./cart.scss";

const Cart = ({ closeCart }) => {
  const cartInfo = useSelector(getCartInfo);

  const { cart } = contentString;
  const { totalItems, items } = cartInfo;

  const heading = (
    <div className="cart-heading">
      <p>{`${cart.heading}(${totalItems} ${
        totalItems > 1 ? cart.items : cart.item
      })`}</p>
      <div className="close" onClick={closeCart}>
        &times;
      </div>
    </div>
  );

  const promotionBanner = (
    <div className="promotion-banner">
      <img src="images/lowest-price.png" alt="lowest-price" />
      <p>{cart.promotion}</p>
    </div>
  );

  return (
    <div className="cart">
      <div className="cart-overlay"></div>
      <div className="cart-container">
        {heading}
        <div className="cart-items">
          <CartItems items={items} />
          {promotionBanner}
        </div>

        <CartCheckout
          displayTotalPrice={cartInfo.displayTotalPrice}
          closeCart={closeCart}
          isEmptyCart={!items.length}
        />
      </div>
    </div>
  );
};

Cart.propTypes = {
  closeCart: Proptypes.func.isRequired,
};
export default Cart;
