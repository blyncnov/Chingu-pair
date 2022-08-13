import React from "react";

import { useSelector } from "react-redux";

const Cart = () => {
  const Cart = useSelector((state) => state.cartReducer.cart);

  const TotalAmout = Cart.reduce((total, item) => {
    return (total += item.price);
  }, 0);

  return (
    <>
      <br />
      <div className="Layout__Grid">
        <h4>Cart (0)</h4>

        <br />
        <div className="Layout__Grid__Cart">
          {Cart.map((product) => {
            return (
              <div key={product.id} className="Layout__Grid__Item">
                <div className="Layout__Grid__Item__Image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="Layout__Grid__Item__Info">
                  <h3>{product.name}</h3>
                  <h2>${product.price}</h2>
                </div>
              </div>
            );
          })}
        </div>
        <br />
        <h3>Total Price: {TotalAmout}</h3>
      </div>
    </>
  );
};

export default Cart;
