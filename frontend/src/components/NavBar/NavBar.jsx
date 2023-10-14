import React, { useEffect, useMemo } from "react";
import Container from "react-bootstrap/Container";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { AiOutlineUser } from "react-icons/ai";
import { FaCartFlatbed } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import cartApi from "../../app/cartApi";
import {
  authActions,
  selectCurrentUser,
  selectIsLoggedIn,
} from "../../features/auth/authSlice.js";
import {
  cartActions,
  selectCartItems,
  selectCartSubTotal,
  selectCartToSave,
} from "../../features/cart/cartSlice";
import { countTotalItem } from "../../util/cart";
import Account from "../Auth/Account.jsx";
import "./NavBar.scss";

const NavBar = () => {
  const dispatch = useDispatch();
  const isLoggined = useSelector(selectIsLoggedIn);
  const currentUser = useSelector(selectCurrentUser);
  const listCart = useSelector(selectCartItems);
  const cartSave = useSelector(selectCartToSave);
  const subTotal = useSelector(selectCartSubTotal);

  const handlerLogout = () => {
    dispatch(authActions.logout());
  };

  // fetch cart
  useEffect(() => {
    if (!isLoggined) return;
    const fetchCart = async () => {
      try {
        const res = await cartApi.getCart();
        if (res.status === 0) throw new Error(res.message);
        const { items } = res.result;
        let cartItem = [];
        if (items.length > 0) {
          cartItem = items.map((item) => ({
            ...item.productId,
            quantity: item.quantity,
          }));
        }
        dispatch(cartActions.fetchCurrentUserCart(cartItem));
      } catch (error) {
        console.log(error);
      }
    };
    fetchCart();
  }, [dispatch, isLoggined]);

  const totalQuantity = useMemo(() => {
    return countTotalItem(listCart);
  }, [listCart]);

  // post cart
  useEffect(() => {
    if (!cartSave || !isLoggined) return;
    const timeDelay = setTimeout(() => {
      cartApi.postCart({ items: cartSave, subTotal });
    }, 1000);

    return () => clearTimeout(timeDelay);
  }, [cartSave, isLoggined, subTotal]);
  return (
    <Container as="header" className="header">
      <Row>
        <Col className="header__left">
          <NavLink className="header__item" to="/">
            Home
          </NavLink>
          <NavLink className="header__item" to="shop">
            Shop
          </NavLink>
        </Col>
        <Col className="header__center">
          <Link to="/" className="header__item logo">
            Boutique
          </Link>
        </Col>
        <Col className="header__right">
          {isLoggined && (
            <NavLink className="header__item" to="auth/orders">
              Your Orders
            </NavLink>
          )}
          <NavLink className="header__item" to="cart">
            <FaCartFlatbed />
            Cart
            <span className="cart__quantity">{totalQuantity}</span>
          </NavLink>

          <NavLink
            className="header__item"
            onClick={handlerLogout}
            to={`/auth/${isLoggined ? "logout" : "login"}`}
          >
            <AiOutlineUser />
            {isLoggined ? <Account currentUser={currentUser} /> : "Login"}
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
};

export default React.memo(NavBar);
