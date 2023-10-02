import React from "react";
import { currency } from "../../util/currency.js";
import "./OrderDetails.scss";
const OrderDetails = ({ itemList }) => {
  const total = itemList.reduce(
    (total, item) => total + +item.price * item.quantity,
    0
  );

  return (
    <div className="order-detail">
      <h3>Your Order</h3>
      <ul className="item-list">
        {itemList &&
          itemList.map((item) => (
            <li
              key={item._id.$oid}
              className="item"
            >
              <span className="item-name">{item.name}</span>
              <span className="price-qty">
                {currency(item.price)}x{item.quantity}
              </span>
            </li>
          ))}
      </ul>
      <div className="total-bill">
        <span className="label">Total:</span>
        <span className="value">{currency(total)}</span>
      </div>
    </div>
  );
};

export default OrderDetails;
