import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { Drawer } from "@material-ui/core";
import Checkout from "./Checkout";
import PersonIcon from '@material-ui/icons/Person';
import axios from 'axios';

function Header() {
  const [{ basket, user, drawer }, dispatch] = useStateValue();
  const [query, setQuery] = useState('');

  return (
    <div className="header">
      
      <Link to="/">
        <img
          src="logo.png"
          className="header__logo"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="search" placeholder="검색" 
        onChange={
          (e) => {
            {/*console.log(e.target.value);*/}
            setQuery(e.target.value);
          }
        }/>
        <SearchIcon className="header__searchIcon" 
        onClick={
          (e) => {
            console.log(query);
            axios.post('http://localhost:3001/api/' + query)
            .then(function(response){
              console.log(response.data);
            }).catch(err => {
              console.log("error");
              alert(err);
            });
          }
        } />
      </div>
      <div className="header__nav">
        <Link
          onClick={() => {
            dispatch({
              type: "SET_DRAWER",
              toggle: true,
            });
          }}
        >
          <div className="header__optionBasket">
            <FavoriteBorderIcon className="header__heart"  />
            <PersonIcon className="header__person"/>
            <span
              className="header__basketCount header__optionLineTwo"
              style={{ marginLeft: "5px" }}
            >
              {/*basket?.length*/}
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
