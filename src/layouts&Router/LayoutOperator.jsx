import React from "react";
import NavBarUser from "../components/navbars/NavbarUser";
import SideBarOperator from "../components/sidebars/SideBarOperator";

const LayoutOperator = () => {
    return(
        <div className="h-screen overflow-hidden">
        <NavBarUser/>
        <SideBarOperator/>
        {/* <Outlet/> */}
        </div>
    );
}

export default LayoutOperator;