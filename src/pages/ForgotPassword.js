import React, { useState } from "react";
import { sendPasswordReset } from "../js/auth";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordReset(email);
      alert("Password reset email sent");
      navigate("/login"); // Redirect to login page after sending reset link
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-white text-2xl font-bold mb-4 text-center">
          Forgot Password
        </h2>
        <p className="text-gray-400 text-center mb-6">
          Enter your email to receive a reset link
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
          <button
            type="submit"
            className="w-full text-lg font-bold p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Send Reset Link
          </button>
          <div className="text-center text-gray-400 mt-4">
            Remember your password?{" "}
            <a
              onClick={() => navigate("/login")}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
