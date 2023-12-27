import { RouterProvider } from "react-router";
import { router } from "./router/Router";

const App = () => {
    return (
        <div className="bg-custom-gradient">
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
