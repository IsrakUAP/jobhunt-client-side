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
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import UpdateJob from "../Pages/MyPostedJobs/UpdateJob";

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
          element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
        },
        {
          path: "/myBids",
          element:<PrivateRoute><MyBids></MyBids></PrivateRoute>
        },
        {
          path: "/bidRequests",
          element: <PrivateRoute><BidRequests></BidRequests></PrivateRoute>
        },
        {
          path: "/myPostedJobs",
          element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
        },
        {
          path: "/updateJob/:id",
          element: <PrivateRoute><UpdateJob></UpdateJob></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
        }
        
      ]
    },
  ]);


  export default router;