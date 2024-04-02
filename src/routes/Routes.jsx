import { createBrowserRouter } from "react-router-dom";
import Auth from "../layouts/Auth";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import CreateMission from "../pages/Home/CreateMission";
import EditForm from "../pages/Home/EditForm";
import ParticipateMission from "../pages/Home/ParticipateMission";
import PrivateRoute from "./privateRoute";

const Routes = createBrowserRouter([

   //home routes
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "createMission",
        element: <PrivateRoute><CreateMission/></PrivateRoute>
      },
      {
        path: "editMission/:id",
        element: <PrivateRoute><EditForm/></PrivateRoute>
      },
      {
        path: "participateMission/:id",
        element: <ParticipateMission/>

      }
    ],
  },

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


]);


export default Routes