import React from 'react';
import logo from "../assets/photos/logo.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faDiscord, faYoutube, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Logo and Info */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8">
          {/* Logo and Heading */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <img src={logo} alt="StableBase Logo" className="w-20 h-20 object-cover rounded-full border-2 border-blue-500" />
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-white">StableBase</h1>
              <p className="text-sm text-gray-400 mt-2">Open source stablecoin protocol</p>
            </div>
          </div>

          {/* Info Text */}
          <div className="mt-6 md:mt-0 max-w-lg text-gray-400 text-center md:text-left leading-relaxed">
            <p>
              StableBase is an open source, innovative market-driven protocol for minting stablecoins with unique stability mechanism and provides flexibile and predictable borrowing experience.
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center md:justify-end space-x-8 mb-6">
          <a href="https://x.com/i/communities/1817577213891334182" target="_blank" title='Twitter' className="text-gray-400 hover:text-blue-600 transition duration-300">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://github.com/svylabs" target="_blank" title='Github' className="text-gray-400 hover:text-gray-600 transition duration-300">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://discord.gg/NSrR8qRd" target="_blank" title='Discord' className="text-gray-400 hover:text-indigo-600 transition duration-300">
            <FontAwesomeIcon icon={faDiscord} size="2x" />
          </a>
          <a href="https://t.me/stablebase_org" target="_blank" title='Telegram' className="text-gray-400 hover:text-cyan-600 transition duration-300">
            <FontAwesomeIcon icon={faTelegram} size="2x" />
          </a>
        </div>



        {/* Divider Line */}
        <hr className="border-gray-700 mb-6" />

        {/* Copyright and Links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            &copy; {new Date().getFullYear()} StableBase. All rights reserved.
          </div>
          <div className="text-center">
            <a href="#" className="hover:underline text-gray-400">Privacy Policy</a> |
            <a href="#" className="hover:underline text-gray-400 mx-2">Terms of Service</a> |
            <a href="mailto:info@stablebase.org" target="_blank" className="hover:underline text-gray-400 ml-2">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
