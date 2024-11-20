import React from 'react';
import protocolImage from '../../assets/photos/protocol.png';

const Why: React.FC = () => {
    return (
        <section className="my-10 lg:px-10 lg:my-20">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
                {/* Left Side Content for Desktop */}
                <div className="hidden lg:block w-full lg:w-1/2 lg:pr-10">
                    <h2 className="text-lg md:text-3xl font-semibold mb-4  text-violet-500">
                        Motivation
                    </h2>
                    <h4 className="text-lg md:text-xl font-semibold mb-4 text-violet-300">
                    Bitcoin backed
                    </h4>
                    <p className="text-base lg:text-lg leading-relaxed mb-4">
                    Bitcoin's value is a trillion dollar worth, but there are no decentralized borrowing solutions for Bitcoin. By using Bitcoin as collateral on a sufficiently trust minimized L2, we will unlock trillion dollar worth of collateral onchain.
                    </p>
                    <h4 className="text-lg md:text-xl font-semibold mb-4 text-violet-300">
                        One size fits all approach
                    </h4>
                    <p className="text-base lg:text-lg leading-relaxed mb-4">
                        Existing stablecoin protocols are often implemented as a one size fits all approach, where all users are considered to have identical needs and capabilities or introduces third party trust by having delegated actions. This can lead to inefficiencies and high hidden costs for users.
                    </p>
                    <h4 className="text-lg md:text-xl font-semibold mb-4 text-violet-300">
                    Achieve market stability with 0% Interest Rate 
                    </h4>
                    <p className="text-base lg:text-lg leading-relaxed mb-4">
                    Currently only one protocol has 0% interest rate, however the protocol is inefficient in all market conditions. Our goal with this protocol is to achieve a stablecoin design with 0% interest rates with users only paying market driven fees.
                    </p>
                </div>

                {/* Right Side Image (Visible as background on mobile) */}
                <div className="relative w-full lg:w-1/2 lg:bg-gray-400 lg:p-6 rounded-md">
                    <img
                        src={protocolImage}
                        alt="Why We Are Building"
                        className='w-full h-[97vh] object-fill xs:h-[87vh] sm-xs:h-[75vh] md:object-cover opacity-40 md:h-[30rem] lg:h-full lg:static lg:shadow-lg lg:rounded-md lg:opacity-100'
                    />

                    {/* Overlay Content for mobile and medium screens */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 lg:hidden flex flex-col justify-center items-center text-center p-2">
                        <h2 className="text-lg md:text-3xl font-semibold mb-4 text-violet-500">
                            Motivation
                        </h2>
                        <h4 className="text-lg md:text-xl font-semibold mb-2 text-violet-300">
                            Bitcoin backed
                        </h4>
                        <p className="text-base lg:text-lg leading-relaxed mb-4">
                            Bitcoin's value is a trillion dollar worth, but there are no decentralized borrowing solutions for Bitcoin. By using Bitcoin as collateral on a sufficiently trust minimized L2, we will unlock trillion dollar worth of collateral onchain.
                        </p>
                        <h4 className="text-lg md:text-xl font-semibold mb-2 text-violet-300">
                            One size fits all approach
                        </h4>
                        <p className="text-base lg:text-lg leading-relaxed mb-4">
                            Existing stablecoin protocols are often implemented as a one size fits all approach, where all users are considered to have identical needs and capabilities or introduces third party trust by having delegated actions. This can lead to inefficiencies and high hidden costs for users.
                        </p>
                        <h4 className="text-lg md:text-xl font-semibold mb-2 text-violet-300">
                            Achieve market stability with 0% Interest Rate 
                        </h4>
                        <p className="text-base lg:text-lg leading-relaxed mb-4">
                        Currently only one protocol has 0% interest rate, however the protocol is inefficient in all market conditions. Our goal with this protocol is to achieve a stablecoin design with 0% interest rates with users only paying market driven fees.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Why;
