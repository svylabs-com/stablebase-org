import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/photos/logo.jpeg";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            modalRef.current && !modalRef.current.contains(event.target as Node) &&
            buttonRef.current && !buttonRef.current.contains(event.target as Node)
        ) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header className="shadow-md sticky top-0 z-50 p-4 md:px-6 lg:px-10 flex justify-between items-center">
            <Link to="/" className="flex items-center">
                <img src={logo} alt="Logo" className="h-12 w-12 mr-3 rounded-full" />
                {/* <h4 className="text-2xl font-bold">Stablebase</h4> */}
                <h4 className="text-3xl font-bold bg-gradient-to-r from-stone-300 to-violet-600 text-transparent bg-clip-text">
                    Stablebase
                </h4>

            </Link>

            <nav className="hidden md:flex items-center">
                <ul className='flex gap-5 lg:gap-8 items-center'>
                    {/*
                    <li className="group relative">
                        <a
                            href="#team"
                            className="text-gray-300 lg:font-medium group-hover:text-orange-500 transition-colors duration-300"
                        >
                            Team
                        </a>
                        <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                    </li>*/}
                    <li className="group relative">
                        <a
                            href="#docs"
                            className="text-gray-300 lg:font-medium group-hover:text-orange-500 transition-colors duration-300"
                        >
                            Docs
                        </a>
                        <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                    </li>
                    <li>
                        <button onClick={() => { window.location.href = '/get-involved'; }}
                            className="px-6 py-2 border-2 border-violet-600 text-gray-300 lg:font-semibold rounded-3xl shadow-lg hover:bg-violet-700 hover:border-violet-300 hover:text-white transition duration-300 ease-in-out">
                            Get Involved
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button ref={buttonRef} onClick={toggleMenu} className="focus:outline-none">
                    <svg
                        className="w-6 h-6 text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div ref={modalRef} className="md:hidden absolute top-16 right-4 w-48 bg-slate-800 shadow-lg rounded-lg flex flex-col items-start p-4 gap-3">
                    {/*
                    <a href="#team" className="text-gray-300 hover:text-violet-500 font-medium w-full">
                        Team
                    </a>
                    */}
                    <a href="https://github.com/svylabs/stablebase/blob/main/WHITEPAPER.pdf" className="text-gray-300 hover:text-violet-500 font-medium w-full">
                        Docs
                    </a>
                    <button onClick={() => { window.location.href = '/get-involved'; }} className="w-full px-6 py-2 border-2 border-violet-600 text-gray-300 font-semibold rounded-3xl shadow-lg hover:bg-violet-700 hover:border-violet-300 hover:text-white transition duration-300 ease-in-out">
                        Get Involved
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
