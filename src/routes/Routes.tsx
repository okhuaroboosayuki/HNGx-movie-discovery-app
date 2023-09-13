import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App";
import { Single } from "../components";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index element={<App />} />
            <Route path="/single" element={<Single />} />
        </Route>
    )
)