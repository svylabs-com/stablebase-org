import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faWallet, faCode, faDollarSign, faHandshake, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import GradientBackgroundContainer from "./GradientBackgroundContainer/GradientBackgroundContainer";
import ContactUs from './ContactUs';
import Footer from './Footer';

const GetInvolved: React.FC = () => {
  return (
    <section className='space-y-8'>
      <div className="text-gray-400 min-h-screen flex flex-col items-center justify-center px-6 lg:px-10">
        <div className="flex w-full justify-end">
          <Link to="/" className="text-[#808080] hover:text-[#FEBD38] transition duration-300 mb-6" title="Back to Home">
            <FontAwesomeIcon icon={faArrowLeft} className="text-2xl" />
          </Link>
        </div>

        <div className="w-full max-w-5xl space-y-8">
          {/* Why Get Involved Section */}
          <div className="text-center space-y-4">
            <h2 className='text-2xl lg:text-3xl font-bold text-white text-center tracking-wide'>
              Why Get Involved?</h2>
            <p className="text-[#808080]">
              Be a part of the stablecoin project that is being built from the ground up, with a focus on immutability and decentralization. There are several ways you can get involved in our ecosystem.
            </p>
          </div>

          {/* Sections Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* User Section */}
            <GradientBackgroundContainer colorRight="#fd90d1b3">
              <div className="space-y-4 p-4">
                <h2 className="text-2xl font-semibold flex items-center text-gray-100 tracking-wide">
                  <FontAwesomeIcon icon={faUsers} className="text-3xl mr-4 text-[#fd90d1b3]" />
                  Users
                </h2>
                <div>
                  <h3 className="text-xl font-semibold text-gray-200">Join our community</h3>
                  <p className="">Join our community on twitter, discord, telegram etc, and ask questions, provide feedback, etc.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-200">Borrow</h3>
                  <p className="">Deposit $ETH collateral to borrow $DFID, a USD backed stablecoins</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-200">Use $DFID</h3>
                  <p className="">Use $DFID however you wish. It is supposed to hold a stable value</p>
                </div>
              </div>
            </GradientBackgroundContainer>

            {/* Liquidity Providers Section */}
            <GradientBackgroundContainer colorRight="#67D558b3">
              <div className="space-y-4 p-4">
                <h2 className="text-2xl font-semibold flex items-center text-gray-100 tracking-wide">
                  <FontAwesomeIcon icon={faWallet} className="text-3xl mr-4 text-[#67D558b3]" />
                  Yield Farmers
                </h2>
                <div>
                  <h3 className="text-xl font-semibold text-gray-200">Earn Rewards</h3>
                  <p className="">Users can deposit $DFID stablecoins in stability pool and deposit in stability pool to earn $DFIRE Rewards</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-200">Earn Protocol Fees </h3>
                  <p className="">Participants staking $DFID in stability pool earn 90% of protocol fees and participants staking $DFIRE in DFIRE Staking pool earn 10% protocol fees</p>
                </div>
              </div>
            </GradientBackgroundContainer>

            {/* Developer Section */}
            <GradientBackgroundContainer colorRight="#78CEF9b3">
              <div className="space-y-4 p-4">
                <h2 className="text-2xl font-semibold flex items-center text-gray-100 tracking-wide">
                  <FontAwesomeIcon icon={faCode} className="text-3xl mr-4 text-[#78CEF9b3]" />
                  Developer
                </h2>
                <div>
                  <div className="flex flex-col gap-0.5 lg:flex-row lg:justify-between lg:items-center">
                    <h3 className="text-xl font-semibold text-gray-200">Contribute / Review code</h3>
                    <a href="https://github.com/svylabs/stablebase" className="text-[#78CEF9b3] hover:text-[#a6defab3] transition duration-300 cursor-pointer">
                      Visit our Github
                    </a>
                  </div>
                  <p className=" mt-2">Contribute to the Stablebase codebase, improve the contracts, and explore our other open-source projects. We welcome pull requests and feature suggestions!</p>
                </div>
                <div>
                <div className="flex flex-col gap-0.5 lg:flex-row lg:justify-between lg:items-center">
                  <h3 className="text-xl font-semibold text-gray-200">Contribute to the protocol</h3>
                  <a href="https://github.com/svylabs/stablebase/blob/main/WHITEPAPER.pdf" className="text-[#78CEF9b3] hover:text-[#a6defab3] transition duration-300 cursor-pointer">
                    Read our Whitepaper
                  </a>
                  </div>
                  <p className=" mt-2">Deep dive into the technology and economics behind Stablebase. Our whitepaper outlines how the protocol works</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-200">Earn rewards</h3>
                  <p className=" mt-2">Earn rewards for contributing to the protocol</p>
                </div>
              </div>
            </GradientBackgroundContainer>

            {/* Investors Section */}
            <GradientBackgroundContainer colorRight="#faaf25b3">
              <div className="space-y-4 p-4">
                <h2 className="text-2xl font-semibold flex items-center text-gray-100 tracking-wide">
                  <FontAwesomeIcon icon={faDollarSign} className="text-3xl mr-4 text-[#faaf25b3]" />
                  Investors
                </h2>
                <div>
                  <h3 className="text-xl font-semibold text-gray-200">Invest</h3>
                  <p className="">Mint $DFID and $DFIRE tokens yourselves by depositing collateral and staking to StabilityPool</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-200">Setup Liquidity Pools</h3>
                  <p className="">Setup Uniswap Liquidity Pools to make it easier for everyone to access</p>
                </div>
              </div>
            </GradientBackgroundContainer>

            {/* 
          <GradientBackgroundContainer colorRight="#7ed372b3">
          <div className="space-y-4 p-4">
            <h2 className="text-2xl font-semibold flex items-center">
              <FontAwesomeIcon icon={faHandshake} className="text-yellow-500 text-3xl mr-4" />
              Partners
            </h2>
            <p className="text-gray-400">Stablebase is proud to partner with industry leaders to drive innovation and growth in the DeFi space. Our partners play a crucial role in expanding our ecosystem and providing greater stability.</p>
            <p className="text-gray-400">Interested in partnering with us? <a href="#" className="text-yellow-500 hover:underline">Contact us</a> to learn more.</p>
          </div>
          </GradientBackgroundContainer>
          */}
          </div>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </section>
  );
};

export default GetInvolved;
