import React, { useState } from "react"; // Add useState import
import NavBarUser from "../components/navbars/NavBarUser";
import SideBarOperator from "../components/sidebars/SideBarOperator";
import AlertComponent from "../components/Alert"; // Ensure the correct path
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import AddOperator from "../pages/AddOperator";


const LayoutManager = () => {
  const [showAlert, setShowAlert] = useState(true); // State to show or hide the alert

  return (
    <div className="h-screen overflow-hidden">
      
      <AddOperator></AddOperator>
      
    
    </div>
  );
};

export default LayoutManager;