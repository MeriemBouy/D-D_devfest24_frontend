import React from "react";
import SideBarOperator from "../components/sidebars/SideBarOperator";
import NavBar from "../components/navbars/NavBar";
import { Outlet } from "react-router-dom";

const LayoutOperator = () => {
    return(
        <div className="h-screen w-screen overflow-hidden">
        <NavBar/>
        <div className="flex justify-center">
            <SideBarOperator/>
            <Outlet/>
        </div>
        </div>
    );
}

export default LayoutOperator;