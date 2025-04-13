import { RouterProvider } from "react-router-dom";
import { queryClient, router } from "./router";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient} >
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
};

export default App;
