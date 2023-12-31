import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App";
import { ErrorPage, Single } from "../components";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index element={<App />} />
            <Route path="/movies/:movieId" element={<Single />} />
            <Route path="*" element={<ErrorPage />} />
        </Route>
    )
)