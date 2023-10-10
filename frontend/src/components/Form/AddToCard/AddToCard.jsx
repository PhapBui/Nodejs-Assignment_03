import React, { useState } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

import "./AddToCard.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../features/auth/authSlice";

const AddToCard = ({ product, onSubmit }) => {
  const [quantity, setQuantity] = useState(1);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  const onChangeQuatity = (e) => {
    setQuantity(e.target.value);
  };

  // handler inscrease quantity
  const handlerInscreaseQty = (e) => {
    setQuantity((prev) => prev + 1);
  };

  // handler descrease quantity
  const handlerDecreaseQty = (e) => {
    setQuantity((prev) => {
      if (prev === 0) {
        return prev;
      } else {
        return prev - 1;
      }
    });
  };

  // Handller add to cart
  const handlerAddToCart = (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      return navigate("/login");
    }

    const newProduct = {
      ...product,
      quantity,
    };
    onSubmit(newProduct);
    setQuantity(1);
  };

  return (
    <form action="" className="cart__form">
      <label htmlFor="qty" className="cart__form-label">
        Quantity
        <span>
          <BiSolidLeftArrow
            onClick={handlerDecreaseQty}
            style={{ marginLeft: 40 }}
          />
        </span>
        <input
          className="cart__form-input"
          type="number"
          id="qty"
          name="qty"
          value={quantity}
          onChange={onChangeQuatity}
        />
        <span>
          <BiSolidRightArrow
            onClick={handlerInscreaseQty}
            style={{ marginRight: 20 }}
          />
        </span>
      </label>

      <button className="cart__form-submit" onClick={handlerAddToCart}>
        Add to Cart
      </button>
    </form>
  );
};

export default AddToCard;
