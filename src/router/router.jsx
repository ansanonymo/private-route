import { createBrowserRouter } from "react-router-dom";
import NavAndFooter from "./template/NavAndFooter";
import HomePage from "../page/HomePage";
import RegisterPage from "../page/RegisterPage";
import LoginPage from "../page/LoginPage";
import NotFoundPage from "../page/NotFoundPage";
import PrivateRoute from "../page/PrivateRoute";
import ProfilePage from "./../page/ProfilePage";

const router = createBrowserRouter([
  {
    element: <NavAndFooter />,
    children: [
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "/profile",
            element: <ProfilePage />,
          },
        ],
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
