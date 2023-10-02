import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col.js";
import Row from "react-bootstrap/esm/Row.js";
import { AiOutlineGift } from "react-icons/ai";
import { currency, currencyWithDiscount } from "../../../../util/currency.js";

import "./CartDetail.scss";

const CartDetail = ({ subTotal }) => {
  const [discount, setDiscount] = useState();
  const [price, setPrice] = useState(() => subTotal);

  const handlerApplyCoupon = (e) => {
    console.log(price);
  };
  const handlerCoupon = (e) => {
    if (+e.target.value > 0 && +e.target.value < 100) {
      setDiscount(e.target.value);
    }
    if (+e.target.value <= 0) {
      setDiscount(0);
    }
    if (+e.target.value >= 100) {
      setDiscount(100);
    }
  };
  useEffect(() => {
    setPrice(() => currencyWithDiscount(subTotal, discount || 0));
  }, [discount, subTotal]);
  return (
    <Row className="cart-total">
      <Col>
        <h3>Cart Total</h3>
        <div className="price subtotal">
          <span className="label">Subtotal:</span>
          <span className="value">{currency(subTotal)}</span>
        </div>
        <div className="price total">
          <span className="label">Total:</span>
          <span className="value">{price}</span>
        </div>
        <div className="coupon">
          <input
            type="text"
            placeholder="Enter your coupon"
            value={discount}
            onChange={handlerCoupon}
            className="enter-coupon"
          />
          <button
            className="submit-coupon"
            onClick={handlerApplyCoupon}
          >
            <AiOutlineGift /> Apply Coupon
          </button>
        </div>
      </Col>
    </Row>
  );
};

export default CartDetail;
