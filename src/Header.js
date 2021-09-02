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
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';



function Header() {

  const [{ basket, user, drawer }, dispatch] = useStateValue();
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [keys, setKeys] = useState([]);
  const [loading, setLoading] = useState(false);


  const modal_open = () => {
    setIsOpen(true);
  };

  const modal_close = () => {
    setIsOpen(false);
  };

  const post_query = (e) => {
      // e.preventDefault()
      // 문장 유사도 결과를 담을 Map
      setLoading(true)
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
          // setResult({...result, [content.data[i].image_id] :content.data[i].caption})
        }
        // result 맵의 key : image_id
        console.log(result.keys())
        // result 맵의 value : caption
        console.log(result.values())

        var key = Array.from(result.keys());
        setKeys(key);  // setting the state   
        var value = Array.from(result.values());   

      }).catch(err => {
        console.log("error");
        alert(err);
      })
      .finally(() => setLoading(false));
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
        <input className="header__searchInput" type="search" placeholder="검색"
        onChange={
          (e) => {
            {/*console.log(e.target.value);*/}
            setQuery(e.target.value);
          }
        }/>
        <SearchIcon className="header__searchIcon" 
        onClick={(e)=> { post_query(); modal_open();}}/>
        
        {loading && 
          <Modal 
            open={isOpen}
            onClose={modal_close}
            closeAfterTransition
            onBackdropClick={modal_close}
            BackdropComponent={Backdrop}
            BackdropProps={{timeout: 500,}} >
        
      <Fade in={isOpen}>
            <div className='modal_frame'>
              <CircularProgress className="spinner" />
            </div>
       </Fade>
       </Modal>
          
          }
        
        {!loading && 
         <Modal 
            open={isOpen}
            onClose={modal_close}
            closeAfterTransition
            onBackdropClick={modal_close}
            BackdropComponent={Backdrop}
            BackdropProps={{timeout: 500,}} >
        
      <Fade in={isOpen}>
            <div className='modal_frame'>
              <img src={'../../img/img'+keys[0]+'.jpg'} className='modal_img' />
              <img src={'../../img/img'+keys[1]+'.jpg'} className='modal_img' />
              <img src={'../../img/img'+keys[2]+'.jpg'} className='modal_img' />
            </div>
       </Fade>
       </Modal>
      }
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