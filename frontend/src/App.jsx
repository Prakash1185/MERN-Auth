import React from "react"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import UserPage1 from './pages/UserPage1';
import UserPage2 from './pages/UserPage2';


function App() {
  return (

    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/one" element={<UserPage1 />} />
        <Route path="/two" element={<UserPage2 />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>

  )
}

export default App

