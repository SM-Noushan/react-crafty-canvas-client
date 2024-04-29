import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Error from "../pages/error/Error";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import AuthLayout from "../layouts/AuthLayout";
import Profile from "../pages/profile/Profile";
import AddCraft from "../pages/art&craft/AddCraft";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/",
        element: <AuthLayout />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/register",
            element: <Register />,
          },
        ],
      },
      {
        path: "/item/add",
        element: (
          <PrivateRoutes>
            <AddCraft />,
          </PrivateRoutes>
        ),
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
