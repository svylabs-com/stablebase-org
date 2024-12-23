import React from 'react';
import sridharImage from '../assets/clients-image/sridhar.jpeg';
import gopalImage from '../assets/clients-image/gopal.jpeg';
import rohitImage from '../assets/clients-image/rohit.jpg';
import prajnaImage from '../assets/clients-image/prajna.png';
import googleIcon from "../assets/svg/google-brands-solid.svg";
import instagramIcon from "../assets/svg/instagram-brands-solid.svg";
import facebookIcon from "../assets/svg/facebook-brands-solid.svg";
import twitterIcon from "../assets/svg/twitter-brands-solid.svg";
import githubIcon from "../assets/svg/github-brands-solid.svg";
import linkedinIcon from "../assets/svg/linkedin-brands-solid.svg";

const ExpertTeam: React.FC = () => {
    const teamMembers = [
        {
            name: 'Sridhar',
            role: 'Core Contributor',
            image: sridharImage,
            linkedin: 'https://www.linkedin.com/in/sridhar-g-b10902284/',
            github: 'https://github.com/svylabs',
            twitter: 'https://x.com/sginams'
        },
        {
            name: 'Gopalakrishnan',
            role: 'Contributor - Protocol',
            image: gopalImage,
            linkedin: 'https://www.linkedin.com/in/gopalakrishnan-ganesan-786618294/?originalSubdomain=in',
        },
        {
            name: 'Rohit Bharti',
            role: 'Contributor - Full Stack',
            image: rohitImage,
            linkedin: 'https://www.linkedin.com/in/rohit-bharti-b9a437211/',
            github: 'https://github.com/rohitbharti279',
            twitter: 'https://x.com/RohitBh44771576'
        },
        {
            name: 'Prajna',
            role: 'Contributor - Frontend',
            image: prajnaImage,
        },
    ];

    return (
        <section className="my-10 flex flex-col items-center m-3 mt-5 gap-3">
            <h2 className="font-bold text-center pt-2 text-2xl md:text-3xl">
                Our <span className="text-violet-600">Team</span>
            </h2>
            <p className="text-center px-4 md:px-10 text-xs">
                
            </p>

            {/* Team Members */}
            <div className="flex flex-col gap-5 md:flex-row justify-center pt-4">
                {teamMembers.map((member, index) => (
                    <div key={index} className="flex flex-col items-center p-6 px-14 md:p-4 md:px-0 lg:px-4 border border-gray-700 rounded-md shadow-lg">
                        <img src={member.image} alt={member.name} className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full" />
                        <p className="font-bold mt-3 text-center text-lg text-nowrap">{member.name}</p>
                        <p className="text-gray-400 text-nowrap">{member.role}</p>

                        {/* Social Media Icons */}
                        <div className="flex flex-row gap-5 md:gap-3 mt-3">
                            {member.linkedin && (
                                <a
                                    className="bg-white p-2 rounded-full transition duration-200 ease-in-out hover:bg-blue-200 hover:scale-110 hover:shadow-lg"
                                    href={member.linkedin}
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    <img src={linkedinIcon} alt='LinkedIn' className='w-3 h-3' />
                                </a>
                            )}
                            {member.github && (
                                <a
                                    className="bg-white p-2 rounded-full transition duration-200 ease-in-out hover:bg-blue-200 hover:scale-110 hover:shadow-lg"
                                    href={member.github}
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    <img src={githubIcon} alt='GitHub' className='w-3 h-3' />
                                </a>
                            )}
                            {member.twitter && (
                                <a
                                    className="bg-white p-2 rounded-full transition duration-200 ease-in-out hover:bg-blue-200 hover:scale-110 hover:shadow-lg"
                                    href={member.twitter}
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    <img src={twitterIcon} alt='Twitter' className='w-3 h-3' />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExpertTeam;
