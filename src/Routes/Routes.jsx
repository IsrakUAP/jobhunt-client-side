import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AddJob from "../Pages/AddJob/AddJob";
import PrivateRoute from "./PrivateRoute";
import JobDetails from "../Pages/JobDetails/JobDetails";
import MyBids from "../Pages/MyBids/MyBids";
import BidRequests from "../Pages/BidRequests/BidRequests";

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
        },
        {
          path: "/jobDetails/:id",
          element: <JobDetails></JobDetails>,
          loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
        },
        {
          path: "/myBids",
          element:<MyBids></MyBids>
        },
        {
          path: "/bidRequests",
          element: <BidRequests></BidRequests>
        }
        
      ]
    },
  ]);


  export default router;