import React from "react";
import { Outlet } from "react-router-dom";
import NavBarUser from "../components/navbars/NavbarUser";
import SideBarOperator from "../components/sidebars/SideBarOperator";
import RightPanel from "../components/sidebars/RightPanel";

const LayoutOperator = () => {
    return (
        <div className="h-screen overflow-hidden">
            <NavBarUser />
            <div className="flex h-full">
                <SideBarOperator />
                <div className="flex-grow flex">
                    {/* Main content area */}
                    <div className="flex-grow overflow-hidden">
                        <Outlet />
                    </div>
                    {/* Right Info Panel - hidden on small screens */}
                    <div className="hidden lg:block">
                        <RightPanel />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LayoutOperator;
