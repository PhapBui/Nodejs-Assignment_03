import { selectOrderList } from "@/redux/order/orderSlice";
import { currency } from "@/utils/currency";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const History = () => {
  const orders = useSelector(selectOrderList);
  return (
    <TableContainer component={Paper} sx={{ my: 2 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID User</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Delivery</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Detail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow
              key={order._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {order.userId._id}
              </TableCell>
              <TableCell align="center">{order.userId.fullName}</TableCell>
              <TableCell align="center">{order.phonenumber}</TableCell>
              <TableCell align="center">{order.deliveryAddress}</TableCell>
              <TableCell align="center">{currency(order.total)}</TableCell>
              <TableCell align="center">{order.delivery}</TableCell>
              <TableCell align="center">{order.status}</TableCell>
              <TableCell align="center">
                <Button variant="contained" color="success">
                  <Link
                    to={`/order/detail/${order._id}`}
                    style={{ color: "#fff" }}
                  >
                    View
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default History;
