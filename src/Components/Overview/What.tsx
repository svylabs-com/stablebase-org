import React from 'react';
import protocolImage from '../../assets/photos/protocol.png';

const What: React.FC = () => {
    return (
        <section className="my-5 lg:px-10">
            <h1 className="p-2 md:mb-5 md:py-4 font-bold text-2xl md:text-3xl lg:text-4xl px-4 md:px-6 lg:px-0 lg:mx-auto lg:flex items-center justify-center  text-violet-500">
                Protocol Overview
            </h1>
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
                {/* Left Side Image (Visible as background on mobile) */}
                <div className="relative w-full lg:w-1/2 lg:bg-gray-400 lg:p-6 rounded-md">
                    <img
                        src={protocolImage}
                        alt="Protocol Overview"
                        className="w-full h-[100vh] object-fill xs:h-[80vh] sm-xs:h-[70vh] md:object-cover opacity-40 md:h-[20rem] lg:h-full lg:static lg:shadow-lg lg:rounded-md lg:opacity-100"
                    />

                    {/* Overlay Content for mobile and medium screens */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 lg:hidden flex flex-col justify-center items-center text-center p-2">
                        <h2 className="text-lg md:text-3xl font-semibold mb-2  text-violet-500">
                            WHAT IS STABLEBASE
                        </h2>
                        <h4 className="text-lg md:text-3xl font-semibold mb-2 text-violet-300">
                            CDP based Stablecoin Protocol
                        </h4>
                        <p className="text-base leading-relaxed mb-4 text-white">
                            StableBase is a decentralized CDP based protocol that allows users to mint $DFID, a USD-pegged stablecoin by depositing a collateral asset.
                            The protocol uses Liquidation and Redemption mechanisms to ensure the stability of the stablecoin, and offers yield to participants from the fees paid by users.
                        </p>
                        <h4 className="text-md md:text-xl font-semibold mb-3 text-violet-300">
                            Unique Pay As You Go pricing model
                        </h4>
                        <p className="text-base leading-relaxed mb-2 text-white">
                            StableBase doesn't employ neither traditional interest rates where fees accrue whether you like it or not, nor origination fees, a large upfront fee you pay to borrow. Instead, it uses a simple pay as you go model where you pay a small fee(determined by market conditions) to jump up the redemption queue.
                        </p>
                    </div>
                </div>

                {/* Right Side Content for Desktop */}
                <div className="hidden lg:block lg:w-1/2 lg:pl-10">
                    <h2 className="text-3xl font-semibold mb-4  text-violet-500" >
                        WHAT IS STABLEBASE
                    </h2>
                    <h4 className="text-md md:text-xl font-semibold mb-6 text-violet-300">
                        CDP based Stablecoin Protocol
                    </h4>
                    <p className="text-base lg:text-lg leading-relaxed mb-4">
                    StableBase is a decentralized CDP based protocol that allows users to mint $DFID, a USD-pegged stablecoin by depositing a collateral asset.
                    The protocol uses Liquidation and Redemption mechanisms to ensure the stability of the stablecoin, and offers yield to participants from the fees paid by users.
                    </p>
                    <h4 className="text-md md:text-xl font-semibold mb-6 text-violet-300">
                    Unique Pay As You Go pricing model
                    </h4>
                    <p className="text-base lg:text-lg leading-relaxed mb-4">
                    StableBase doesn't employ neither traditional interest rates where fees accrue whether you like it or not, nor origination fees, a large upfront fee you pay to borrow. Instead, it uses a simple pay as you go model where you pay a small fee(determined by market conditions) to jump up the redemption queue.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default What;