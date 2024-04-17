import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Footer from "../pages/footer/Footer";
import Home from "../pages/home/Home";
import UpdateProfile from "../pages/update-profile/UpdateProfile";
import UserProfile from "../pages/user-profile/UserProfile";
import Agents from "../pages/agents/Agents";
import EstateDetails from "../pages/estate-details/EstateDetails";
import NotFoundPage from "../components/NotFoundPage";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import PrivateRoute from "../components/privateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('/Estate.json'),
        },
        {
          path: '/home/:id',
          element: <PrivateRoute>
            <EstateDetails></EstateDetails>
          </PrivateRoute> ,
          loader: () => fetch(`/Estate.json`)
        },
        {
          path:'/update-profile',
          element:<PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        },
        {
          path:'/user-profile',
          element:<PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/legal-counsel',
          element:<PrivateRoute>
            <Agents></Agents>
          </PrivateRoute>
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