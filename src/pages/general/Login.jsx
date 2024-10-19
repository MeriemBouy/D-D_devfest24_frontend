import React, { useState } from "react";
import Login_image from "../../assets/login/Login.jpg";
import car from "../../assets/login/car.jpg";
import dots from "../../assets/login/circle_dotted.svg";
import lines from "../../assets/login/italic_lines.svg";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let {loginUser} = useAuth();
  const [error, setError] = useState(null);

    return(
    <section className="h-screen overflow-hidden flex flex-col md:flex-row justify-around items-center ">
    <div className="flex flex-col justify-around mb-7 ml-2 md:ml-0 h-full">
        <div className="flex flex-col h-full justify-center gap-10">
        <div className="font-bold text-4xl">
            <h1>Login</h1>
        </div>
        <form onSubmit={loginUser}>
        <label>
          Username
          <input
        className="text-sm w-full bg-[#F7FBFF] px-4 py-2 border border-solid border-gray-300 rounded-lg mb-4"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
        </label>    
        <label>
          Password
          <input
        className="text-sm w-full bg-[#F7FBFF] px-4 py-2 border border-solid border-gray-300 rounded-lg"
        type="password"
        placeholder="At least 8 characters"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
        </label>
        {error && <div className="text-red-500 mt-2">{error}</div>}
      <div className="mt-4 flex justify-end font-semibold text-sm">
        <a
          className="text-black hover:underline"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
      <div className="text-center md:text-left">
        <button
          className="mt-4 bg-[#B8FF01] hover:shadow-md w-full py-2 text-black font-bold rounded-lg text-base tracking-wider"
          type="submit"
        >
          Sign in
        </button>
      </div>
      </form>
        </div> 
      <div className="flex justify-between">
        <img src={lines} alt="italic lines"/>
        <img src={car} alt="car" className="w-10 h-10" />
      </div>
    </div>
    <div className="w-full hidden md:block max-w-sm relative rounded-2xl border-[#B8FF01] border-4">
                <img
                    src={Login_image}
                    alt="machines image"
                    className="w-full h-auto z-20" 
                />
                <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-black opacity-60 z-20"></div> 
                <div className="absolute -top-0 -left-16 z-0">
                    <img
                        src={dots}
                        alt="circle dotted"
                        className="w-40 h-40"
                    />
                </div>
    </div>
    <div className="absolute block md:hidden -top-0 -right-16 z-0">
                    <img
                        src={dots}
                        alt="circle dotted"
                        className="w-40 h-40"
                    />
    </div>
  </section>
  );
}

export default Login;