import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faWallet, faCode, faDollarSign, faHandshake, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const GetInvolved: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen p-6 flex flex-col items-center justify-center md:px-6 lg:px-10">
      <div className="flex w-full justify-end">
        <Link to="/" className="text-gray-400 hover:text-violet-500 transition duration-300 mb-6" title="Back to Home">
          <FontAwesomeIcon icon={faArrowLeft} className="text-2xl" />
        </Link>
      </div>

      <div className="max-w-4xl w-full">
        {/* Why Get Involved Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-violet-500 mb-4">Why Get Involved?</h2>
          <p className="text-gray-400 mb-6">
            Be a part of the stablecoin project that is being built from the ground up, with a focus on immutability and decentralization. There are several ways you can get involved in our ecosystem.
          </p>
        </div>

        {/* Sections Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* User Section */}
          <div className="space-y-4 p-4 border border-gray-700 rounded-lg">
            <h2 className="text-2xl font-semibold flex items-center">
              <FontAwesomeIcon icon={faUsers} className="text-violet-500 text-3xl mr-4" />
              User
            </h2>
            <div>
              <h3 className="text-xl font-semibold">Join our community</h3>
              <p className="text-gray-400">Join our community on twitter, discord, telegram etc, and ask questions, provide feedback, etc.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Participate in testnet and Earn Rewards</h3>
              <p className="text-gray-400">Users can participate in testnet so that we can finetune our systems, while earning rewards for participation</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Provide Liquidity and earn rewards after Launch</h3>
              <p className="text-gray-400">You can borrow in mainnet after launch, or provide liquidity in stability pool and earn rewards from protocol fees.</p>
            </div>
          </div>

          {/* Liquidity Providers Section */}
          <div className="space-y-4 p-4 border border-gray-700 rounded-lg">
            <h2 className="text-2xl font-semibold flex items-center">
              <FontAwesomeIcon icon={faWallet} className="text-violet-500 text-3xl mr-4" />
              Rate Governors
            </h2>
            <div>
              <h3 className="text-xl font-semibold">Participate in testnet</h3>
              <p className="text-gray-400">As you will have a real skin in the game in the stablebase ecosystem by setting parameters like target rate, reserve ratio and maintaining the stability of the system, testnet participation is crucial to fine tune your algorithms, software that automates the process.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Earn Testnet Rewards</h3>
              <p className="text-gray-400">Earn Rewards for particpating in testnet that can be converted to mainnet tokens at launch</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Become a rate governor at Launch</h3>
              <p className="text-gray-400">Put your automated system to use as you borrow from the protocol and set the rates for the system.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Earn from fee paid</h3>
              <p className="text-gray-400">As a rate governor, protocol provides an amplified yield opportunity from the fee paid to the protocol</p>
            </div>
          </div>

          {/* Developer Section */}
          <div className="space-y-4 p-4 border border-gray-700 rounded-lg">
            <h2 className="text-2xl font-semibold flex items-center">
              <FontAwesomeIcon icon={faCode} className="text-violet-500 text-3xl mr-4" />
              Developer
            </h2>
            <div>
              <h3 className="text-xl font-semibold">Contribute / Review code</h3>
              <a href="https://github.com/svylabs/stablebase" className="text-gray-400 hover:text-violet-500 transition duration-300">
                Visit our Github
              </a>
              <p className="text-gray-400 mt-2">Contribute to the Stablebase codebase, improve smart contracts, and explore our open-source projects. We welcome pull requests and feature suggestions!</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Contribute to the protocol</h3>
              <a href="https://github.com/svylabs/stablebase/blob/main/WHITEPAPER.pdf" className="text-gray-400 hover:text-violet-500 transition duration-300">
                Read our Whitepaper
              </a>
              <p className="text-gray-400 mt-2">Deep dive into the technology and economics behind Stablebase. Our whitepaper outlines how the protocol works</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Earn rewards</h3>
              <a href="https://github.com/svylabs/stablebase/blob/main/WHITEPAPER.pdf" className="text-gray-400 hover:text-violet-500 transition duration-300">
                Earn rewards for contributing to the protocol
              </a>
              <p className="text-gray-400 mt-2"></p>
            </div>
          </div>

          {/* Investors Section */}
          <div className="space-y-4 p-4 border border-gray-700 rounded-lg">
            <h2 className="text-2xl font-semibold flex items-center">
              <FontAwesomeIcon icon={faDollarSign} className="text-violet-500 text-3xl mr-4" />
              Investors
            </h2>
            <div>
              <h3 className="text-xl font-semibold">Invest</h3>
              <p className="text-gray-400">We are actively seeking investors to fund the development and expansion of the Stablebase Protocol. If you are interested in supporting the future of decentralized finance, get in touch.</p>
            </div>
          </div>

          {/* 
          <div className="space-y-4 p-4 border border-gray-700 rounded-lg">
            <h2 className="text-2xl font-semibold flex items-center">
              <FontAwesomeIcon icon={faHandshake} className="text-violet-500 text-3xl mr-4" />
              Partners
            </h2>
            <p className="text-gray-400">Stablebase is proud to partner with industry leaders to drive innovation and growth in the DeFi space. Our partners play a crucial role in expanding our ecosystem and providing greater stability.</p>
            <p className="text-gray-400">Interested in partnering with us? <a href="#" className="text-violet-500 hover:underline">Contact us</a> to learn more.</p>
          </div>
          */}
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
