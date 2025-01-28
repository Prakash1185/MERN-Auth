import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const userName = localStorage.getItem("userName");
        setIsLoggedIn(!!userName); // Set isLoggedIn to true if userName exists
    }, [setIsLoggedIn]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        setIsLoggedIn(false);
        toast.success("User logged out");
        navigate("/login");
    };

    return (
        <nav className="sticky top-0 z-50 text-white border-b py-0.5 border-gray-500/30">
            <div className="container mx-auto px-4 flex justify-between items-center h-16">
                {/* Logo */}
                <div className="text-3xl font-semibold">
                    <Link to={isLoggedIn ? "/home" : "/"}>LOGO</Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-4">
                    {!isLoggedIn ? (
                        <>
                            <Link to="/login" className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Login</Link>
                            <Link to="/signup" className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500">Signup</Link>
                        </>
                    ) : (
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-red-600 rounded hover:bg-red-600/80 transition-all cursor-pointer"
                        >
                            Logout
                        </button>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        id="menu-button"
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Visible on toggle) */}
            {isMenuOpen && (
                <div id="mobile-menu" className="md:hidden bg-gray-950 z-40">
                    <div className="flex flex-col space-y-4 px-4 py-4">
                        {!isLoggedIn ? (
                            <>
                                <Link to="/login" className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-500">Login</Link>
                                <Link to="/signup" className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-400">Signup</Link>
                            </>
                        ) : (
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 bg-red-600 rounded hover:bg-red-600/80 transition-all cursor-pointer"
                            >
                                Logout
                            </button>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
