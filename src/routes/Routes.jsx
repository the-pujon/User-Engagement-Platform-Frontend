import { createBrowserRouter } from "react-router-dom";
import Auth from "../layouts/Auth";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";

const Routes = createBrowserRouter([
  //auth routes
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },

  //home routes
  {
    path: "/",
    elementL: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);


export default Routes