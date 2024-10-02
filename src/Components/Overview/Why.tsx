import React from 'react';
import protocolImage from '../../assets/photos/protocol.png';

const Why: React.FC = () => {
    return (
        <section className="my-10 lg:px-10 lg:my-20">
            {/* Main Heading */}
            {/* <h1 className="p-2 md:py-4 font-bold text-2xl md:text-3xl lg:text-4xl px-4 md:px-6 lg:px-0 lg:mx-auto lg:flex items-center justify-center">
                Why We Are Building Stablebase Protocol
            </h1> */}

            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
                {/* Left Side Content for Desktop */}
                <div className="hidden lg:block w-full lg:w-1/2 lg:pr-10">
                    <h2 className="text-lg md:text-3xl font-semibold mb-4">
                        Our Purpose Behind Stablebase
                    </h2>
                    <p className="text-base lg:text-lg leading-relaxed mb-4">
                        We are building Stablebase to solve critical issues within the traditional
                        finance and cryptocurrency ecosystems. Traditional stablecoins often rely
                        on centralized mechanisms, which can be vulnerable to manipulation and lack
                        transparency. Stablebase offers a decentralized, transparent solution.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed mb-4">
                        By allowing users to issue a USD-pegged stablecoin (SBD) through collateralized
                        assets, we provide a stable, secure way to leverage cryptocurrencies without
                        losing access to liquidity. With 0% interest rates and user-governed origination
                        fees, our protocol is designed for long-term stability and mass adoption.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed mb-4">
                        The key differentiator is that users maintain control of their assets, borrowing
                        and repaying without hidden fees or opaque systems. The decentralized oracle mechanism
                        ensures fair and transparent pricing, making Stablebase a trustworthy stablecoin solution.
                    </p>
                </div>

                {/* Right Side Image (Visible as background on mobile) */}
                <div className="relative w-full lg:w-1/2 lg:bg-gray-400 lg:p-6 rounded-md">
                    <img
                        src={protocolImage}
                        alt="Why We Are Building"
                        className="w-full h-full object-cover opacity-40 md:h-[30rem] lg:static lg:shadow-lg lg:rounded-md lg:opacity-100"
                    />

                    {/* Overlay Content for mobile */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 lg:hidden overflow-y-auto max-h-full p-6 flex flex-col justify-center items-center text-center">
                        <div className="overflow-y-auto max-h-[80vh] w-full">
                            <h2 className="text-lg md:text-3xl font-semibold mb-4 text-white">
                                Our Purpose Behind Stablebase
                            </h2>
                            <p className="text-base leading-relaxed mb-4 text-white">
                                We are building Stablebase to solve critical issues within the traditional
                                finance and cryptocurrency ecosystems. Traditional stablecoins often rely
                                on centralized mechanisms, which can be vulnerable to manipulation and lack
                                transparency. Stablebase offers a decentralized, transparent solution.
                            </p>
                            <p className="text-base leading-relaxed mb-4 text-white">
                                By allowing users to issue a USD-pegged stablecoin (SBD) through collateralized
                                assets, we provide a stable, secure way to leverage cryptocurrencies without
                                losing access to liquidity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Why;
