import {Outlet} from "react-router-dom";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import React from "react";

function Landing() {
    return (
        <>
            <div className={`d-flex justify-content-center align-items-center min-vh-100 w-100`}>
                <Outlet/>
            </div>
        </>
    );
}

export const landingRoutes = [
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/registration",
        element: <Registration/>
    },
];

export default Landing;