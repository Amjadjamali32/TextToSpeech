import React from 'react'
import profile from "../assets/user.png"
import { FacebookRounded, GitHub,  } from '@mui/icons-material'
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';

const Profile = () => {
    return (
        <>
            <div className='pt-20 flex flex-col items-center'>
                <div className='bg-white max-w-md mx-2 my-2 rounded-sm shadow-md p-3'>
                    <img src={profile} alt="profile" className='w-3/6 mx-auto border-2 border-blue-500 rounded-full'/>
                    <h2 className='text-center font-bold text-xl my-2'>Amjad Ali Jamali</h2>
                    <p className='text-center my-2'>Role: User</p>
                    <hr></hr>
                    <div>
                        <ul>
                            <li className='my-2'>
                                <a href=""><span className='mx-2'><LanguageRoundedIcon /></span>Website <span>www.amjad.com</span></a>
                            </li>
                            <hr />
                            <li className='my-2'>
                                <a href=""><span className='mx-2 text-blue-500'><FacebookRounded /></span>Facebook Amjad ali Jamali</a>
                            </li>
                            <hr />
                            <li className='my-2'>
                                <a href=""><span className='mx-2'><GitHub /></span>Github amjad32github.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col w-full'>
                        <div className='bg-white rounded-sm p-3 shadow-md mx-2 my-2'>
                            <h2 className='text-center font-semibold text-xl my-3'>Personal Information</h2>
                            <form className="max-w-sm mx-auto">
                                <div className="mb-5">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Full Name</label>
                                    <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5 " placeholder="Amjad Ali Jamali" required />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5" required placeholder='amjadalijamali41@gmail.com'/>
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="Mobile" className="block mb-2 text-sm font-medium text-gray-900">Mobile</label>
                                    <input type="email" id="Mobile" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="+92 3262600358" required />
                                </div>
                                <button type="submit" className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none text-white font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center">Save Changes</button>
                            </form>
                        </div>
                        <div className='bg-red-600'>
                            other Analytics
                        </div>
                </div>
            </div>
        </>
    )
}

export default Profile
