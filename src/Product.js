import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { HearingTwoTone } from "@material-ui/icons";

function Product({ title, image, id, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
      },
    });
    // toast("Added item to basket!");
  };



  return (
    <div className="product">
      <img src={image} alt="" />
        <FavoriteBorderIcon className='heart' onClick={()=>{addToBasket()}}/>
      <div className="product__info">
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Product;
