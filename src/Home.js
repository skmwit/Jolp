import { Drawer } from "@material-ui/core";
import React, { useState } from "react";
import Checkout from "./Checkout";
import "./Home.css";
import { sizing } from "@material-ui/core";
import Product from "./Product";

const Home = () => {
  const [drawer, setDrawer] = useState(false);

  return (
    <div className="home">
      <div className="home__container">
        
        <div className="home__row">
          <Product
            id="24242"
            title="포멀한 회색 청바지"
            image={'img11.jpg'}
          />
          <Product
            id="24242"
            title="아이보리 슬랙스"
            image={'img10.jpg'}
          />
          <Product
             id="24242"
             title="블랙 편한 바지"
             image={'img9.jpg'}
          />
          <Product
             id="24242"
             title="스키니 연청바지"
             image={'img8.jpg'}
          />
      
        </div>

        <div className="home__row">
          <Product
             id="24242"
             title="베이지 트레이닝 바지"
             image={'img7.jpg'}
          />
          <Product
             id="24242"
             title="편한 블랙 바지"
             image={'img6.jpg'}
          />
          <Product
             id="24242"
             title="편한 블랙 바지"
             image={'img5.jpg'}
          />
          <Product
             id="24242"
             title="포멀한 회색 청바지"
             image={'img4.jpg'}
          />
    
        </div>
        
        <div className="home__row">
          <Product
             id="24242"
             title="포멀한 회색 청바지"
             image={'img3.jpg'}
          />
          <Product
             id="24242"
             title="포멀한 회색 청바지"
             image={'img2.jpg'}
          />
          <Product
             id="24242"
             title="포멀한 회색 청바지"
             image={'img1.jpg'}
          />
          <Product
             id="24242"
             title="포멀한 회색 청바지"
             image={'img10.jpg'}
          />
      
        </div>
     
      </div>
    </div>
  );
};

export default Home;
