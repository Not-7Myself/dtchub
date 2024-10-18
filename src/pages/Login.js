import React, { useState } from "react";
import { loginUser } from "../js/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-white text-2xl font-bold mb-4 text-center">
          Login
        </h2>
        <p className="text-gray-400 text-center mb-6">
          Nice to see you again :)
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-white mb-2">
              Email ID<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email ID"
              className="w-full p-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-white mb-2">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center">
            <a
              onClick={() => navigate("/forgot-password")}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Forgot your password?
            </a>
          </div>
        
          <button
            type="submit"
            className="w-full text-xl font-bold p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
          <div className="text-center text-gray-400 mt-4">
            Don’t have an Account?{" "}
            <a
              onClick={() => navigate("/register")}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
