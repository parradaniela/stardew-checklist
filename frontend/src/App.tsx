import { RouterProvider } from "react-router";
import { router } from "./router/Router";
const App = () => {
    return (
        <div className=" bg-black text-white">
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
