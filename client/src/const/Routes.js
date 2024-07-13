import Landing, {landingRoutes} from "../components/Landing/Landing/Landing";
import React from "react";

export const routes = [
    {
        path: "/",
        element: <Landing/>,
        children: landingRoutes,
    }
];