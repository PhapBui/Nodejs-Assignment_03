import React, { useEffect, useMemo } from "react";
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { FaCartFlatbed } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import "./NavBar.scss";
import {
  authActions,
  selectCurrentUser,
  selectIsLoggedIn,
} from "../../features/auth/authSlice.js";
import Account from "../Auth/Account.jsx";
import { countTotalItem } from "../../util/cart";
import {
  cartActions,
  selectCartItems,
  selectCartToSave,
} from "../../features/cart/cartSlice";
import cartApi from "../../app/cartApi";

const NavBar = () => {
  const dispatch = useDispatch();
  const isLoggined = useSelector(selectIsLoggedIn);
  const currentUser = useSelector(selectCurrentUser);
  const listCart = useSelector(selectCartItems);
  const cartSave = useSelector(selectCartToSave);

  const navigate = useNavigate();

  const handlerLogout = () => {
    dispatch(authActions.logout());
  };

  const handlerNavigate = (page) => {
    navigate(page);
  };

  useEffect(() => {
    if (!isLoggined) return;
    const fetchCart = async () => {
      try {
        const res = await cartApi.getCart();
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

  useEffect(() => {
    if (!cartSave || !isLoggined) return;
    const timeDelay = setTimeout(() => {
      cartApi.postCart(cartSave);
    }, 1000);

    return () => clearTimeout(timeDelay);
  }, [cartSave, isLoggined]);
  return (
    <Container as="header" className="header">
      <Row>
        <Col className="header__left">
          <NavLink
            className="header__item"
            to="/"
            onClick={() => handlerNavigate("/")}
          >
            Home
          </NavLink>
          <NavLink
            className="header__item"
            to="shop"
            onClick={() => handlerNavigate("/shop")}
          >
            Shop
          </NavLink>
        </Col>
        <Col className="header__center">
          <Link
            to="/"
            className="header__item logo"
            onClick={() => handlerNavigate("/")}
          >
            Boutique
          </Link>
        </Col>
        <Col className="header__right">
          <NavLink
            className="header__item"
            to="cart"
            onClick={() => handlerNavigate("/cart")}
          >
            <FaCartFlatbed />
            Cart
            <span className="cart__quantity">{totalQuantity}</span>
          </NavLink>
          <NavLink className="header__item" onClick={handlerLogout} to="login">
            <AiOutlineUser />
            {isLoggined ? <Account currentUser={currentUser} /> : "Login"}
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
};

export default NavBar;
