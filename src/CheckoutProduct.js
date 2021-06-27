import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
    toast("Item removed from basket!");
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__title">{title}
        <button onClick={removeFromBasket}>찜에서 삭제</button>
      </div>

      <img src={image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <button onClick={removeFromBasket}>찜에서 삭제</button>
      </div>

    </div>
  );
}

export default CheckoutProduct;
