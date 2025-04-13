import { createBrowserRouter } from "react-router-dom";
import Cocktail, { cocktailLoader } from "./pages/Cocktail";
import Landing from "./pages/Landing";
import NewsLetter, { action } from "./pages/NewsLetter";
import About from "./pages/About";
import AppLayout from "./pages/home/AppLayout";
import Home, { homeLoader } from "./pages/home/Home";
import Error from "./pages/Error";
import SinglePageError from "./pages/SinglePageError";
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: homeLoader(queryClient),
        element: <Home />,
        errorElement: <SinglePageError />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cocktail/:id",
        loader: cocktailLoader(queryClient),
        errorElement: <SinglePageError />,
        element: <Cocktail />,
      },
      {
        path: "/newsletter",
        action: action,
        element: <NewsLetter />,
      },
    ],
  },
  {
    path: "/landing",
    element: <Landing />,
  },
]);
