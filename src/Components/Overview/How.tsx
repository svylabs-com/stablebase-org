import React from 'react';
import protocolImage from '../../assets/photos/protocol-how.png';

const How: React.FC = () => {
    return (
        <section className="my-10 lg:px-10 lg:my-20">
            {/* Main Heading */}
            {/* <h1 className="p-2 md:py-4 font-bold text-2xl md:text-3xl lg:text-4xl px-4 md:px-6 lg:px-0 lg:mx-auto lg:flex items-center justify-center">
                How We Are Building Stablebase Protocol
            </h1> */}

            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
                {/* Left Side Image (Visible as background on mobile) */}
                <div className="relative w-full lg:w-1/2 lg:bg-gray-400 lg:p-6 rounded-md">
                    <img
                        src={protocolImage}
                        alt="Protocol Overview"
                        className="w-full h-full object-cover opacity-40 md:h-[30rem] lg:static lg:shadow-lg lg:rounded-md bg-black lg:opacity-100"
                    />

                    {/* Overlay Content for mobile */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 lg:hidden overflow-y-auto max-h-full p-6 flex flex-col justify-center items-center text-center">
                        <div className="overflow-y-auto max-h-[80vh] w-full">
                            <h2 className="text-lg md:text-3xl font-semibold mb-4 text-white">
                                HOW WE ARE BUILDING
                            </h2>
                            <p className="text-base leading-relaxed mb-4 text-white">
                                The Stablebase Protocol is designed with a robust decentralized infrastructure
                                that ensures security, transparency, and efficiency. By leveraging blockchain
                                technology and smart contracts, we eliminate intermediaries and central points
                                of failure.
                            </p>
                            <p className="text-base leading-relaxed mb-4 text-white">
                                The system uses a decentralized oracle mechanism to ensure real-time, accurate
                                asset pricing. This mechanism ensures fair collateralization and borrowing
                                conditions, making the protocol resilient against manipulation and external shocks.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side Content for Desktop */}
                <div className="hidden lg:block lg:w-1/2 lg:pl-10">
                    <h2 className="text-3xl font-semibold mb-4">
                        HOW WE ARE BUILDING
                    </h2>
                    <p className="text-base lg:text-lg leading-relaxed mb-4">
                        We are building the Stablebase Protocol using secure, decentralized smart contracts on
                        the Ethereum blockchain. By utilizing smart contracts, we remove the need for traditional
                        financial intermediaries, allowing users to have full control over their assets without
                        relying on third-party custodians.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed mb-4">
                        To maintain real-time pricing accuracy for all supported assets, we are integrating a
                        decentralized oracle system. This ensures that asset prices used for collateralization
                        and borrowing are always up-to-date, transparent, and immune to manipulation.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed mb-4">
                        Additionally, we are prioritizing security in all aspects of our protocol, conducting
                        regular audits, and using well-established security practices to safeguard user assets
                        and maintain the integrity of the system.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default How;
