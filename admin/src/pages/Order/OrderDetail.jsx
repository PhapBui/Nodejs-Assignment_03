import { orderActions, selectOrder } from "@/redux/order/orderSlice";
import { currency } from "@/utils/currency";
import { replaceImgUrl } from "@/utils/image";
import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const OrderDetail = () => {
  const params = useParams();
  const orderId = params.orderId;

  const dispatch = useDispatch();
  const order = useSelector(selectOrder);

  useEffect(() => {
    if (orderId) {
      dispatch(orderActions.getOrderById(orderId));
    }
  }, [orderId, dispatch]);

  return (
    <Container>
      {order._id ? (
        <TableContainer component={Paper} sx={{ my: 2 }}>
          <Box py={1} px={2}>
            <h1>INFORMATION ORDER</h1>
            <p>ID User: {order.userId._id}</p>
            <p>Full Name: {order.userId.fullName}</p>
            <p>Phone: {order.phonenumber}</p>
            <p>Address: {order.deliveryAddress}</p>
            <p>Total: {currency(order.total)}</p>
          </Box>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID PRODUCT </TableCell>
                <TableCell align="center">IMAGE</TableCell>
                <TableCell align="center">NAME</TableCell>
                <TableCell align="center">PRICE</TableCell>
                <TableCell align="center">COUNT</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {order.items.map((order) => (
                <TableRow
                  key={order.productId._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {order.productId._id}
                  </TableCell>
                  <TableCell align="center">
                    {
                      <img
                        src={replaceImgUrl(order.productId.images[0])}
                        alt={order.productId.name}
                        width="100px"
                      />
                    }
                  </TableCell>
                  <TableCell align="center">{order.productId.name}</TableCell>
                  <TableCell align="center">
                    {currency(order.productId.price)}
                  </TableCell>

                  <TableCell align="center">{order.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <>
          <h2>You not order</h2>
        </>
      )}
    </Container>
  );
};

export default OrderDetail;
