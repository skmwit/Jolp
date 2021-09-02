import React, { useState } from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  const [drawer, setDrawer] = useState(false);

  return (
    <div className="home">
      <div className="home__container">
        
        <div className="home__row">
          <Product
            id="24242"
            title="데일리 중청 바지"
            image={'./img/img11.jpg'}
          />
          <Product
            id="24242"
            title="찢어진 연청 바지"
            image={'./img/img10.jpg'}
          />
          <Product
             id="24242"
             title="편한 블랙 슬랙스"
             image={'./img/img9.jpg'}
          />
          <Product
             id="24242"
             title="세미와이드 연청바지"
             image={'./img/img8.jpg'}
          />
      
        </div>

        <div className="home__row">
          <Product
             id="24242"
             title="부츠컷 블랙 바지"
             image={'./img/img7.jpg'}
          />
          <Product
             id="24242"
             title="아이보리 슬랙스"
             image={'./img/img6.jpg'}
          />
          <Product
             id="24242"
             title="편한 블랙 슬랙스"
             image={'./img/img5.jpg'}
          />
          <Product
             id="24242"
             title="편한 와이드 연청"
             image={'./img/img4.jpg'}
          />
    
        </div>
        
        <div className="home__row">
          <Product
             id="24242"
             title="롱 데일리 연청"
             image={'./img/img3.jpg'}
          />
          <Product
             id="24242"
             title="롱 그레이 슬랙스"
             image={'./img/img2.jpg'}
          />
          <Product
             id="24242"
             title="그레이 스키니"
             image={'./img/img1.jpg'}
          />
          <Product
             id="24242"
             title="찢어진 와이드 연청"
             image={'./img/img10.jpg'}
          />
      
        </div>
     
      </div>
    </div>
  );
};

export default Home;
