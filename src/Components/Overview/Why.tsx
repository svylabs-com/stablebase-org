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
                    <h2 className="text-lg md:text-3xl font-semibold mb-4  text-violet-500">
                        Motivation
                    </h2>
                    <h4 className="text-lg md:text-xl font-semibold mb-4 text-violet-300">
                        One size fits all approach
                    </h4>
                    <p className="text-base lg:text-lg leading-relaxed mb-4">
                        Existing stablecoin protocols are often implemented as a one size fits all approach, where all users are considered to have identical needs and capabilities or introduces third party trust by having delegated actions. This can lead to inefficiencies and high hidden costs for users.
                    </p>
                    <h4 className="text-lg md:text-xl font-semibold mb-4 text-violet-300">
                        Layered Approach
                    </h4>
                    <p className="text-base lg:text-lg leading-relaxed mb-4">
                        Our protocol aims to have a layered approach, where the base layer's main goal is exchange rate stability.
                    </p>
                    <h4 className="text-lg md:text-xl font-semibold mb-4 text-violet-300">
                        Use of Reserve Ratio for exchange rate stability
                    </h4>
                    <p className="text-base lg:text-lg leading-relaxed mb-4">
                        Most protocol use Interest Rate as the main monetary policy tool, our protocol instead uses Reserve Ratio(in a modified form) as the main monetary policy tool, to expand / contract money supply providing stability in exchange rates, similar to how it was done during the Gold Standard.
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
                            <h2 className="text-lg md:text-3xl font-semibold mb-4 text-violet-500">
                            Motivation
                            </h2>
                            <h4 className="text-lg md:text-xl font-semibold mb-4 text-violet-300">
                                One size fits all approach
                            </h4>
                            <p className="text-base lg:text-lg leading-relaxed mb-4">
                            Existing stablecoin protocols are often implemented as a one size fits all approach, where all users are considered to have identical needs and capabilities or introduces third party trust by having delegated actions. This can lead to inefficiencies and high hidden costs for users.
                            </p>
                            <h4 className="text-lg md:text-xl font-semibold mb-4 text-violet-300">
                                Layered Approach
                            </h4>
                            <p className="text-base lg:text-lg leading-relaxed mb-4">
                                Our protocol aims to have a layered approach, where the base layer's main goal is exchange rate stability.
                            </p>
                            <h4 className="text-lg md:text-xl font-semibold mb-4 text-violet-300">
                            Use of Reserve Ratio for exchange rate stability
                            </h4>
                            <p className="text-base lg:text-lg leading-relaxed mb-4">
                            Most protocol use Interest Rate as the main monetary policy tool, our protocol instead uses Reserve Ratio(in a modified form) as the main monetary policy tool, to expand / contract money supply providing stability in exchange rates, similar to how it was done during the Gold Standard.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Why;
