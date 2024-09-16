import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import LogoutIcon from '@mui/icons-material/Logout';
import { MenuOutlined } from '@mui/icons-material';
import { Settings } from '@mui/icons-material';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Hamburger Menu for Small Screens */}
            <div className="sm:hidden fixed top-4 left-4 z-50">
                <button onClick={toggleSidebar} className="p-1 rounded-md bg-gray-950 text-white mt-1">
                    <MenuOutlined fontSize='medium'/>
                </button>
            </div> 

             {/* Sidebar */}
            <div className={`fixed top-0 left-0 w-64 h-full bg-blue-950 z-40 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}>
                <div>
                    <h2 className='my-3 text-left ms-4 p-1 font-bold text-3xl text-white'>Speakify</h2>
                </div>
                <div className='flex flex-column mt-8'>
                    <ul>
                        <li className='flex items-center mx-3 my-2 hover:bg-black hover:text-white p-3 rounded-xl'>
                            <Link to="/admin-dashboard" className='flex items-center space-x-2 text-white'>
                                <DashboardIcon fontSize="medium" />
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li className='flex items-center mx-3 my-2 hover:bg-black hover:text-white p-3 rounded-xl'>
                            <Link to="/admin/users" className='flex items-center space-x-2 text-white'>
                                <PersonIcon fontSize="medium" />
                                <span>Users</span>
                            </Link>
                        </li>
                        <li className='flex items-center mx-3 my-2 hover:bg-black hover:text-white p-3 rounded-xl'>
                            <Link to="/admin/feedback" className='flex items-center space-x-2 text-white'>
                                <MessageIcon fontSize="medium" />
                                <span>Feedbacks</span>
                            </Link>
                        </li>
                        <li className='flex items-center mx-3 my-2 hover:bg-black hover:text-white p-3 rounded-xl'>
                            <Link to="/admin/settings" className='flex items-center space-x-2 text-white'>
                                <Settings fontSize="medium" />
                                <span>Settings</span>
                            </Link>
                        </li>
                        <li className='flex items-center mx-3 my-2 hover:bg-black hover:text-white p-3 rounded-xl'>
                            <Link to="/Login" className='flex items-center space-x-2 text-white'>
                                <LogoutIcon fontSize="medium" />
                                <span>Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

             {/* Overlay for small screens */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
                    onClick={toggleSidebar}  // Close sidebar when clicking outside
                ></div>
            )}
        </>
    )
}

export default Sidebar
