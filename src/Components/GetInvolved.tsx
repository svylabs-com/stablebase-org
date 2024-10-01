import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faWallet, faCode, faDollarSign, faHandshake } from '@fortawesome/free-solid-svg-icons';

const GetInvolved: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-6">
      <div className="flex w-full justify-end">
        <Link to="/" className="text-gray-400 hover:text-orange-500 transition duration-300 mb-6">
          &larr; Back to Home
        </Link>
      </div>

      <div className="max-w-4xl w-full">
        {/* Why Get Involved Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-orange-500 mb-4">Why Get Involved?</h2>
          <p className="text-gray-400 mb-6">
            Stablebase is transforming decentralized finance (DeFi) by offering a stable, 0% interest stablecoin protocol that empowers users, liquidity providers, developers, and investors. By getting involved, you contribute to the future of a more decentralized and secure financial ecosystem.
          </p>
          {/* <img src="https://picsum.photos/200/305" alt="Why Get Involved Image" className="w-full h-64 object-cover mb-8" /> */}
        </div>

        {/* User Section */}
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FontAwesomeIcon icon={faUsers} className="text-orange-500 text-3xl mr-4" />
          User
        </h2>
        <div className="space-y-4 mb-8">
          <div>
            <h3 className="text-xl font-semibold">Borrow:</h3>
            <p className="text-gray-400">Users can borrow stablecoins by providing collateral in the form of ETH or ERC-20 tokens. Ensure sufficient collateralization to avoid liquidation.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Redeem:</h3>
            <p className="text-gray-400">Redeem your stablecoins by returning the borrowed amount and withdrawing your collateral. Check current exchange rates for accuracy.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Liquidate:</h3>
            <p className="text-gray-400">Participate in liquidation events when under-collateralized positions become eligible for liquidation. Secure assets at discounted prices.</p>
          </div>
          <img src="https://picsum.photos/200/306" alt="User Image" className="w-full h-64 object-cover mb-8" />
        </div>

        {/* Liquidity Providers Section */}
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FontAwesomeIcon icon={faWallet} className="text-orange-500 text-3xl mr-4" />
          Liquidity Providers
        </h2>
        <div className="space-y-4 mb-8">
          <div>
            <h3 className="text-xl font-semibold">Market Makers:</h3>
            <p className="text-gray-400">Provide liquidity on various exchanges by making markets for Stablebase tokens, ensuring stability and liquidity in the ecosystem.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Hedge Funds:</h3>
            <p className="text-gray-400">Leverage the Stablebase Protocol for arbitrage and hedging strategies. Learn how to maximize returns while providing liquidity in key markets.</p>
          </div>
          <img src="https://picsum.photos/200/307" alt="Liquidity Providers Image" className="w-full h-64 object-cover mb-8" />
        </div>

        {/* Developer Section */}
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FontAwesomeIcon icon={faCode} className="text-orange-500 text-3xl mr-4" />
          Developer
        </h2>
        <div className="space-y-4 mb-8">
          <div>
            <h3 className="text-xl font-semibold">Github Link:</h3>
            <a href="https://github.com/rohitbharti279" className="text-gray-400 hover:text-orange-500 transition duration-300">
              Visit our Github
            </a>
            <p className="text-gray-400 mt-2">Contribute to the Stablebase codebase, improve smart contracts, and explore our open-source projects. We welcome pull requests and feature suggestions!</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Whitepaper:</h3>
            <a href="https://github.com/svylabs/stablebase/blob/main/WHITEPAPER.pdf" className="text-gray-400 hover:text-orange-500 transition duration-300">
              Read our Whitepaper
            </a>
            <p className="text-gray-400 mt-2">Deep dive into the technology and economics behind Stablebase. Our whitepaper outlines how we aim to stabilize the DeFi ecosystem.</p>
          </div>
          <img src="https://picsum.photos/200/308" alt="Developer Image" className="w-full h-64 object-cover mb-8" />
        </div>

        {/* Investors Section */}
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FontAwesomeIcon icon={faDollarSign} className="text-orange-500 text-3xl mr-4" />
          Investors
        </h2>
        <div className="space-y-4 mb-8">
          <div>
            <h3 className="text-xl font-semibold">Funding:</h3>
            <p className="text-gray-400">We are actively seeking investors to fund the development and expansion of the Stablebase Protocol. If you are interested in supporting the future of decentralized finance, get in touch.</p>
          </div>
          <img src="https://picsum.photos/200/309" alt="Investors Image" className="w-full h-64 object-cover mb-8" />
        </div>

        {/* Partners Section */}
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FontAwesomeIcon icon={faHandshake} className="text-orange-500 text-3xl mr-4" />
          Partners
        </h2>
        <div className="space-y-4">
          <p className="text-gray-400">Stablebase is proud to partner with industry leaders to drive innovation and growth in the DeFi space. Our partners play a crucial role in expanding our ecosystem and providing greater stability.</p>
          <p className="text-gray-400">Interested in partnering with us? <a href="#" className="text-orange-500 hover:underline">Contact us</a> to learn more.</p>
          <img src="https://picsum.photos/200/310" alt="Partners Image" className="w-full h-64 object-cover mb-8" />
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
