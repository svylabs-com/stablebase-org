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
                            <h2 className="text-lg md:text-3xl font-semibold mb-4 text-violet-500">
                                Key Innovations
                            </h2>
                            <h4 className="text-lg md:text-3xl font-semibold mb-4 text-violet-300">
                            Decentralized Rate Governors
                                </h4>
                            <p className="text-base leading-relaxed mb-4 text-white">
                            Rate governors are also borrowers of the protocol and borrow at 0% rates. Anyone can become a rate governor by locking up a certain percentage(reserve ratio) of the borrowed stablecoins into the reserve pool. The rate governors additionally set the shielding rate for the protocol. Rate Governors participate in the stability of the protocol by setting reserve ratio, and shielding rates. Thus they are at high risk of redemptions and they need to actively manage their positions.
                            </p>
                            <p className="text-base leading-relaxed mb-4 text-violet-300">
                                Redemption Protection
                            </p>
                            <p className="text-base leading-relaxed mb-4 text-white">
                                Users that do not want to be a rate governor, could pay a shielding rate, and their collateral is protected from redemptions pro-rata based on the shielding fee paid.
                            </p>
                            <p className="text-base leading-relaxed mb-4 text-violet-300">
                                Yield for Participants
                            </p>
                            <p className="text-base leading-relaxed mb-4 text-white">
                            The protocol is equiped with two pools- the reserve pool and stability pool. The fee paid for shielding is distributed to participants in these pools.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side Content for Desktop */}
                <div className="hidden lg:block lg:w-1/2 lg:pl-10">
                    <h2 className="text-3xl font-semibold mb-4 text-violet-500">
                        Key Innovations
                    </h2>
                    <h4 className="text-md md:text-xl font-semibold mb-6 text-violet-300">
                        Decentralized Rate Governors
                    </h4>
                    <p className="text-base lg:text-lg leading-relaxed mb-4">
                        Rate governors are also borrowers of the protocol and borrow at 0% rates. Anyone can become a rate governor by locking up a certain percentage(reserve ratio) of the borrowed stablecoins into the reserve pool. The rate governors additionally set the shielding rate for the protocol. Rate Governors participate in the stability of the protocol by setting reserve ratio, and shielding rates. Thus they are at high risk of redemptions and they need to actively manage their positions.
                    </p>
                    <h4 className="text-md md:text-xl font-semibold mb-6 text-violet-300">
                         Redemption Protection
                    </h4>
                    <p className="text-base lg:text-lg leading-relaxed mb-4">
                        Users that do not want to be a rate governor, could pay a shielding rate, and their collateral is protected from redemptions pro-rata based on the shielding fee paid.
                    </p>
                    <h4 className="text-md md:text-xl font-semibold mb-6 text-violet-300">
                         Yield for Participants
                    </h4>
                    <p className="text-base lg:text-lg leading-relaxed mb-4">
                        The protocol is equiped with two pools- the reserve pool and stability pool. The fee paid for shielding is distributed to participants in these pools.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default How;
