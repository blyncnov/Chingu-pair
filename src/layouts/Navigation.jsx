import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

// Navigation CSS
import "./Navigation.scss";

// Icons
import { HiOutlineShoppingCart } from "react-icons/hi";

const Navigation = () => {
  const CartLength = useSelector((state) => state.cartReducer.cart);

  console.log(CartLength);
  return (
    <div>
      <div className="Navigation__Container">
        <div className="Layout__Grid">
          <div className="Navigation__Grid">
            <div className="Chingu__Logo">
              <Link to="/">
                <h2>Chingu-cart</h2>
              </Link>
            </div>
            <div className="Chingu__Navigation__Item">
              <Link to="/cart">
                <h4>
                  <HiOutlineShoppingCart style={{ fontSize: "1.5em" }} />
                </h4>
                <span>{CartLength.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
