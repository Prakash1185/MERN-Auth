import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const BackendUrl = import.meta.env.VITE_BACKEND_URL


const LoginPage = ({ setIsLoggedIn }) => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const [loginLoading, setLoginLoading] = useState(false);


    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        const { email, password } = loginData
        if (!email || !password) {
            return toast.error("Please fill all the details")
        }
        setLoginLoading(true)
        try {

            const url = (`${BackendUrl}/login`);
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginData)
            })

            const result = await response.json()
            const { success, message, jwtToken, name } = result

            if (success) {
                toast.success(message)
                localStorage.setItem("token", jwtToken)
                localStorage.setItem("userName", name)
                navigate("/home")
                setIsLoggedIn(true)
                setLoginData({
                    email: "",
                    password: ""
                })
            } else if (!success) {
                toast.error(message)
            }


        } catch (error) {
            toast.error(error)
        } finally {
            setLoginLoading(false)
        }

    };

    return (
        <div className="pt-16 flex items-center justify-center px-4">
            <div className="bg-gray-900/50  border-gray-600/30 p-8 rounded-lg w-full max-w-md">
                <h2 className="text-3xl font-bold mb-3 text-center ">Login</h2>
                <form onSubmit={handleLogin} className="space-y-4">

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium   mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={loginData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-100/20 rounded-lg   outline-none"
                            placeholder="Enter your email"
                            required
                            autoComplete='off'
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium   mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={loginData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-100/20 rounded-lg   outline-none"
                            placeholder="Enter your password"
                            required
                            autoComplete='off'
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 mt-3 rounded-lg hover:bg-blue-500 transition"
                        disabled={loginLoading}
                    >
                        {loginLoading ? 'Logging in...' : 'Login'}

                    </button>

                    <p className='text-sm text-center pt-5'>Don't have an account? <Link to={"/signup"} className='hover:underline hover:text-blue-500'>Signup</Link></p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
