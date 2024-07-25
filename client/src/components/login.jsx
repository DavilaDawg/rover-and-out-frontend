import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";

const MyLogin = () => {

  //Navigation:
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="relative min-h-screen bg-starry bg-cover bg-center flex items-center justify-center">
      <button
        onClick={handleBack}
        className="absolute top-4 right-4 px-6 py-3 bg-gray-800 text-white rounded-lg shadow-lg text-lg font-semibold hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Back
      </button>
      
      <div className="bg-gray-900 bg-opacity-70 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Welcome Back</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-300 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="button"
            onClick={handleLogin}
            className="w-full py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
          <div className="text-center text-gray-400">
            <p>Don't have an account?</p>
            <a
              href="/signup"
              className="text-blue-500 hover:underline"
            >
              Sign up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyLogin;
