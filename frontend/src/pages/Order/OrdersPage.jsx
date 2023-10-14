import React, { useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import orderApi from "../../app/orderApi";
import Authorization from "../../components/Auth/Authorization";
import { orderActions } from "../../features/order/orderSlice";
import { currency } from "../../util/currency";

const OrdersPage = () => {
  const dispatch = useDispatch();
  const orderList = useSelector((state) => state.userOrder.orderList);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const res = await orderApi.getAllCurrentOrder();

        if (res.status === 1) {
          dispatch(orderActions.getAllOrder(res.result));
          toast.success(res.message);
        } else {
          throw new Error(res.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    };

    fetchCurrentUser();
  }, [dispatch]);

  return (
    <Authorization>
      <Container style={{ padding: "30px 0" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id order</th>
              <th>ID USER</th>
              <th>NAME</th>
              <th>PHONE</th>
              <th>ADDRESS</th>
              <th>TOTAL</th>
              <th>DELIVERY</th>
              <th>STATUS</th>
              <th>DETAIL</th>
            </tr>
          </thead>
          <tbody>
            {orderList.length > 0 ? (
              orderList.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.userId._id}</td>
                  <td>{order.userId.fullName}</td>
                  <td>{order.phonenumber}</td>
                  <td>{order.deliveryAddress}</td>
                  <td>{currency(order.total)}</td>
                  <td>{order.delivery}</td>
                  <td>{order.status}</td>
                  <td>
                    <Button variant="outline-success">
                      <Link to={order._id}>
                        View <BsArrowRight />
                      </Link>
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="100%">
                  <h1>You dont have any order</h1>
                  <p>
                    Back to <Link to="/shop">shop</Link>
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </Authorization>
  );
};

export default OrdersPage;
