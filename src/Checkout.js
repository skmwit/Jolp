import React, { Fragment } from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./Delete_heart";
import { Link, useHistory } from "react-router-dom";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlipMove from "react-flip-move";


function Checkout() { //찜 기능 
  const history = useHistory();
  const [{ basket, user, drawer }, dispatch] = useStateValue();

  return (
    <div className="checkout__width">
    <Fragment>
      <Link to="/">
        <div>
          <FavoriteIcon 
          className="checkout__heart"
            onClick={() =>
              dispatch({
                type: "SET_DRAWER",
                toggle: false,
              })
            }
          />
        </div>
      </Link>
      <div className="checkout">
        <div className="checkout__left">
          {/* <div className="checkout__title"></div> */}
          <FinalProducts/>
        </div>
      </div>
    </Fragment>
    </div>
  );
}

const FinalProducts = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <Fragment>
      {basket.map((item) => (
        <CheckoutProduct 
          id={item.id}
          image={item.image}
          title={item.title}
        />
      ))}
    </Fragment>
  );
};

export default Checkout;
