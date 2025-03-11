import React, { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="p-4">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <a href="/" className="flex items-center">
                    <span className="text-white font-bold text-xl">My Website</span> {/* Replace with your logo/brand */}
                </a>

                <button onClick={toggleMobileMenu} type="button" className="inline-flex items-center p-2 text-white rounded-md lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200">
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                    </svg>
                </button>

                <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:block lg:flex lg:items-center lg:w-auto w-full`} id="mobile-menu">
                    <ul className="flex flex-col mt-4 lg:flex-row lg:justify-end lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium">
                        <li>
                            <a href="/" className="block py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:p-0 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-white">Home</a>
                        </li>
                        <li>
                            <a href="/about" className="block py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:p-0 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-white">About</a>
                        </li>
                        <li>
                            <a href="/services" className="block py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:p-0 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-white">Services</a>
                        </li>
                        <li>
                            <a href="/contact" className="block py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:p-0 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-white">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;