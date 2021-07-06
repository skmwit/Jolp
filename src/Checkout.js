import React, { Fragment } from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./Delete_heart";
import { Link, useHistory } from "react-router-dom";

import FlipMove from "react-flip-move";

function Checkout() {
  const history = useHistory();
  const [{ basket, user, drawer }, dispatch] = useStateValue();

  return (
    <Fragment>
      <Link to="/">
        <div className="checkout__center">
          <img
            src="logo.png"
            style={{ height: 70, marginTop: 20 }}
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
          <div>
            <h2 className="checkout__title">찜</h2>
          </div>
          <FinalProducts />
        </div>
      </div>
    </Fragment>
  );
}

const FinalProducts = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <Fragment>
      {basket.map((item) => (
        <CheckoutProduct
          id={item.id}
          price={item.price}
          rating={item.rating}
          image={item.image}
          title={item.title}
        />
      ))}
    </Fragment>
  );
};

export default Checkout;
