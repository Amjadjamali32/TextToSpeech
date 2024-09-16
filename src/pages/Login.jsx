import React, { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png"
import { login } from '../app/features/Auth/AuthSlice';
import { useDispatch , useSelector } from 'react-redux';

const Login = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const navigate = useNavigate()
    
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
        const { email , password } = data
        const userData = { email, password };
        dispatch(login(userData))
        console.log(userData);
    }

    // Use useEffect to handle navigation on successful login
    useEffect(() => {
        if (auth.isAuthenticated) { 
            // Assuming `auth.isAuthenticated` becomes true on successful login
            navigate("/Profile"); // Redirect to Profile page
        }
    }, [auth.isAuthenticated, navigate]); // Dependency array: watch for changes in auth state


    return (
        <>
            <div className='pt-20 pb-4'>
                <div className='bg-white mx-2 p-3 rounded-md shadow-lg my-2'>
                    <img src={logo} alt="logo" width={40} className='mx-auto mt-2'/>
                    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                        <h2 className='text-center text-2xl font-bold my-2'>Login</h2>

                        {/* Feedback Messages */}
                        {auth.loading && <p className="text-center text-black">Loading...</p>}
                        {auth.error && <p className="text-center text-red-500">Error: {auth.error}</p>}


                        <div className="mb-5 mt-5">
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Email" required name="email" onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 rounded-sm focus:border-blue-500 block w-full p-2.5" required  placeholder='Password' name="password" onChange={handleInputChange}/>
                        </div>
                        <div className="flex items-center flex-col mb-3">
                            <button>
                                <a href="" className='text-blue-400 text-sm hover:text-blue-600'>Forgot password?</a>
                            </button>
                            <button className='mt-1'>
                                <Link to="/AdminLogin" className='text-yellow-500 font-semibold hover:text-yellow-600'>Login as Admin</Link>
                            </button>
                        </div>
                        <button type="submit" className="focus:ring-4 focus:outline-none rounded-sm w-full sm:w-auto px-5 py-2.5 text-center text-sm font-semibold bg-yellow-400 hover:bg-yellow-600">Login</button>
                        <div className='mt-2'>
                            <p className='text-center text-sm'>Don't have an account?<span className='text-yellow-500 font-bold hover:text-yellow-600'><Link to="/Signup"> Signup</Link></span></p>
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
