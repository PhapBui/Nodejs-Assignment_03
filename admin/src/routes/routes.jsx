import Authorization from "@/components/authorization/Authorization";
import MainLayout from "@/layouts/MainLayout";
import AddEditPage from "@/pages/AddEdit/AddEditPage";
import AddNewUser from "@/pages/Auth/AddNewUser";
import LoginPage from "@/pages/Auth/LoginPage";
import LogoutPage from "@/pages/Auth/LogoutPage";
import AddEditCategory from "@/pages/Category/AddEditCategory";
import Dashboard from "@/pages/Dashboard";
import Orders from "@/pages/Order/Orders";
import AddEditProduct from "@/pages/Product/AddNewProduct";
import ProductList from "@/pages/Product/ProductList";
import AdminChat from "@/pages/Services/LiveChat/AdminChat";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>Page not found</h1>,
    children: [
      {
        element: <Authorization roles={["Admin"]} />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },

          {
            path: "products",
            element: <ProductList />,
          },
          {
            path: "orders",
            element: <Orders />,
          },
          {
            path: "add",
            element: <AddEditPage />,
            children: [
              { path: "user", element: <AddNewUser /> },
              { path: "product", element: <AddEditProduct /> },
              { path: "category", element: <AddEditCategory /> },
            ],
          },
        ],
      },
      {
        path: "logout",
        element: <LogoutPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "service",
    element: <Authorization roles={["Sale", "Admin"]} />,
    children: [
      {
        path: "chat",
        element: <AdminChat />,
      },
    ],
  },
]);

export default router;
