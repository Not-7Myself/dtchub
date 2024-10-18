import React from "react";
import { logoutUser } from "../js/auth";
import { useNavigate } from "react-router-dom";
import UserProfile from "../components/UserProfile"; // Adjust the import based on your file structure

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    navigate("/login");
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-4xl mb-6">Welcome to the Dashboard!</h1>
      <UserProfile />
      <button
        onClick={handleLogout}
        className="mt-6 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
