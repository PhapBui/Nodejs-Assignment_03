import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import AddEditPage from "../pages/AddEdit/AddEditPage";
import AddNewUser from "../pages/User/AddNewUser";

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
        path: "add",
        element: <AddEditPage />,
        children: [
          { path: "user", element: <AddNewUser /> },
          // { path: "category", element: <AddNewCity /> },
          // { path: "product", element: <AddNewRoom /> },
        ],
      },
    ],
  },
]);

export default router;
