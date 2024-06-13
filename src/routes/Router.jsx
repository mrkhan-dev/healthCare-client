import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import SignUp from "../pages/registar/SignUp";

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
    ],
  },
]);

export default router;
