import React from "react";
import "./Tshirt.css";

const Tshirt = (props) => {
  const { handleAddToCart, tShirt } = props;
  const { name, picture, price } = props.tShirt;
  return (
    <div className="t-shirt">
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <button onClick={() => handleAddToCart(tShirt)}>Add To Cart</button>
    </div>
  );
};

export default Tshirt;
