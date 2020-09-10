import React from "react";
import "./Product.css";
import { useStateValue } from "./States/StateProvider";

function Product({ id, title = "huinia", image, price, rating }) {
  //dispatch - how to manipulate data
  const [{basket}, dispatch] = useStateValue();
  console.log("the basket", basket);
  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
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

      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
