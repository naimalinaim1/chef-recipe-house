import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import Home from "../pages/Home/Home";
import Login from "../system/Login/Login";
import Register from "../system/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import RecipeDetails from "../pages/ChefDetails/RecipeDetails";

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
        element: <ChefDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/chef/${params.id}`),
      },
      {
        path: "/recipe/:id",
        element: <RecipeDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/recipe/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
