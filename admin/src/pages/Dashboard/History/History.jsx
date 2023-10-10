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

import { Link } from "react-router-dom";

function createData(id, name, phone, address, total, delivery, status) {
  return { id, name, phone, address, total, delivery, status };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, "Pending", "Ordered"),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, "Pending", "Ordered"),
  createData("Eclair", 262, 16.0, 24, 6.0, "Pending", "Ordered"),
  createData("Cupcake", 305, 3.7, 67, 4.3, "Pending", "Ordered"),
  createData("Gingerbread", 356, 16.0, 49, 3.9, "Pending", "Ordered"),
];

const History = () => {
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
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.phone}</TableCell>
              <TableCell align="center">{row.address}</TableCell>
              <TableCell align="center">{row.total}</TableCell>
              <TableCell align="center">{row.delivery}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">
                <Button variant="contained" color="success">
                  <Link
                    to={`/order/detail/${row.id}`}
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
