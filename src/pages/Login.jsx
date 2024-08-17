import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const Login = () => {
    const [data , setData] = useState({
        email: '',
        password: '',
    })

    const handleInputChange = (e) => {
        const { name , value } = e.target
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('/api/login', data);
            console.log('Login successful:', response.data);
        } catch (error) {
            console.error('Login failed:', error);
        }
    }

    return (
        <>
            <div className='pt-20 bg-pink-200 pb-4'>
                <div className='bg-white mx-2 p-3 rounded-md shadow-lg my-2'>
                    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                        <h2 className='text-center text-2xl font-bold my-2'>Login</h2>
                        <div className="mb-5 mt-5">
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Email" required name="email" onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 rounded-sm focus:border-blue-500 block w-full p-2.5" required  placeholder='Password' name="password" onChange={handleInputChange}/>
                        </div>
                        <div className="flex items-center flex-col mb-3">
                            <button>
                                <a href="" className='text-blue-400 font-semibold hover:text-blue-600'>Forgot password?</a>
                            </button>
                            <button className='mt-1'>
                                <Link to="/AdminLogin" className='text-yellow-500 font-semibold hover:text-yellow-600'>Login as Admin</Link>
                            </button>
                        </div>
                        <button type="submit" className="focus:ring-4 focus:outline-none rounded-sm text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-yellow-400 hover:bg-yellow-600">Login</button>
                        <div className='mt-2'>
                            <p className='text-center'>Don't have an account?<span className='text-yellow-500 font-bold hover:text-yellow-600'><Link to="/Signup"> Signup</Link></span></p>
                            <p className='text-center my-3'>------------ or ------------</p>
                        </div>
                        <div className='text-center mt-5'>
                            <button className='w-full hover:bg-blue-600 bg-blue-500 px-5 py-2.5 text-white rounded-sm font-semibold text-sm'>
                                <a href="">
                                    <span className='me-4'>
                                        <i className="fa-brands fa-google fa-lg" style={{color:"white"}}></i>
                                    </span>Login With Google
                                </a>
                            </button>
                            <button className='bg-black text-white font-semibold py-2.5 rounded-sm w-full block text-center my-3 text-sm hover:opacity-70'>
                                <a href="#">
                                    <span className='me-4'>
                                        <i className="fa-brands fa-github fa-lg" style={{ color: "white" }}></i>
                                    </span>
                                    Login With Github
                                </a>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
