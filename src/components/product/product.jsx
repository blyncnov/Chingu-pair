import React from "react";
import { ADD__TO__CART } from "../../store/actions/action";

import { useDispatch, useSelector } from "react-redux";

// Products data
import MockedProducts from "././../../data/product";

// Product CSS
import "./Product.scss";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const Cart = useSelector((state) => state.cartReducer.cart);

  const addToCart = (id) => {
    const isItemExistInCart = Cart.find((item) => item.id === id);

    if (isItemExistInCart) {
      return alert("Item Already Exists in Cart");
    } else {
      const Item = MockedProducts.find((item) => item.id === id);
      dispatch({
        type: ADD__TO__CART,
        payload: { Qty: 1, ...Item },
      });
    }
  };

  return (
    <div className="product__container">
      <div className="product__Image__container">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product__info__container">
        <h3>{product.name} </h3>
        <p className="product__info__title">
          {product.description.slice(0, 100) + "..."}
        </p>
        <h2 className="product__info__price">
          <sup>$</sup>
          {product.price}
          <sup>.00</sup>
        </h2>
        <div className="product__btn">
          <button
            onClick={() => addToCart(product.id)}
            className="product__info__button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
