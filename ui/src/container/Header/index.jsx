import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Cart from "../Cart";
import { getCartInfo } from "../../reducer/cart";
import { NAV_INFO, PAGE_URL } from "../../constants";
import contentString from "../../contentStrings/en.json";

import "./header.scss";

const Header = () => {
  const { nav } = contentString;
  const { HOME, PRODUCTS, SIGN_IN, REGISTER } = NAV_INFO;
  const { totalItems } = useSelector(getCartInfo);

  const [isCartOpen, openCart] = useState(false);
  const list = [HOME, PRODUCTS].map((listItem) => (
    <li key={listItem.text}>
      <Link to={listItem.url} className="font-bold">
        {listItem.text}
      </Link>
    </li>
  ));

  const loginInfo = (
    <ul>
      {[SIGN_IN, REGISTER].map((listItem) => (
        <li key={listItem.text}>
          <Link to={listItem.url} className="font-bold">
            {listItem.text}
          </Link>
        </li>
      ))}
    </ul>
  );

  const cart = (
    <div className="cart">
      <img
        src="images/cart.svg"
        alt={nav.cartAltText}
        width={35}
        height={35}
        className="cart-icon"
        onClick={() => openCart(true)}
      />
      <span className="font-bold">{`${totalItems} items`}</span>
    </div>
  );

  return (
    <header>
      <nav>
        <div className="navbar-left">
          <Link to={PAGE_URL.HOME}>
            <img src="images/logo.png" alt={nav.logoAltText} />
          </Link>
          <ul>{list}</ul>
        </div>
        <div className="navbar-right">
          {loginInfo}
          {cart}
        </div>
      </nav>
      {isCartOpen && <Cart closeCart={() => openCart(false)} />}
    </header>
  );
};

export default Header;
