import React from 'react';
import murielImage from '../assets/clients-image/muriel.png';
import johnImage from '../assets/clients-image/john.png';
import clayImage from '../assets/clients-image/clay.png';
import dougImage from '../assets/clients-image/doug.png';
import googleIcon from "../assets/svg/google-brands-solid.svg";
import instagramIcon from "../assets/svg/instagram-brands-solid.svg";
import twitterIcon from "../assets/svg/twitter-brands-solid.svg";
import facebookIcon from "../assets/svg/facebook-brands-solid.svg";

const ExpertTeam: React.FC = () => {
    const teamMembers = [
        {
            name: 'Muriel Whee',
            role: 'Marketing Manager',
            image: murielImage,
        },
        {
            name: 'John Doe',
            role: 'Marketing Manager',
            image: johnImage,
        },
        {
            name: 'Clay Porter',
            role: 'Marketing Manager',
            image: clayImage,
        },
        {
            name: 'Doug Norm',
            role: 'Marketing Manager',
            image: dougImage,
        },
    ];

    return (
        <section className="my-10 flex flex-col items-center m-3 mt-5 gap-3">
            <h2 className="font-bold text-center pt-2 text-2xl md:text-3xl">
                Our Expert Team <span className="text-blue-400">Members</span>
            </h2>
            <p className="text-center px-4 md:px-10 text-xs">
                It is a long established fact that a reader will be distracted by the readable
                content. It is a long established fact that a reader
            </p>

            {/* Team Members */}
            <div className="flex flex-col gap-5 md:flex-row justify-center pt-4">
                {teamMembers.map((member, index) => (
                    <div key={index} className="flex flex-col items-center p-6 px-16 md:p-4 md:px-0 border border-gray-700 rounded-md shadow-lg">
                        <img src={member.image} alt={member.name} className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full" />
                        <p className="font-bold mt-3 text-center text-lg">{member.name}</p>
                        <p className="text-gray-400">{member.role}</p>

                        {/* Social Media Icons */}
                        <div className="flex flex-row gap-5 md:gap-3 mt-3">
                            <a className="bg-white p-2 rounded-full transition duration-200 ease-in-out hover:bg-blue-200 hover:scale-110 hover:shadow-lg" href="#"><img src={googleIcon} alt='googleIcon' className='w-3 h-3'></img></a>
                            <a className="bg-white p-2 rounded-full transition duration-200 ease-in-out hover:bg-blue-200 hover:scale-110 hover:shadow-lg" href="#"><img src={instagramIcon} alt='instagramIcon' className='w-3 h-3'></img></a>
                            <a className="bg-white p-2 rounded-full transition duration-200 ease-in-out hover:bg-blue-200 hover:scale-110 hover:shadow-lg" href="#"><img src={twitterIcon} alt='twitterIcon' className='w-3 h-3'></img></a>
                            <a className="bg-white p-2 rounded-full transition duration-200 ease-in-out hover:bg-blue-200 hover:scale-110 hover:shadow-lg" href="#"><img src={facebookIcon} alt='facebookIcon' className='w-3 h-3'></img></a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExpertTeam;
