import React from "react";
import Col from "react-bootstrap/esm/Col.js";
import Row from "react-bootstrap/esm/Row.js";
import FormCheckout from "../../../../components/Form/Checkout/FormCheckout.jsx";
import OrderDetails from "../../../../components/Cart/OrderDetails.jsx";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../../../features/cart/cartSlice.js";

const BillingDetails = () => {
  const cartListItem = useSelector(selectCartItems);
  return (
    <Row>
      <Col>
        <FormCheckout />
      </Col>
      <Col>
        <OrderDetails itemList={cartListItem} />
      </Col>
    </Row>
  );
};

export default BillingDetails;
