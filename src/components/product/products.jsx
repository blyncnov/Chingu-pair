import React from "react";

// Product Components
import Product from "./product";

// Products data
import MockedProducts from "././../../data/product";

// Products CSS
import "./Product.scss";

const Products = () => {
  return (
    <>
      <div className="Products__Container">
        <div className="Products__Header">
          <h3>All Our Products</h3>
        </div>
        <Product />
      </div>
    </>
  );
};

export default Products;
