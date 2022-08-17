import React from "react";

import { useSelector } from "react-redux";

import './cart-page.scss'

const Cart = () => {
  const Cart = useSelector((state) => state.cartReducer.cart);

  const TotalAmount = Cart.reduce((total, item) => {
    return (total += item.price);
  }, 0);


  return (
    <div className="Cart__Page">
      <br />
        <h4 className="Cart__Count">Cart ({Cart.length})</h4>
      <div className="Layout__Grid">

        <br />
        <div className="Layout__Grid__Cart">
          {/* // if cart array is not empty render cart */}
          {Cart.length !== 0 ? 
            Cart.map((product) => {
            return (
              <div key={product.id} className="Layout__Grid__Item">
                <div className="Layout__Grid__Item__Image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="Layout__Grid__Item__Info">
                  <h3>{product.name}</h3>
                  <h2>${product.price}</h2>
                  <h4 className="Remove__Product">REMOVE</h4>
                </div>
                <div className="Layout__Grid__Item__Quantity">
                  <h2>
                    <span className="Reduce__Quantity">-</span>
                    <span className="Quantity">1</span>
                    <span className="Increase__Quantity">+</span>
                  </h2>
                </div>
              </div>
            );
          }) : <h4>Your cart is empty</h4>}
        </div>
        <br />
        <div className="Cart__Summary__Container">
          <h2>Cart Summary</h2>
          <h3 className="Total__Amount">Total Price: {TotalAmount}</h3>

        </div>
      </div>
    </div>
  );
};

export default Cart;
