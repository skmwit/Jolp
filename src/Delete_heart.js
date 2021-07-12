import React from "react";
import "./Delete_heart.css";
import { useStateValue } from "./StateProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FavoriteIcon from '@material-ui/icons/Favorite';

function CheckoutProduct({ id, image, title}) { //하트 누르면 지워짐
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
    // toast("Item removed from basket!");
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <FavoriteIcon className="checkoutProduct__heart" onClick={removeFromBasket}></FavoriteIcon>
        <p className="checkoutProduct__title">{title}</p>
      </div>
    </div>
  );
}

export default CheckoutProduct;
