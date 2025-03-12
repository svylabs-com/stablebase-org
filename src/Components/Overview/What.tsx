import React, { useEffect, useRef, useState } from 'react';
import protocolImage from '../../assets/photos/protocol.png';
import GradientBackgroundContainer from "../GradientBackgroundContainer/GradientBackgroundContainer";

const What: React.FC = () => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [imageHeight, setImageHeight] = useState<number>(0);

    useEffect(() => {
        if (contentRef.current) {
            setImageHeight(contentRef.current.clientHeight);
        }
    }, [contentRef]);
    console.log('imageHeight', imageHeight);

    return (
        <section className="space-y-8 2xl:space-y-10 lg:px-10 2xl:px-14">
            <h2 className='text-2xl lg:text-3xl font-bold text-[#808080] text-center'>
                Protocol Overview
            </h2>
            <div className="hidden lg:flex flex-row h-full gap-5 xl:gap-8 2xl:gap-10 items-stretch justify-between">
                {/* Left Side Image */}
                <div className='lg:w-1/2 lg:bg-[#808080] lg:p-6 rounded-xl' style={{ height: imageHeight }}> {/* lg:bg-[#fcafddb3] */}
                    <img
                        src={protocolImage}
                        alt="What We Are Building"
                        className="w-full h-full"
                    />
                </div>

                {/* Right Side Content for Desktop */}
                <div ref={contentRef} className="lg:w-1/2">
                    <GradientBackgroundContainer colorRight="#fd90d1b3">
                        <div className='space-y-6 p-4 xl:p-6 2xl:p-8'>
                            <h2 className='text-xl lg:text-2xl 2xl:text-3xl font-bold text-[#fd90d1b3]'>
                                WHAT IS STABLEBASE
                            </h2>
                            <div className='space-y-4'>
                                <h4 className="text-md md:text-xl font-semibold text-[#fbabdbb3]">
                                    CDP based Stablecoin Protocol
                                </h4>
                                <p className="text-base lg:text-lg leading-relaxed">
                                    StableBase is a decentralized CDP based protocol that allows users to mint $DFID, a USD-pegged stablecoin by depositing a collateral asset.
                                    The protocol uses Liquidation and Redemption mechanisms to ensure the stability of the stablecoin, and offers yield to participants from the fees paid by users.
                                </p>
                            </div>
                            <div className='space-y-4'>
                                <h4 className="text-md md:text-xl font-semibold text-[#fbabdbb3]">
                                    Unique Pay As You Go pricing model
                                </h4>
                                <p className="text-base lg:text-lg leading-relaxed">
                                    StableBase doesn't employ neither traditional interest rates where fees accrue whether you like it or not, nor origination fees, a large upfront fee you pay to borrow. Instead, it uses a simple pay as you go model where you pay a small fee (determined by market conditions) to jump up the redemption queue.
                                </p>
                            </div>
                        </div>
                    </GradientBackgroundContainer>
                </div>
            </div>

            {/* Overlay Content for mobile and medium screens */}
            <div className="lg:hidden relative">
                <img
                    src={protocolImage}
                    alt="What We Are Building"
                    className="w-full opacity-30 object-fill h-[90vh] xs:h-[80vh] sm-xs:h-[72vh] md:h-[55vh]"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col gap-6 justify-center items-center text-center p-2 md:p-4">
                    <h2 className="text-lg md:text-2xl font-bold text-[#fd90d1b3]">
                        WHAT IS STABLEBASE
                    </h2>
                    <div className='space-y-4'>
                        <h4 className="text-lg md:text-xl font-semibold text-[#fbabdbb3]">
                            CDP based Stablecoin Protocol
                        </h4>
                        <p className="text-base leading-relaxed text-white">
                            StableBase is a decentralized CDP based protocol that allows users to mint $DFID, a USD-pegged stablecoin by depositing a collateral asset.
                            The protocol uses Liquidation and Redemption mechanisms to ensure the stability of the stablecoin, and offers yield to participants from the fees paid by users.
                        </p>
                    </div>
                    <div className='space-y-4'>
                        <h4 className="text-lg md:text-xl font-semibold text-[#fbabdbb3]">
                            Unique Pay As You Go pricing model
                        </h4>
                        <p className="text-base leading-relaxed text-white">
                            StableBase doesn't employ neither traditional interest rates where fees accrue whether you like it or not, nor origination fees, a large upfront fee you pay to borrow. Instead, it uses a simple pay as you go model where you pay a small fee(determined by market conditions) to jump up the redemption queue.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default What;