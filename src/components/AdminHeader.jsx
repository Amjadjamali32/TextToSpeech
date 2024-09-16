import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import user from '../assets/user.png'
import { SearchOutlined } from '@mui/icons-material';

const AdminHeader = () => {
    const [isOpenProfile, setIsOpenProfile] = useState(false);
    const [isSearchToggle , setToggleSearch] = useState(false)

    const toggleSearch = () => {
        setToggleSearch(!isSearchToggle);
    }

    const toggleProfile = () => {
        setIsOpenProfile(!isOpenProfile);
    };
    
    return (
        <nav className="bg-white fixed w-full shadow-sm shadow-black z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
            <Link to="/AdminPage" className="flex items-center space-x-3 rtl:space-x-reverse">
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
                        </ul>
                    </div>
                )}
            </div>
            {/* Search Button and Search Box */}
            <div className="flex items-center space-x-3">
                    <button 
                        onClick={toggleSearch} 
                        className="px-4 py-2 rounded-md"
                        aria-expanded={isSearchToggle}
                    >
                        <span>
                            <SearchOutlined />
                        </span>
                    </button>

                    {/* Search Box - hidden by default on small screens, toggles visibility */}
                    <input 
                        type="text" 
                        className={`transition duration-300 ease-in-out bg-gray-100 mt-4 px-4 py-2 rounded-md ${
                            isSearchToggle ? 'block' : 'hidden'
                        } sm:block sm:w-64`}
                        placeholder="Search here..."
                    />
                </div>
        </div>
    </nav>
    );
};

export default AdminHeader;
