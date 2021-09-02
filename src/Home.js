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
            title="그레이 스키니"
            image={'./img/img1.jpg'}
          />
          <Product
            id="24242"
            title="그레이 데일리 슬랙스"
            image={'./img/img2.jpg'}
          />
          <Product
             id="24242"
             title="연청 데일리 청바지"
             image={'./img/img3.jpg'}
          />
          <Product
             id="24242"
             title="심플한 진청바지"
             image={'./img/img4.jpg'}
          />
      
        </div>

        <div className="home__row">
          <Product
             id="24242"
             title="블랙 트레이닝 팬츠"
             image={'./img/img5.jpg'}
          />
          <Product
             id="24242"
             title="아이보리 면바지"
             image={'./img/img6.jpg'}
          />
          <Product
             id="24242"
             title="블랙 부츠컷"
             image={'./img/img7.jpg'}
          />
          <Product
             id="24242"
             title="심플한 일자 연청바지"
             image={'./img/img8.jpg'}
          />
    
        </div>
        
        <div className="home__row">
          <Product
             id="24242"
             title="네이비 와이드 슬랙스"
             image={'./img/img9.jpg'}
          />
          <Product
             id="24242"
             title="일자 청바지"
             image={'./img/img10.jpg'}
          />
          <Product
             id="24242"
             title="와이드 진청바지"
             image={'./img/img11.jpg'}
          />
          <Product
             id="24242"
             title="아이보리 스키니"
             image={'./img/img12.jpg'}
          />
      
        </div>

        <div className="home__row">
          <Product
             id="24242"
             title="카키 조거 팬츠"
             image={'./img/img13.jpg'}
          />
          <Product
             id="24242"
             title="와이드 트레이닝 팬츠"
             image={'./img/img14.jpg'}
          />
          <Product
             id="24242"
             title="일자 연청바지"
             image={'./img/img15.jpg'}
          />
          <Product
             id="24242"
             title="롱 와이드 연청바지"
             image={'./img/img16.jpg'}
          />
      
        </div>
     
        <div className="home__row">
          <Product
             id="24242"
             title="편안한 아이보리 트레이닝 팬츠"
             image={'./img/img17.jpg'}
          />
          <Product
             id="24242"
             title="블랙 조거 팬츠"
             image={'./img/img18.jpg'}
          />
          <Product
             id="24242"
             title="와이드 연청 데님"
             image={'./img/img19.jpg'}
          />
          <Product
             id="24242"
             title="연노랑 와이드 슬랙스"
             image={'./img/img20.jpg'}
          />
      
        </div>
      </div>
    </div>
  );
};

export default Home;
