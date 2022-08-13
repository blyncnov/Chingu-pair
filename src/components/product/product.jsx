import React from "react";

// Product CSS
import "./Product.scss";

const Product = ({ product }) => {
  return (
    <div className="product__container">
      <div className="product__Image__container">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product__info__container">
        <h3>{product.name} </h3>
        <p className="product__info__title">{product.description}</p>
        <h2 className="product__info__price">
          <sup>$</sup>
          {product.price}.
          <sup>00</sup>
        </h2>
        <div className="product__btn">
          <button className="product__info__button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
