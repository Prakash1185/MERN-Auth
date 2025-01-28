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
    <div className="flex flex-col min-h-screen ">
      <header className="shadow-md">
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex gap-8 items-center">
            <li>
              <Link to="/home" className="text-2xl font-medium text-blue-400">
                Dashboard
              </Link>
            </li>
            <li className="flex space-x-4">
              <Link to="/one" className="hover:text-gray-300">One</Link>
              <Link to="/two" className="hover:text-gray-300">Two</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-blue-400 mb-4">Welcome, {localStorage.getItem("userName")}</h1>
        <p className="text-gray-300">Here you can manage your account and access various features.</p>
      </main>
    </div>
  )
}

export default Dashboard

