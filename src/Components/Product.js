import React from "react";
import "./Product.css";

function Product({ id, title="huinia", image, price, rating }) {
    
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} className="" alt="" />
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
