import React from "react";
import useTshirts from "../../hooks/useTshirts";
import Cart from "../Cart/Cart";
import Tshirt from "../Tshirt/Tshirt";
import "./Home.css";

const HOme = () => {
  const [tShirts, setTshirts] = useTshirts();
  return (
    <div className="home-container">
      <div className="tshirt-container">
        {tShirts.map((tShirt) => (
          <Tshirt key={tShirt._id} tShirt={tShirt}></Tshirt>
        ))}
      </div>

      <div className="cart-container">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default HOme;
