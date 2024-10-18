import React from "react";
import NavBar from "../components/NavBar";
import img from "../assets/welcome_img.svg";

const Welcome = () => {
    return (
        <div className="h-screen overflow-hidden">
            <NavBar />
            <div className="flex flex-col md:flex-row justify-center h-full p-4">
                <div className="flex flex-col justify-evenly items-center md:items-start mr-10">
                    <h1 className="text-4xl md:text-7xl font-bold text-center md:text-left">Built for You, Loved by Employees</h1>
                    <p className="text-lg text-center md:text-left mb-4">This app is designed for employees in order to better organize their tasks and visualize machines status</p>
                    <button className="bg-[#B8FF01] mb-5 py-4 px-12 rounded-2xl flex items-center justify-center whitespace-nowrap w-fit text-black font-bold hover:shadow-md">Get started</button>
                </div>
                <div className="flex flex-col justify-end w-full mt-8 md:mt-0">
                    <img src={img} alt="manufacturer image" className="w-full h-auto object-contain" />
                </div>
            </div>
        </div>
    );
}

export default Welcome;
