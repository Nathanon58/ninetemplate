import { createBrowserRouter } from "react-router-dom";
import { Root } from "./pages/Root";

import { LoginPage } from "./pages/Login";
// import { Logout } from "./components/Logout";

import { Home } from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    // loader: RootLoader, FIXME: loader in router is loadding state
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
]);
