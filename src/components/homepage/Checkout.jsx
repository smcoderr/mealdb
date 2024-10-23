import { useContext } from "react";
import { StateContext } from "../../context/AppProvider";

function Checkout() {
  const checkoutPackage = useContext(StateContext);
  console.log("cartThings", checkoutPackage);

  let checkoutItemsAre = checkoutPackage.cartItems.map((item) => {
    return (
      <div className="checkout-item">
        <div className="checkout-img">
          <img src={item.img} alt="" />
        </div>
        <div className="checkout-content">
          <h2>{item.title}</h2>
        </div>
      </div>
    );
  });

  return <section className="checkout-section">{checkoutItemsAre}</section>;
}

export default Checkout;
