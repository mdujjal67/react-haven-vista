import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Footer from "../pages/footer/Footer";
import Home from "../pages/home/Home";
import UpdateProfile from "../pages/update-profile/UpdateProfile";
import UserProfile from "../pages/user-profile/UserProfile";
import Agents from "../pages/agents/Agents";
import EstateDetails from "../pages/estate-details/EstateDetails";
import NotFoundPage from "../components/NotFoundPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('Estate.json'),
        },
        {
          path: '/home/:bookId',
          element: <EstateDetails></EstateDetails> ,
          loader: () => fetch(`Estate.json`)
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
          path:'/agents',
          element:<Agents></Agents>
        },
        {
          path: 'footer',
          element: <Footer></Footer>
      },
      {
        path: "*",
        element: <NotFoundPage></NotFoundPage> // Catch-all route for 404 Not Found
      },
      ]
    },
  ]);