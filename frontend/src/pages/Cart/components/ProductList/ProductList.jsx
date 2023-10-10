import React from "react";
import Row from "react-bootstrap/esm/Row.js";
import Table from "react-bootstrap/Table";
import { currency } from "../../../../util/currency.js";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./ProductList.scss";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { cartActions } from "../../../../features/cart/cartSlice.js";
import { CiTrash } from "react-icons/ci";

const ProductList = ({ productList }) => {
  const dispatch = useDispatch();

  // inscrease quantity product arrow
  const handlerInscreaseQty = (quantity, product) => {
    const newQuantity = quantity + 1;
    const newProduct = {
      ...product,
      quantity: newQuantity,
    };

    dispatch(cartActions.updateItemQty(newProduct));
  };
  // decrease quantity product arrow
  const handlerDecreaseQty = (quantity, product) => {
    let newQuantity;
    if (quantity > 1) {
      newQuantity = quantity - 1;
    } else {
      newQuantity = 1;
    }
    const newProduct = {
      ...product,
      quantity: newQuantity,
    };
    dispatch(cartActions.updateItemQty(newProduct));
  };

  // handler change quantity product
  const onChangeQuatity = (e, product) => {
    const newProduct = {
      ...product,
      quantity: +e.target.value > 1 ? +e.target.value : 1,
    };
    dispatch(cartActions.updateItemQty(newProduct));
  };

  const handlerRemoveItem = (product) => {
    dispatch(cartActions.removeProductInCart(product));
  };

  return (
    <Row>
      <Table striped bordered hover size="sm">
        <thead className="cart-header">
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {productList && productList.length > 0 ? (
            productList.map((product) => (
              <tr key={product._id}>
                <td>
                  <img src={product.images[0]} alt={product.name} />
                </td>
                <td>{product.name} </td>
                <td>{currency(product.price)} </td>
                <td>
                  <div>
                    <span>
                      <BiSolidLeftArrow
                        onClick={() =>
                          handlerDecreaseQty(product.quantity, product)
                        }
                        className={product.quantity > 1 ? "" : "disable"}
                      />
                    </span>
                    <input
                      className="cart__form-input"
                      type="number"
                      id="qty"
                      name="qty"
                      value={product.quantity}
                      onChange={(e) => onChangeQuatity(e, product)}
                    />
                    <span>
                      <BiSolidRightArrow
                        onClick={() =>
                          handlerInscreaseQty(product.quantity, product)
                        }
                      />
                    </span>
                  </div>
                </td>
                <td>{currency(product.price * product.quantity)} </td>
                <td>
                  <button
                    onClick={() => handlerRemoveItem(product)}
                    className="remove-button"
                  >
                    <CiTrash />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr className="empty-card">
              <td colSpan={6}>
                <p className="message">
                  Dont have any product in cart back to
                  <Link to="/shop"> shopping</Link>
                </p>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Row>
  );
};

export default ProductList;
