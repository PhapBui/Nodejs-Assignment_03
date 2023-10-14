import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import AddEditPage from "../pages/AddEdit/AddEditPage";
import AddNewUser from "../pages/Auth/AddNewUser";
import LoginPage from "../pages/Auth/LoginPage";
import LogoutPage from "../pages/Auth/LogoutPage";
import ProductList from "../pages/Product/ProductList";
import AddEditProduct from "../pages/Product/AddNewProduct";
import AddEditCategory from "../pages/Category/AddEditCategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>Page not found</h1>,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "logout",
        element: <LogoutPage />,
      },
      {
        path: "products",
        element: <ProductList />,
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
]);

export default router;
