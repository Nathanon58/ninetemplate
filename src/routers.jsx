import { createBrowserRouter } from "react-router-dom";
import { Root } from "./pages/Root";

import { LoginPage } from "./pages/Login";
// import { Logout } from "./components/Logout";

import { Home } from "./pages/Home";
import { Logout } from "./components/Logout";

export const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    // loader: RootLoader, FIXME: loader in router is loadding state
    element: <Root />,
    children: [
      {
        path: "/",
        // loader: deskIndexLoader,
        // action: deskIndexAction, // FIXME: action is defined to call api
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    // action: LoginAction,
    element: <LoginPage />,
  },
  {
    path: "/logout",
    // action: LoginAction,
    element: <Logout />,
  },
]);
