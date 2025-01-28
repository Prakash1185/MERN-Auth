import React from "react"
import { Link } from "react-router-dom"

const UserPage2 = () => {
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
        <h1 className="text-3xl font-bold text-blue-400 mb-4">Protected Route 2</h1>
        <p className="text-gray-300">One and Two can only be accessed from dashboard after logging in.</p>
      </main>
    </div>
  )
}

export default UserPage2

