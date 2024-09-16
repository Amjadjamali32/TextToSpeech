import React from 'react'
import { useState } from 'react'
import axios from "axios"
import logo from "../assets/logo.png"
import { redirect } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const navigate = useNavigate(); 
    const [data , setData] = useState({
        email: "",
        password: "",
        secret: "",
    })

    const handleChange = (e) => {
        const { name , value } = e.target
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('http://localhost:5000/api/v1/users/login', data);
            console.log('Login successful:', response.data);
            navigate("/Profile");
        } catch (error) {
            console.error('Login failed:', error);
            navigate("/Profile");
        }
    }

    return (
        <>
            <div className='pt-20 pb-4'>
                <div className='bg-white mx-2 p-3 rounded-md shadow-lg my-2'>
                    <img src={logo} alt="logo" width={40} className='mx-auto mt-3' />
                    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                        <h2 className='text-center text-2xl font-bold my-2'>Admin</h2>
                        <div className="mb-5 mt-5">
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Username" required name="email" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 rounded-sm focus:border-blue-500 block w-full p-2.5" required  placeholder='Password' name="password" onChange={handleChange}/>
                        </div>
                        <div className="mt-4 mb-3">
                            <input type="text" id="secret" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 rounded-sm focus:border-blue-500 block w-full p-2.5" required  placeholder="Secret" name="adminSecret" onChange={handleChange}/>
                        </div>
                        <button type="submit" className="focus:ring-4 focus:outline-none rounded-sm text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-yellow-400 hover:bg-yellow-600 mb-3 mt-2">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminLogin
