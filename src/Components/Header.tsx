import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import StablebaseIcon from "../assets/photos/stablebase.png";

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
        <header className="shadow-md sticky top-0 z-50 p-4 md:px-6 lg:px-10 flex justify-between items-center bg-[#161619]">
            <Link to="/" className="flex items-center">
                <img src={StablebaseIcon} alt="Logo" className="h-12 w-12 mr-3 rounded-full" />
                <h4 className="text-3xl font-bold tracking-wide">
                    StableBase
                </h4>
            </Link>

            <nav className="hidden md:flex items-center">
                <ul className='flex gap-5 lg:gap-8 items-center text-[#E9E9E9] lg:font-medium'>
                    <li className="group relative">
                        <a
                            href="https://github.com/svylabs/stablebase/blob/main/WHITEPAPER.pdf"
                            className="group-hover:text-[#FEBD38] transition-colors duration-300"
                            target='_blank'
                        >
                            Docs
                        </a>
                        <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-[#FEBD38] group-hover:w-full transition-all duration-300"></span>
                    </li>
                    <li className="group relative">
                        <Link to="/get-involved"
                            className="group-hover:text-[#FEBD38] transition-colors duration-300">
                            Get Involved
                        </Link>
                        <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-[#FEBD38] group-hover:w-full transition-all duration-300"></span>
                    </li>
                    {/* <li>
                        <a href="https://app.stablebase.org" target="_blank" rel="noopener noreferrer"
                            className="p-3 px-5 rounded-xl bg-gradient-to-b from-[#FFD572] to-[#FEBD38] text-[#161619] font-semibold shadow-[0px_10px_20px_0px_#FBCC6440]">
                            Launch App
                        </a>
                    </li> */}
                    <li className="relative group">
                        <a href="https://app.stablebase.org" target="_blank" rel="noopener noreferrer"
                            className="flex items-center justify-center p-1.5 px-5 rounded-3xl shadow-[0px_10px_20px_0px_#FBCC6440] border-[1.5px] border-[#FEBD38] hover:border-[#906f2d] hover:text-white hover:rounded-none transition duration-300 ease-in-out">
                            <span className="transition-all duration-300 ease-in-out group-hover:translate-x-2">
                                Launch App
                            </span>
                            <span className="absolute left-2 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:left-2">→</span>
                        </a>
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
                <div
                    ref={modalRef}
                    className="md:hidden absolute top-16 right-4 w-[90%] max-w-xs bg-black/80 backdrop-blur-md shadow-lg rounded-lg flex flex-col items-center p-4 gap-3 transition-all duration-300 ease-in-out "
                >
                    <a
                        href="https://github.com/svylabs/stablebase/blob/main/WHITEPAPER.pdf"
                        className="text-gray-300 hover:text-[#FEBD38] font-medium w-full text-center py-2"
                        target='_blank'
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Docs
                    </a>

                    <Link
                        to="/get-involved"
                        className="relative inline-block rounded-3xl p-[2px] bg-gradient-to-b from-[#FFD572] to-[#FEBD38] w-full text-center"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <span className="block px-6 py-1.5 bg-black text-gray-300 font-semibold rounded-3xl shadow-lg hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out">
                            Get Involved
                        </span>
                    </Link>

                    <a
                        href="https://app.stablebase.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-block rounded-3xl p-[2px] bg-gradient-to-b from-[#FFD572] to-[#FEBD38] w-full text-center"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <span className="block px-6 py-1.5 bg-black text-gray-300 font-semibold rounded-3xl shadow-lg hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out">
                            Launch App
                        </span>
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;