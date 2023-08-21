import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./components/Login/Login.tsx";
import Home from "./components/Home/Home.tsx";
import UserProfile from "./components/UserProfile/UserProfile.tsx";
import AppNavBar from "./components/AppNavBar/AppNavBar.tsx";

const router = createBrowserRouter([
  {
    element: <>
      <AppNavBar />
      <Outlet />
    </>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <UserProfile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
