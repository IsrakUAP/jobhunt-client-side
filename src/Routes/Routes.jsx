import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AddJob from "../Pages/AddJob/AddJob";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>

        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/registration",
          element: <Registration></Registration>
        },
        {
          path: "/addJob",
          element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
        }
        
      ]
    },
  ]);


  export default router;