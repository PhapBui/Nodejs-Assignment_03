import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Authorization from "../../components/Auth/Authorization";
import { orderActions } from "../../features/order/orderSlice";
import { currency } from "../../util/currency";

const OrderDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { orderId } = params;

  const order = useSelector((state) => state.userOrder.order);

  useEffect(() => {
    if (orderId) {
      dispatch(orderActions.getOrderById(orderId));
    }
  }, [dispatch, orderId]);

  return (
    <Authorization>
      <Container style={{ margin: "30px auto" }}>
        {order._id ? (
          <div style={{ padding: "30px", backgroundColor: "#fff" }}>
            <h1>INFORMATION ORDER</h1>
            <p>ID User: {order.userId._id}</p>
            <p>Full Name: {order.userId.fullName}</p>
            <p>Phone: {order.phonenumber}</p>
            <p>Address: {order.deliveryAddress}</p>
            <p>Total: {currency(order.total)}</p>
            <Table>
              <thead>
                <tr>
                  <th style={{ backgroundColor: "#f8f9fa" }}>ID PRODUCT</th>
                  <th style={{ backgroundColor: "#f8f9fa" }}>IMAGE</th>
                  <th style={{ backgroundColor: "#f8f9fa" }}>NAME</th>
                  <th style={{ backgroundColor: "#f8f9fa" }}>PRICE</th>
                  <th style={{ backgroundColor: "#f8f9fa" }}>COUNT</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((order) => (
                  <tr key={order.productId._id}>
                    <td>{order.productId._id}</td>
                    <td>
                      <img
                        src={order.productId.images[0]}
                        alt={order.productId.name}
                        style={{
                          width: "100px",
                        }}
                      />
                    </td>
                    <td>{order.productId.name}</td>
                    <td>{currency(order.productId.price)}</td>
                    <td>{order.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <h1>This order not exist</h1>
        )}
      </Container>
    </Authorization>
  );
};

export default OrderDetail;
