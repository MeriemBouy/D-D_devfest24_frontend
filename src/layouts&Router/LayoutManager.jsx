import React, { useState } from "react"; 
import NavBar from "../components/navbars/NavBar";
import SideBarOperator from "../components/sidebars/SideBarOperator";
import { Outlet } from 'react-router-dom';
import RightPanel from "../components/sidebars/RightPanel";


const LayoutManager = () => {
  const [showAlert, setShowAlert] = useState(true); // State to show or hide the alert

  return (
    <div className="h-screen flex">
    {/* Sidebar on the left, taking full height */}
    <SideBarOperator />

    {/* Main content area in the middle */}
    <div className="flex flex-col flex-grow">
        {/* Navbar on top, full width minus the sidebar */}
        <NavBar />
        
        <div className="flex flex-grow">
            {/* Outlet for the main content */}
            <div className="flex-grow overflow-hidden">
                <Outlet />
            </div>
        </div>
    </div>

    {/* Right Panel on the right, hidden on small screens */}
    <div className="hidden lg:block">
        <RightPanel />
    </div>
</div>
  );
};

export default LayoutManager;