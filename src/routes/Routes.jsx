import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Footer from "../pages/footer/Footer";
import Home from "../pages/home/Home";
import UpdateProfile from "../pages/update-profile/UpdateProfile";
import UserProfile from "../pages/user-profile/UserProfile";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path:'/update-profile',
          element:<UpdateProfile></UpdateProfile>
        },
        {
          path:'/user-profile',
          element:<UserProfile></UserProfile>
        },
        {
          path: 'footer',
          element: <Footer></Footer>
      },
      ]
    },
  ]);