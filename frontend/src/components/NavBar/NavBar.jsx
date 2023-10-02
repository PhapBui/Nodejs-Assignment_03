import React from "react";
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
} from "../../features/auth/loginSlice.js";
import Account from "../Auth/Account.jsx";

const NavBar = () => {
  const dispatch = useDispatch();
  const isLoggined = useSelector(selectIsLoggedIn);
  const currentUser = useSelector(selectCurrentUser);

  const navigate = useNavigate();

  const handlerLogout = () => {
    dispatch(authActions.logout());
  };

  const handlerNavigate = (page) => {
    navigate(page);
  };

  return (
    <Container
      as="header"
      className="header"
    >
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
          </NavLink>
          <NavLink
            className="header__item"
            onClick={handlerLogout}
            to="login"
          >
            <AiOutlineUser />
            {isLoggined ? <Account currentUser={currentUser} /> : "Login"}
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
};

export default NavBar;
