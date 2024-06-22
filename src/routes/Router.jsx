import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import SignUp from "../pages/registar/SignUp";
import SignIn from "../pages/login/SignIn";
import Dashboard from "../layout/Dashboard";
import UserProfile from "../pages/Dashboard/UserProfile";
import AllUsers from "../pages/Dashboard/allUsers/AllUsers";
import AllTest from "../pages/allTests/AllTest";
import AddTest from "../pages/Dashboard/addTest/AddTest";
import TestDetails from "../pages/allTests/TestDetails";
import MangeAllTest from "../pages/Dashboard/MangeTest/MangeAllTest";
import UpdateTest from "../pages/Dashboard/MangeTest/UpdateTest";
import UpcomingAppoinment from "../pages/Dashboard/UpcomingAppoinment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "signIn",
        element: <SignIn />,
      },
      {
        path: "allTests",
        element: <AllTest />,
      },
      {
        path: "testDetails/:id",
        element: <TestDetails />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "userProfile",
        element: <UserProfile />,
      },
      {
        path: "upcomingAppoinment",
        element: <UpcomingAppoinment />,
      },
      {
        path: "allUsers",
        element: <AllUsers />,
      },
      {
        path: "addTest",
        element: <AddTest />,
      },
      {
        path: "mangeAllTest",
        element: <MangeAllTest />,
      },
      {
        path: "updateTest/:id",
        element: <UpdateTest />,
      },
    ],
  },
]);

export default router;
