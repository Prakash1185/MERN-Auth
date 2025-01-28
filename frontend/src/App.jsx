import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import UserPage1 from './pages/UserPage1';
import UserPage2 from './pages/UserPage2';
import Navbar from "./components/Navbar";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { ToastContainer } from "react-toastify";
import ErrorPage from './pages/ErrorPage';
import RefreshHandler from './RefreshHandler';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // Set isAuthenticated to true if token exists
  }, []);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to={"/login"} />;
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage  setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/home" element={<PrivateRoute element={<Dashboard />} />} />
        <Route path="/one" element={<PrivateRoute element={<UserPage1 />} />} />
        <Route path="/two" element={<PrivateRoute element={<UserPage2 />} />} />
        <Route path="/*" element={<ErrorPage isLoggedIn={isLoggedIn} />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
