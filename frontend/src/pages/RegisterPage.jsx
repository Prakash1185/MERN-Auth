import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const BackendUrl = import.meta.env.VITE_BACKEND_URL

const RegisterPage = () => {
    const [signupData, setSignUpData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const naviate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignUpData({
            ...signupData,
            [name]: value
        });
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        const { name, email, password } = signupData
        if (!name || !email || !password) {
            return toast.error("Please Fill all the details")
        }
        setIsLoading(true);
        try {
            const url = (`${BackendUrl}/signup`);
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(signupData)
            })

            const result = await response.json()
            const { success, message, error } = result;

            if (success) {
                toast.success(message)
                naviate("/login")
                setSignUpData({
                    name: "",
                    email: "",
                    password: ""
                })
            } else if (error) {
                const details = error?.details[0].message;
                toast.error(details)
            } else if (!success) {
                toast.error(message)
            }

        } catch (error) {
            toast.error(error)
        } finally {
            setIsLoading(false);
        }

    };

    return (
        <div className="pt-10 flex items-center justify-center px-4">
            <div className="bg-gray-900/50  border-gray-600/30 p-8 pb-5 rounded-lg w-full max-w-md">
                <h2 className="text-3xl font-bold mb-3 text-center ">Register</h2>
                <form onSubmit={handleSignup} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium   mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={signupData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-100/20 rounded-lg  outline-none "
                            placeholder="Enter your name"

                            autoComplete='off'
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium   mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={signupData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-100/20 rounded-lg   outline-none"
                            placeholder="Enter your email"

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
                            value={signupData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-100/20 rounded-lg   outline-none"
                            placeholder="Enter your password"

                            autoComplete='off'
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 mt-3 rounded-lg hover:bg-blue-600/80 transition cursor-pointer"
                        disabled={isLoading}
                    >

                        {isLoading ? 'Registering...' : 'Register'}
                        
                    </button>

                    <p className='text-sm text-center pt-3'>Already have an account? <Link to={"/login"} className='hover:underline hover:text-blue-500'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
