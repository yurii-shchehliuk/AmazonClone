import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
function Header() {
  return (
    <div className="header">
      <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        class="header__logo"
        alt=""
      />

      <div className="header__search">
        <input
          name="header__searchInput"
          id=""
          class="search"
          type="text"
          value=""
        />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionOne">Hello Guest</span>
          <span className="header__optionTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">Orders</span>
        </div>{" "}
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
