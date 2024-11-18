import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  }; // You can manage this with state

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 ">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-white mb-2">Get Started</h1>
        <p className="text-gray-300">Create your account to start chatting</p>
      </div>

      {/* Signup Form Card */}
      <div className="w-full max-w-2xl p-8 rounded-xl shadow-lg bg-white/10 backdrop-blur-md border border-white/20">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Sign Up
          <span className="text-sky-400 ml-2">Chat App</span>
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-300/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition duration-200"
              value={inputs.fullname}
              onChange={(e) =>
                setInputs({ ...inputs, fullname: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Username
            </label>
            <input
              type="text"
              placeholder="johndoe"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-300/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition duration-200"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-300/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition duration-200"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-300/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition duration-200"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <div className="py-2">
            <GenderCheckbox
              onCheckboxChange={handleCheckBoxChange}
              selectedGender={inputs.gender}
            />
          </div>

          <div className="flex items-center justify-center">
            <Link
              to="/login"
              className="text-sm text-sky-400 hover:text-sky-300 transition duration-200"
            >
              Already have an account?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Signup"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
