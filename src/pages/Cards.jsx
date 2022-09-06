import React, { useState, useContext } from "react";
import Cart from "../components/cart/Cart";
import Context from "../context";

const Cards = () => {
  const cards  = useContext(Context);

  return (
    <div className='carts'>
      {cards.map((card) => {
        return <Cart key={card.date} card={card} />;
      })}
    </div>
  );
};

export default Cards;
