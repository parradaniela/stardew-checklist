import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
// Page imports
import RootLayout from "../layout/RootLayout";
import Catalogue from "../views/Catalogue/Catalogue";
import About from "../views/About";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Catalogue />} />
            <Route path="about" element={<About />} />
        </Route>,
    ),
);
