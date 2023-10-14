import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../components/Layouts/DefaultLayout.jsx";
import Home from "../pages/Home/HomePage.jsx";
import LoginPage from "../pages/Auth/LoginPage.jsx";
import Cart from "../pages/Cart/CartPage.jsx";
import Shop from "../pages/Shop/ShopPage.jsx";
import CheckoutPage from "../pages/Cart/CheckoutPage.jsx";
import RegisterPage from "../pages/Auth/RegisterPage.jsx";
import AuthLayout from "../components/Layouts/AuthLayout.jsx";
import Detail from "../pages/Detail/DetailPage.jsx";
import ErrorPage from "../pages/Error.js";
import LogoutPage from "../pages/Auth/LogoutPage.jsx";
import OrdersPage from "../pages/Order/OrdersPage.jsx";
import OrderDetail from "../pages/Order/OrderDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
      {
        path: "detail/:productId",
        element: <Detail />,
      },
      {
        element: <AuthLayout />,
        path: "auth",
        children: [
          {
            path: "login",
            element: <LoginPage />,
          },
          {
            path: "register",
            element: <RegisterPage />,
          },
          {
            path: "logout",
            element: <LogoutPage />,
          },
          {
            path: "orders",
            element: <OrdersPage />,
          },
          {
            path: "orders/:orderId",
            element: <OrderDetail />,
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
