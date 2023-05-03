import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import Home from "../pages/Home/Home";
import Login from "../system/Login/Login";
import Register from "../system/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import RecipeDetails from "../pages/ChefDetails/RecipeDetails";
import Blog from "../pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute";
import ReactPdf from "../pages/Blog/ReactPdf";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/chef/:id",
        element: (
          <PrivateRoute>
            <ChefDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-hunter-server-plum.vercel.app/chef/${params.id}`
          ),
      },
      {
        path: "/recipe/:id",
        element: <RecipeDetails />,
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-hunter-server-plum.vercel.app/recipe/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/react-to-pdf",
        element: <ReactPdf />,
      },
    ],
  },
]);

export default router;
