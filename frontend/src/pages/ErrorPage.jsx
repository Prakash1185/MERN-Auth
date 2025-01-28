import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(isLoggedIn ? "/home" : "/");
  };

  return (
    <div className="flex flex-col items-center justify-center pt-32 bg-gray-950 text-gray-100">
      <h1 className="text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400 mb-6">
        ERROR 404
      </h1>
      <p className="mt-4 text-xl">The page you’re looking for doesn’t exist.</p>
      <button
        onClick={handleBack}
        className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all"
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
