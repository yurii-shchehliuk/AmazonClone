import React, {useState} from "react";
import "./../style/Home.css";
import Product from "./Product";
function Home() {
  let [state, setState] = useState({
    "zank": "huin"
});
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
        <div className="home__row">
          {/* Product */}
          <Product  title={state.zank} price={23.22} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"/>
          {/* Product */}
          <Product />
        </div>
        <div className="home__row">
        <Product  title="Marodi" price={2} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"/>
        <Product  title="Pizdunok" price={4} rating={3} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"/>
        <Product  title="New book" price={25} rating={1} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"/>
        </div>
        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
