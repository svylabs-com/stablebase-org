import React from 'react';
import protocolImage from '../../assets/photos/protocol.png';

const What: React.FC = () => {
    return (
        <section className="my-5 lg:px-10">
            <h1 className="p-2 md:mb-5 md:py-4 font-bold text-2xl md:text-3xl lg:text-4xl px-4 md:px-6 lg:px-0 lg:mx-auto lg:flex items-center justify-center">
                Welcome to Stablebase Protocol
            </h1>
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
                {/* Left Side Image (Visible as background on mobile) */}
                <div className="relative w-full lg:w-1/2 lg:bg-gray-400 lg:p-6 rounded-md">
                    <img
                        src={protocolImage}
                        alt="Protocol Overview"
                        className="w-full h-full object-cover md:h-[30rem] lg:static lg:shadow-lg lg:rounded-md"
                    />

                    {/* Overlay Content for mobile */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 lg:hidden overflow-y-auto max-h-full p-6 flex flex-col justify-center items-center text-center">
                        <div className="overflow-y-auto max-h-[80vh] w-full"> {/* Ensuring scrollable area */}
                            <h2 className="text-lg md:text-3xl font-semibold mb-4 text-white">
                                {/* Stablebase Protocol Overview */}
                                WHAT WE ARE BUILDING
                            </h2>
                            <p className="text-base leading-relaxed mb-4 text-white">
                                The Stablebase Protocol is a decentralized base layer stablecoin mechanism
                                that allows users to issue a USD-pegged stablecoin, SBD (StableBase Dollar),
                                by collateralizing assets. Our protocol is designed with 0% interest rates,
                                flexible collateral options, and user-governed origination fees to ensure
                                stability, efficiency, and widespread adoption.
                            </p>
                            <p className="text-base leading-relaxed mb-4 text-white">
                                Users can deposit supported assets, borrow against them, repay their loans
                                with no interest, and withdraw collateral as needed. The system is governed
                                by a decentralized oracle mechanism, ensuring accurate pricing for all assets
                                used in the protocol.
                            </p>
                            <button className="px-6 py-3 mt-4 bg-violet-600 text-white font-semibold rounded-lg shadow-lg hover:bg-violet-700 transition ease-in-out duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Side Content for Desktop */}
                <div className="hidden lg:block lg:w-1/2 lg:pl-10">
                    <h2 className="text-3xl font-semibold mb-4">
                        WHAT WE ARE BUILDING
                    </h2>
                    <p className="text-base lg:text-lg leading-relaxed mb-4">
                        The Stablebase Protocol is a decentralized base layer stablecoin mechanism
                        that allows users to issue a USD-pegged stablecoin, SBD (StableBase Dollar),
                        by collateralizing assets. Our protocol is designed with 0% interest rates,
                        flexible collateral options, and user-governed origination fees to ensure
                        stability, efficiency, and widespread adoption.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed mb-4">
                        Users can deposit supported assets, borrow against them, repay their loans
                        with no interest, and withdraw collateral as needed. The system is governed
                        by a decentralized oracle mechanism, ensuring accurate pricing for all assets
                        used in the protocol.
                    </p>
                    <button className="px-6 py-3 mt-4 bg-violet-600 text-white font-semibold rounded-lg shadow-lg hover:bg-violet-700 transition ease-in-out duration-300">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default What;
