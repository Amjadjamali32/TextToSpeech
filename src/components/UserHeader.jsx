import React, { useState } from 'react';
import logo from "../assets/logo.png"
import user from "../assets/user.png"
import { Link } from 'react-router-dom';

const UserHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenProfile, setIsOpenProfile] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleProfile = () => {
        setIsOpenProfile(!isOpenProfile);
    };

    return (
        <>
            <nav className="bg-white fixed w-full shadow-sm shadow-black z-50">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/HomePage" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="Speakify Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Speakify</span>
                    </Link>
                    <div className="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button 
                            type="button" 
                            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" 
                            id="user-menu-button" 
                            aria-expanded={isOpenProfile} 
                            onClick={toggleProfile}
                        >
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full bg-white" src={user} alt="user photo" />
                        </button>
                        {isOpenProfile && (
                            <div className="absolute top-10 right-0 z-50 my-4 text-base list-none rounded-lg shadow bg-gray-600" id="user-dropdown">
                                <div className="px-4 py-3">
                                    <span className="block text-sm text-gray-900 dark:text-white text-center">Amjad Ali</span>
                                    <span className="block text-sm text-gray-500 truncate dark:text-gray-400 text-center">amjadalijamali41@gmail.com</span>
                                </div>
                                <hr />
                                <ul className="py-2" aria-labelledby="user-menu-button">
                                    <li>
                                        <Link to="/Profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">My Profile</Link>
                                    </li>
                                    <li>
                                        <Link to="/AccountSettings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Account Settings</Link>
                                    </li>
                                    <li>
                                        <Link to="/NeedHelp" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Need Help?</Link>
                                    </li>
                                    <li>
                                        <Link to="/HomePage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign Out</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                        <button 
                            data-collapse-toggle="navbar-user" 
                            type="button" 
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                            aria-controls="navbar-user" 
                            aria-expanded={isOpen} 
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                    </div>
                    {isOpen && (
                        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`} id="navbar-user">
                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-slate-500">
                                <li>
                                    <Link to="/HomePage" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
                                </li>
                                <li>
                                    <Link to="/About" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                                </li>
                                <li>
                                    <Link to="/Contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </>
    )
}

export default UserHeader;
