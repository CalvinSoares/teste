import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Login = lazy(() => import("@/pages/Login"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);
