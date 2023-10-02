import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container.js";
import "./Cart.scss";
import Banner from "./components/Banner/Banner.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container as="main">
      <Banner
        pagename={"Card"}
        breadcrumb={"Card"}
      />
      <h3 className="cart-title">Shopping Cart</h3>
      <MainContent />
    </Container>
  );
};

export default Cart;
