import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Footer from "../pages/footer/Footer";
import Home from "../pages/home/Home";

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
          path: 'footer',
          element: <Footer></Footer>
      },
      ]
    },
  ]);