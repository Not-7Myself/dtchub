import React, { useState } from "react";
import { registerUser} from "../js/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    schoolName: "",
    email: "",
    password: "",
    confirmPassword: "",
    tnc: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const userDetails = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        school: formData.schoolName,
        email: formData.email,
      };

      await registerUser(formData.email, formData.password, userDetails);
      navigate("/"); // Redirect after successful registration
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 px-6 sm:px-8">
      <div className="bg-gray-800 p-10 sm:p-12 rounded-lg shadow-lg max-w-2xl w-full"> {/* Increased max width */}
          <form onSubmit={handleSubmit}>
            <h2 className="text-4xl text-white font-bold text-center mb-4">Register</h2>
            <p className="text-center text-gray-400 mb-4">We hope you have a nice time here :)</p>

            <div className="mb-4 flex gap-6"> {/* Increased gap between columns */}
              <div className="flex-1">
                <label className="block text-white mb-2">First Name<span className="text-red-500">*</span></label>
                <input
                  type="text"
                  placeholder="Enter your First Name"
                  className="w-full p-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
              <div className="flex-1">
                <label className="block text-white mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter your Last Name"
                  className="w-full p-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-white mb-2">School Name<span className="text-red-500">*</span></label>
              <input
                type="text"
                placeholder="Enter your School Name"
                className="w-full p-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
                value={formData.schoolName}
                onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
              />
            </div>

            <div className="mb-4">
              <label className="block text-white mb-2">Email ID<span className="text-red-500">*</span></label>
              <input
                type="email"
                placeholder="Enter your Email ID"
                className="w-full p-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="mb-4 flex gap-6"> {/* Increased gap between password fields */}
              <div className="flex-1">
                <label className="block text-white mb-2">Password<span className="text-red-500">*</span></label>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  className="w-full p-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
              <div className="flex-1">
                <label className="block text-white mb-2">Confirm Password<span className="text-red-500">*</span></label>
                <input
                  type="password"
                  placeholder="Enter your Password Again"
                  className="w-full p-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
              </div>
            </div>

            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                className="mr-3"
                required
                checked={formData.tnc}
                onChange={(e) => setFormData({ ...formData, tnc: e.target.checked })}
              />
              <label className="text-gray-400">
                I agree to the <a href="#" className="text-blue-500 hover:underline">Terms and Conditions</a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full text-xl font-bold p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Register
            </button>

            <p className="text-center text-gray-400 mt-6">
              Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
            </p>
          </form>
      </div>
    </div>
  );
}

export default Register;
