import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  productActions,
  selectProductList,
} from "../../redux/product/productSlice";
import { currency } from "../../utils/currency";

const ProductList = () => {
  // init page values
  const [enteredKeyword, setEnteredKeyword] = useState("");
  const [productList, setProductList] = useState([]);

  const dispatch = useDispatch();
  // get all Products from store
  const fullProductList = useSelector(selectProductList);

  // handle key work
  const handlerOnchangeSearchValue = (e) => {
    setEnteredKeyword(e.target.value.trim().toLowerCase());
  };

  // dispatch action->fetch data from backend
  useEffect(() => {
    dispatch(productActions.fetchAllProductStart());
  }, [dispatch]);

  // filter product
  useEffect(() => {
    const timeSearchDelay = setTimeout(() => {
      if (!enteredKeyword) {
        setProductList(fullProductList);
      } else {
        setProductList(() =>
          fullProductList.filter((product) =>
            product.name.toLowerCase().includes(enteredKeyword)
          )
        );
      }
    }, 500);
    return () => clearTimeout(timeSearchDelay);
  }, [enteredKeyword, fullProductList]);

  const handlerRemoveProduct = (productId) => {
    dispatch(productActions.removeProductByIdStart(productId));
  };

  return (
    <Box component={Paper}>
      <Typography>Product</Typography>
      <TextField
        placeholder="EnterSearch"
        value={enteredKeyword}
        onChange={handlerOnchangeSearchValue}
      />

      <TableContainer component={Paper} sx={{ my: 2 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID </TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productList.length > 0 ? (
              productList.map((product) => (
                <TableRow
                  key={product._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product._id}
                  </TableCell>
                  <TableCell align="center">{product.name}</TableCell>
                  <TableCell align="center">
                    {currency(product.price)}
                  </TableCell>
                  <TableCell align="center">
                    {
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        width="100px"
                      />
                    }
                  </TableCell>
                  <TableCell align="center">{product.category}</TableCell>

                  <TableCell align="center">
                    <Button variant="contained" color="success">
                      <Link
                        to={`/add/product?productId=${product._id}`}
                        style={{ color: "#fff" }}
                      >
                        Update
                      </Link>
                    </Button>
                    <Button
                      variant="contained"
                      color="warning"
                      onClick={() => handlerRemoveProduct(product._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell>
                  <h3>Not Found</h3>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProductList;
