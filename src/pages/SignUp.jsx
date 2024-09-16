import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import { useDispatch, useSelector } from 'react-redux'
import { signup } from '../app/features/Auth/AuthSlice';

const SignUp = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const [isAdmin , setIsAdmin] = useState(false)
    const [data , setData] = useState({
        name: "",
        email: "",
        password: "",
        role: "user",
        adminSecret: "",
        profileImage: "",
    })

    const handleChange = (e) => {
        const { name , value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        
        if (name === 'role') {
            setIsAdmin(value === 'admin');
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setData((prevData) => ({
        ...prevData,
        profileImage: file,
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });
    
        // Dispatch the signup action
        dispatch(signup(formData));
        console.log(formData);  
    };



    return (
        <>
            <div className='pt-20 pb-4'>
                <div className='bg-white mx-2 p-3 rounded-md shadow-lg my-2'>
                <img src={logo} alt="logo" width={40} className='mx-auto mt-2' />
                    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                        <h2 className='text-center text-2xl font-bold my-2'>Signup</h2>
                        <div className="mb-5 mt-5">
                            <input type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Name" required onChange={handleChange}/>
                        </div>
                        <div className="mb-5 mt-5">
                            <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Email" required onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <input type="password" id="password" name='password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 rounded-sm focus:border-blue-500 block w-full p-2.5" required  placeholder='Create password' onChange={handleChange} />
                        </div>
                        <div className="mb-5 mt-5">
                            <input type="password" id="confirmPassword" name='confirmPassword' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Confirm password" required onChange={handleChange} />
                        </div>

                        <div className="form-group text-center rounded-sm bg-gray-50 py-2 border-gray-300 border-2">
                            <label htmlFor="role" className='text-sm me-7'>Select Role</label>
                            <select id="role" name="role" className="form-control bg-orange-400 py-1 rounded-md text-sm" onChange={handleChange} required>
                                <option value="" disabled>Select your role</option>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>

                        {isAdmin && (
                            <div className="form-group mb-5 mt-3">
                                <label htmlFor="adminSecret" className='text-sm'>Enter Admin Secret</label>
                                <input
                                type="password"
                                id="adminSecret"
                                name="adminSecret"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Enter admin secret"
                                onChange={handleChange}
                                />
                            </div>
                        )}

                        <div className="mb-5 mt-5">
                            <input type="file" id="image" name='profileImage' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm hover: cursor-pointer focus:cursor-pointer block w-full p-2.5" required onChange={handleFileChange} />
                        </div>
                        <button type="submit" className="focus:ring-4 focus:outline-none rounded-sm text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-yellow-400 hover:bg-yellow-600">Signup</button>
                    
                         {/* Show loading or error messages */}
                            {auth.loading && <p>Loading...</p>}
                            {auth.error && <p className='text-red-500'>{auth.error}</p>}
                    
                        <div className='mt-3'>
                            <p className='text-center text-sm'>Already have an account?<span className='text-yellow-500 font-bold hover:text-yellow-600'><Link to="/Login"> Login</Link></span></p>
                            <p className='text-center my-3'>------------ or ------------</p>
                        </div>
                    </form>
                    <div className='text-center mt-5'>
                            <button className='w-full hover:bg-blue-600 bg-blue-500 px-5 py-2.5 text-white rounded-sm font-semibold text-sm'>
                                <a href="http://localhost:5000/api/v1/users/auth/google">
                                    <span className='me-4'>
                                        <i className="fa-brands fa-google fa-lg" style={{color:"white"}}></i>
                                    </span>Login With Google
                                </a>
                            </button>
                            <button className='bg-black text-white font-semibold py-2.5 rounded-sm w-full block text-center my-3 text-sm hover:opacity-70'>
                                <a href="http://localhost:5000/api/v1/users/auth/github">
                                    <span className='me-4'>
                                        <i className="fa-brands fa-github fa-lg" style={{ color: "white" }}></i>
                                    </span>
                                    Login With Github
                                </a>
                            </button>
                        </div>
                </div>
            </div>
        
        
        </>
    )
}

export default SignUp
