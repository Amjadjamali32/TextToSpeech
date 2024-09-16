import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="rounded-lg text-white">
                <div className="w-full max-w-screen-xl p-2 md:py-8 bg-slate-500">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <Link to="/HomePage" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={logo} className="h-8" alt="Speakify Logo" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap">Speakify</span>
                        </Link>
                        <ul className="flex flex-wrap flex-col items-start mb-6 text-sm font-medium text-gray-800 sm:mb-0">
                            <li>
                                <Link to="/About" className="hover:underline hover:text-yellow-300 me-4 md:me-6">About</Link>
                            </li>
                            <li>
                                <Link to="/HomePage" className="hover:underline hover:text-yellow-300 me-4 md:me-6">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="/HomePage" className="hover:underline hover:text-yellow-300 me-4 md:me-6">Home</Link>
                            </li>
                            <li>
                                <Link to="/Contact" className="hover:underline hover:text-yellow-300">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 sm:mx-auto lg:my-8" />
                    <p className="block text-center text-sm sm:text-center">© 2024 <Link to="/HomePage" className="hover:underline hover:text-yellow-300">Speakify™</Link>. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
