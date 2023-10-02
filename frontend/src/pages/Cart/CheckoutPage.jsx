import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container.js";
import Banner from "./components/Banner/Banner.jsx";
import BillingDetails from "./components/BillingDetails/BillingDetails.jsx";

import "./CheckoutPage.scss";

const CheckoutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container as="main">
      <Banner
        pagename={"Checkout"}
        breadcrumb={"Home / Card / Checkout"}
      />
      <h3 className="cart-title">Billing Details</h3>
      <BillingDetails />
    </Container>
  );
};

export default CheckoutPage;
