import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <>
            <div className='pt-20 bg-pink-200 pb-4'>
                <div className='bg-white mx-2 p-3 rounded-md shadow-lg my-2'>
                    <form className="max-w-sm mx-auto">
                        <h2 className='text-center text-2xl font-bold my-2'>Signup</h2>
                        <div className="mb-5 mt-5">
                            <input type="email" id="email" name="user_email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Email" required />
                        </div>
                        <div className="mb-3">
                            <input type="password" id="password" name='user_password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 rounded-sm focus:border-blue-500 block w-full p-2.5" required  placeholder='Create password'/>
                        </div>
                        <div className="mb-5 mt-5">
                            <input type="password" id="confirmPassword" name='confirmPassword' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Confirm password" required />
                        </div>
                        <button type="submit" className="focus:ring-4 focus:outline-none rounded-sm text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-yellow-400 hover:bg-yellow-600">Signup</button>
                        <div className='mt-2'>
                            <p className='text-center'>Already have an account?<span className='text-yellow-500 font-bold hover:text-yellow-600'><Link to="/Login"> Login</Link></span></p>
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

export default SignUp
