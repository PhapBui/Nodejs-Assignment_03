import React from "react";
import Col from "react-bootstrap/esm/Col.js";
import Row from "react-bootstrap/esm/Row.js";
import FormCheckout from "../../../../components/Form/Checkout/FormCheckout.jsx";
import OrderDetails from "../../../../components/Cart/OrderDetails.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  cartActions,
  selectCartItems,
} from "../../../../features/cart/cartSlice.js";
import { selectCurrentUser } from "../../../../features/auth/authSlice.js";
import orderApi from "../../../../app/orderApi.js";
import { toast } from "react-toastify";
const BillingDetails = () => {
  const currentUser = useSelector(selectCurrentUser);
  const cartListItem = useSelector(selectCartItems);

  const dispatch = useDispatch();

  const completeOrder = async (userInfo) => {
    try {
      const res = await orderApi.completeOrder(userInfo);
      if (res.status === 1) {
        dispatch(cartActions.emptyCart());
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <Row>
      <Col>
        <FormCheckout currentUser={currentUser} handlerSubmit={completeOrder} />
      </Col>
      <Col>
        <OrderDetails itemList={cartListItem} />
      </Col>
    </Row>
  );
};

export default BillingDetails;
