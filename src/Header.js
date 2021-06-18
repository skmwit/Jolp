import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { Drawer } from "@material-ui/core";
import Checkout from "./Checkout";

function Header() {
  const [{ basket, user, drawer }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          src="logo.png"
          className="header__logo"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">
              {user ? user.email : "Hello Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
    
        <Link
          onClick={() => {
            dispatch({
              type: "SET_DRAWER",
              toggle: true,
            });
          }}
        >
          <div className="header__optionBasket">
            <FavoriteBorderIcon />
            <span
              className="header__basketCount header__optionLineTwo"
              style={{ marginLeft: "5px" }}
            >
              {basket?.length}
            </span>
          </div>
        </Link>
        <Drawer open={drawer} style={{ width: "50%" }}>
          <Checkout />
        </Drawer>
      </div>
    </div>
  );
}

export default Header;
