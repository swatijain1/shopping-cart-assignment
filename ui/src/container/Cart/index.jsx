import { CartItems, CartCheckout } from "../../components";
import contentString from "../../contentStrings/en.json";
import "./cart.scss";

const cartInfo = {
  totalItems: 7,
  totalPrice: 187,
  displayTotalPrice: "187.00",
  items: [
    {
      product: {
        name: "Fresho Kiwi - Green, 3 pcs",
        imageURL: "/images/products/fruit-n-veg/kiwi-green.jpg",
        description:
          "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
        price: 187,
        stock: 50,
        category: "5b6899953d1a866534f516e2",
        sku: "fnw-kiwi-3",
        id: "5b6c6a7f01a7c38429530883",
      },
      quantity: 1,
      totalItemPrice: 187,
    },
  ],
};
const Cart = () => {
  const { cart } = contentString;
  const { totalItems } = cartInfo;

  const heading = (
    <div className="cart-heading">
      <p>{`${cart.heading}(${totalItems} ${
        totalItems > 1 ? cart.items : cart.item
      })`}</p>
      <div className="close">&times;</div>
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
          <CartItems items={[]} />
        </div>
        {promotionBanner}
        <CartCheckout displayTotalPrice={cartInfo.displayTotalPrice} />
      </div>
    </div>
  );
};

export default Cart;
