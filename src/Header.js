import React, {useState} from "react";
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
            // 문장 유사도 결과를 담을 Map
            var result = new Map()
            console.log(query);
            // node 서버로 입력 query 보내기
            axios.post('http://localhost:3001/api/' + query)
            .then(function(response){
              // response JSON stringify -> parse
              var content=JSON.parse(JSON.stringify(response)).data
              // 결과의 image_id와 caption result 배열에 담기 
              for (var i=0;i<content.data.length;i++){
                //console.log(content.data[i].image_id)
                result.set(content.data[i].image_id, content.data[i].caption)
              }
              // result 맵의 key : image_id
              console.log(result.keys())
              // result 맵의 value : caption
              console.log(result.values())

            }).catch(err => {
              console.log("error");
              alert(err);
            });
          }
        }/>
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