import React from "react"
import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-8 text-purple-400">Welcome to Our App</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Experience the future of digital interaction with our cutting-edge platform. Join us today and unlock a world of
        possibilities.
      </p>
      <Link
        to="/auth"
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
      >
        Get Started
      </Link>
    </div>
  )
}

export default LandingPage

