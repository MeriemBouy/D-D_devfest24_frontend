import React, { useState } from "react";
import logo from "../../assets/logo/logo.svg";
import profile from "../../assets/icons/profile.svg";
import { Link } from "react-router-dom";
import menu from "../../assets/icons/menu.svg";
import closeMenu from "../../assets/icons/closeMenu.svg";

const NavBarUser = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
    <nav className="shadow-lg w-full mx-auto py-4 lg">
        <div className="bg-white flex justify-between">
            <div className="flex justify-start pl-3 items-center w-full">
                <img src={logo} alt="Website logo"/>
                <p className="ml-2 text-2xl font-bold">Tasker</p>
            </div>
            <div className="hidden md:flex md:w-full md:justify-between md:items-center">
                <Link to="home">
                    <p className="text-black hover:underline cursor-pointer">Home</p>
                </Link>
                <Link to="../tasks/pending">
                    <p className="text-black hover:underline cursor-pointer">My tasks</p>
                </Link>
                <Link to="alerts">
                    <p className="text-black hover:underline cursor-pointer">Alerts</p>
                </Link>
                <Link to="dashboard">
                    <p className="text-black hover:underline cursor-pointer">Dashboard</p>
                </Link>
            </div>
            <div className="hidden w-full md:flex md:justify-end pr-3">
                <Link to="profile">
                    <img src={profile} alt="profile icon" />
                </Link>
            </div>
            <div className=" flex w-full justify-end md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 hover:shadow-sm rounded-md focus:outline-none"
            >
              <img src={isOpen ? closeMenu : menu} alt="Menu Icon" className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className={`md:hidden ${isOpen ? " block" : "hidden"} w-1/3 mx-auto flex justify-end`}>
        <div className="flex flex-col gap-2 sm:px-3">
            <Link to="home">
                <p className="text-black hover:bg-gray-100 cursor-pointer">Home</p>
            </Link>
            <Link to="tasks">
                <p className="text-black hover:bg-gray-100 cursor-pointer">My tasks</p>
            </Link>
            <Link to="alerts">
                <p className="text-black hover:bg-gray-100 cursor-pointer">Alerts</p>
            </Link>
            <Link to="dashboard">
                <p className="text-black hover:bg-gray-100 cursor-pointer">Dashboard</p>
            </Link>
            <Link to="profile">
                <p className="text-black hover:bg-gray-100 cursor-pointer">Profile</p>
            </Link>
        </div>
      </div>
    </nav>
    );
}

export default NavBarUser;