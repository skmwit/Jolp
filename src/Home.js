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
            image={'11000.jpg'}
          />
          <Product
            id="24242"
            title="포멀한 회색 청바지"
            image={'11000.jpg'}
          />
          <Product
             id="24242"
             title="포멀한 회색 청바지"
             image={'11000.jpg'}
          />
          <Product
             id="24242"
             title="포멀한 회색 청바지"
             image={'11000.jpg'}
          />
      
        </div>

        <div className="home__row">
          <Product
             id="24242"
             title="포멀한 회색 청바지"
             image={'11000.jpg'}
          />
          <Product
             id="24242"
             title="포멀한 회색 청바지"
             image={'11000.jpg'}
          />
          <Product
             id="24242"
             title="포멀한 회색 청바지"
             image={'11000.jpg'}
          />
          <Product
             id="24242"
             title="포멀한 회색 청바지"
             image={'11000.jpg'}
          />
    
        </div>
        
        <div className="home__row">
          <Product
             id="24242"
             title="포멀한 회색 청바지"
             image={'11000.jpg'}
          />
          <Product
             id="24242"
             title="포멀한 회색 청바지"
             image={'11000.jpg'}
          />
          <Product
             id="24242"
             title="포멀한 회색 청바지"
             image={'11000.jpg'}
          />
          <Product
             id="24242"
             title="포멀한 회색 청바지"
             image={'11000.jpg'}
          />
      
        </div>
     
      </div>
    </div>
  );
};

export default Home;
