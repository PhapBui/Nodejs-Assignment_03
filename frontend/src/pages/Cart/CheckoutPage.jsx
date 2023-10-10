import Container from "react-bootstrap/esm/Container.js";
import Banner from "./components/Banner/Banner.jsx";
import BillingDetails from "./components/BillingDetails/BillingDetails.jsx";

import "./CheckoutPage.scss";
import { useSelector } from "react-redux";
import { selectCountItemsInCart } from "../../features/cart/cartSlice.js";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const CheckoutPage = () => {
  const quantity = useSelector(selectCountItemsInCart);
  return (
    <Container as="main">
      <Banner pagename={"Checkout"} breadcrumb={"Home / Card / Checkout"} />
      {quantity ? (
        <>
          <h3 className="cart-title">Billing Details</h3>
          <BillingDetails />
        </>
      ) : (
        <>
          Your cart is empty
          <Link to="/shop">
            <BsArrowLeft />
            <span>Continue Shopping</span>
          </Link>
        </>
      )}
    </Container>
  );
};

export default CheckoutPage;
