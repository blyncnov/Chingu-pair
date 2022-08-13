import React from "react";

// Navigation CSS
import "./Navigation.scss";

// Icons
import { HiOutlineShoppingCart } from "react-icons/hi";

const Navigation = () => {
  return (
    <div>
      <div className="Navigation__Container">
        <div className="Layout__Grid">
          <div className="Navigation__Grid">
            <div className="Chingu__Logo">
              <h2>Chingu-cart</h2>
            </div>
            <div className="Chingu__Navigation__Item">
              <h4>
                <HiOutlineShoppingCart style={{ fontSize: "1.5em" }} />
              </h4>
              <span>1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
