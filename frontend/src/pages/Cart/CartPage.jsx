import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container.js";
import "./Cart.scss";
import Banner from "./components/Banner/Banner.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  useEffect(() => {
    if (!isLoggedIn) navigate("/login");
  }, [isLoggedIn, navigate]);

  return (
    <Container as="main">
      <Banner pagename={"Card"} breadcrumb={"Card"} />
      <h3 className="cart-title">Shopping Cart</h3>
      <MainContent />
    </Container>
  );
};

export default Cart;
