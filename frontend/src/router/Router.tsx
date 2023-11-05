import { createBrowserRouter, createRoutesFromElements, Route, } from "react-router-dom"
// Page imports
import RootLayout from "../layout/RootLayout"
import Landing from "../pages/Landing"
import About from "../pages/About"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Landing />} />
            <Route path="about" element={<About />} />
        </Route>
    )
)