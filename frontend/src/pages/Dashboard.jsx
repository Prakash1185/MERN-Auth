import React from "react"
import { Link, useNavigate } from "react-router-dom"

const Dashboard = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    // Here you would typically handle logout logic
    console.log("Logging out")
    navigate("/")
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <header className="bg-gray-800 shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex justify-between items-center">
            <li>
              <Link to="/dashboard" className="text-xl font-bold text-purple-400">
                Dashboard
              </Link>
            </li>
            <li className="flex space-x-4">
              <Link to="/user1" className="text-gray-300 hover:text-purple-400">
                User Page 1
              </Link>
              <Link to="/user2" className="text-gray-300 hover:text-purple-400">
                User Page 2
              </Link>
              <button onClick={handleLogout} className="text-gray-300 hover:text-purple-400">
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-purple-400 mb-4">Welcome to Your Dashboard</h1>
        <p className="text-gray-300">Here you can manage your account and access various features.</p>
      </main>
    </div>
  )
}

export default Dashboard

