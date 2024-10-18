import React from "react";
import logo from "../../assets/logo/logo.svg"

const NavBar = () => {
    return (
    <nav className="bg-white shadow-lg w-full mx-auto py-4 lg">
        <div className="flex justify-between">
            <div className="flex justify-center pl-3 items-center">
                <img src={logo} alt="Website logo" className=""/>
                <p className="ml-2 text-2xl font-bold">Tasker</p>
            </div>
        </div>
    </nav>
    );
}

export default NavBar;