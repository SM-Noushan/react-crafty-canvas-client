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
import ViewAllCraft from "../pages/art&craft/ViewAllCraft";
import ViewDetails from "../pages/art&craft/ViewDetails";
import MyArtAndCraftList from "../pages/art&craft/MyArtAndCraftList";
import CraftsPerCategory from "../pages/art&craft/CraftsPerCategory";

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
        path: "/my-art-and-craft",
        element: (
          <PrivateRoutes>
            <MyArtAndCraftList />,
          </PrivateRoutes>
        ),
      },
      {
        path: "/item",
        element: <ViewAllCraft />,
        loader: () =>
          fetch(
            "https://crafty-canvas-server-side.vercel.app/painting-and-drawing"
          ),
        // loader: () => fetch("http://localhost:6969/painting-and-drawing"),
      },
      {
        path: "/item/category/:categoryName",
        element: <CraftsPerCategory />,
        loader: ({ params }) =>
          fetch(
            `https://crafty-canvas-server-side.vercel.app/painting-and-drawing/?category=${params.categoryName}`
          ),
        // loader: ({ params }) =>
        //   fetch(
        //     `http://localhost:6969/painting-and-drawing/?category=${params.categoryName}`
        //   ),
      },
      {
        path: "/item/:itemId",
        element: (
          <PrivateRoutes>
            <ViewDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://crafty-canvas-server-side.vercel.app/painting-and-drawing/${params.itemId}`
          ),
        // loader: ({ params }) =>
        //   fetch(`http://localhost:6969/painting-and-drawing/${params.itemId}`),
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
        path: "/item/:itemId/edit",
        element: (
          <PrivateRoutes>
            <AddCraft update={true} />,
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://crafty-canvas-server-side.vercel.app/painting-and-drawing/${params.itemId}`
          ),
        // loader: ({ params }) =>
        //   fetch(`http://localhost:6969/painting-and-drawing/${params.itemId}`),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />,
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
