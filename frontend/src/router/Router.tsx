import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
// Page imports
import RootLayout from "../layout/RootLayout";
import About from "../pages/About";
import ForageCatalogue from "../pages/ForageCatalogue/ForageCatalogue";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<ForageCatalogue />} />
            <Route path="about" element={<About />} />
        </Route>,
    ),
);
