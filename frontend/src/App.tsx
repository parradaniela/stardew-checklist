import { RouterProvider } from "react-router";
import { router } from "./router/Router";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const App = () => {
    return (
        <div className=" bg-black text-white">
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
                <ReactQueryDevtools initialIsOpen />
            </QueryClientProvider>
        </div>
    );
};

export default App;
