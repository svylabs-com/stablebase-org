import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faWallet, faCode, faDollarSign, faHandshake, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import ContactUs from './ContactUs';
import Footer from './Footer';

const GetInvolved: React.FC = () => {
  return (
    <>
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
              Users
            </h2>
            <div>
              <h3 className="text-xl font-semibold">Join our community</h3>
              <p className="text-gray-400">Join our community on twitter, discord, telegram etc, and ask questions, provide feedback, etc.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Borrow</h3>
              <p className="text-gray-400">Deposit $ETH collateral to borrow $DFID, a USD backed stablecoins</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Use $DFID</h3>
              <p className="text-gray-400">Use $DFID however you wish. It is supposed to hold a stable value</p>
            </div>
          </div>

          {/* Liquidity Providers Section */}
          <div className="space-y-4 p-4 border border-gray-700 rounded-lg">
            <h2 className="text-2xl font-semibold flex items-center">
              <FontAwesomeIcon icon={faWallet} className="text-violet-500 text-3xl mr-4" />
              Yield Farmers
            </h2>
            <div>
              <h3 className="text-xl font-semibold">Earn Rewards</h3>
              <p className="text-gray-400">Users can deposit $DFID stablecoins in stability pool and deposit in stability pool to earn $DFIRE Rewards</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Earn Protocol Fees </h3>
              <p className="text-gray-400">Participants staking $DFID in stability pool earn 90% of protocol fees and participants staking $DFIRE in DFIRE Staking pool earn 10% protocol fees</p>
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
              <p className="text-gray-400 mt-2">Contribute to the Stablebase codebase, improve the contracts, and explore our other open-source projects. We welcome pull requests and feature suggestions!</p>
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
              <p className="text-gray-400">Mint $DFID and $DFIRE tokens yourselves by depositing collateral and staking to StabilityPool</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Setup Liquidity Pools</h3>
              <p className="text-gray-400">Setup Uniswap Liquidity Pools</p>
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
    <ContactUs />
    <Footer /> 
    </>
  );
};

export default GetInvolved;
