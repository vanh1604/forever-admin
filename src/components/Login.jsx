import axios from "axios";
import React, { useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Login = ({setToken}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });
      if (response.data.success){
        setToken(response.data.token);
      }else{
        toast.error(response.data.message);
        console.log(response);
      } 
    } catch (error) {
        console.log(error);
        toast.error(error.message);
        
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-md px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <form onSubmit={onSubmitHandler} action="">
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gay-700 mb-2">
              Email Address
            </p>
            <input
              className="rounded-md w-full px-3 py-2 border  border-gray-300 outline-none"
              type="text"
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gay-700 mb-2">Password</p>
            <input
              className="rounded-md w-full px-3 py-2 border  border-gray-300 outline-none"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="mt-2 w-full py-2 px-4 rouended-md bg-black text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
