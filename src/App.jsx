import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cocktail from "./pages/Cocktail";
import Landing from "./pages/Landing";
import NewsLetter from "./pages/NewsLetter";
import About from "./pages/About";
import AppLayout from "./pages/home/AppLayout";
import Home from "./pages/home/Home";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cocktail",
        element: <Cocktail />,
      },
      {
        path: "/newsletter",
        element: <NewsLetter />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
  {
    path: "/landing",
    element: <Landing />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
