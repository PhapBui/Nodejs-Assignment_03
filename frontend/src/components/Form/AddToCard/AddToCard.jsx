import React, { useState } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

import "./AddToCard.scss";

const AddToCard = ({ product, onSubmit }) => {
  const [quantity, setQuantity] = useState(1);

  const onChangeQuatity = (e) => {
    setQuantity(e.target.value);
  };

  const handlerInscreaseQty = (e) => {
    setQuantity((prev) => prev + 1);
  };

  const handlerDecreaseQty = (e) => {
    setQuantity((prev) => {
      if (prev === 0) {
        return prev;
      } else {
        return prev - 1;
      }
    });
  };
  const handlerAddToCart = (e) => {
    e.preventDefault();
    const newProduct = {
      ...product,
      quantity,
    };
    onSubmit(newProduct);
  };
  return (
    <form
      action=""
      className="cart__form"
    >
      <label
        htmlFor="qty"
        className="cart__form-label"
      >
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

      <button
        className="cart__form-submit"
        onClick={handlerAddToCart}
      >
        Add to Cart
      </button>
    </form>
  );
};

export default AddToCard;
