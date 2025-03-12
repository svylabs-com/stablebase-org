import React, { useEffect, useRef, useState } from 'react';
import protocolImage from '../../assets/photos/protocol.png';
import GradientBackgroundContainer from "../GradientBackgroundContainer/GradientBackgroundContainer";

const Why: React.FC = () => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [imageHeight, setImageHeight] = useState<number>(0);

    useEffect(() => {
        if (contentRef.current) {
            setImageHeight(contentRef.current.clientHeight);
        }
    }, [contentRef]);
    console.log('imageHeight', imageHeight);

    return (
        <section className="lg:px-10 2xl:px-14 mt-10 lg:mt-16">
            <div className="hidden lg:flex flex-row h-full gap-5 xl:gap-8 2xl:gap-10 items-stretch justify-between">
                {/* Right Side Content for Desktop */}
                <div ref={contentRef} className="lg:w-1/2">
                    <GradientBackgroundContainer colorRight="#78CEF9b3">
                        <div className='space-y-6 p-4 xl:p-6 2xl:p-8'>
                            <h2 className='text-xl lg:text-2xl 2xl:text-3xl font-bold text-[#78CEF9b3]'>
                                Motivation
                            </h2>
                            <div className='space-y-4'>
                                <h4 className="text-md md:text-xl font-semibold text-[#a4daf6b3]">
                                    Bitcoin backed
                                </h4>
                                <p className="text-base lg:text-lg leading-relaxed">
                                    Bitcoin's value is a trillion dollar worth, but there are no decentralized borrowing solutions for Bitcoin. By using Bitcoin as collateral on a sufficiently trust minimized L2, we will unlock trillion dollar worth of collateral onchain.
                                </p>
                            </div>
                            <div className='space-y-4'>
                                <h4 className="text-md md:text-xl font-semibold text-[#a4daf6b3]">
                                    One size fits all approach
                                </h4>
                                <p className="text-base lg:text-lg leading-relaxed">
                                    Existing stablecoin protocols are often implemented as a one size fits all approach, where all users are considered to have identical needs and capabilities or introduces third party trust by having delegated actions. This can lead to inefficiencies and high hidden costs for users.
                                </p>
                            </div>
                            <div className='space-y-4'>
                                <h4 className="text-md md:text-xl font-semibold text-[#a4daf6b3]">
                                    Achieve market stability with 0% Interest Rate
                                </h4>
                                <p className="text-base lg:text-lg leading-relaxed">
                                    Currently only one protocol has 0% interest rate, however the protocol is inefficient in all market conditions. Our goal with this protocol is to achieve a stablecoin design with 0% interest rates with users only paying market driven fees.
                                </p>
                            </div>
                        </div>
                    </GradientBackgroundContainer>
                </div>
                {/* Right Side Image */}
                <div className='lg:w-1/2 lg:bg-[#808080] lg:p-6 rounded-xl' style={{ height: imageHeight }}>
                    <img
                        src={protocolImage}
                        alt="Why We Are Building"
                        className="w-full h-full"
                    />
                </div>
            </div>


            {/* Overlay Content for mobile and medium screens */}
            <div className="lg:hidden relative">
                <img
                    src={protocolImage}
                    alt="Protocol Overview"
                    className="w-full opacity-30 object-fill h-[115vh] xs:h-[100vh] sm-xs:h-[88vh] md:h-[73vh]"
                />
                <div className="absolute inset-0 bg-[#161619] bg-opacity-50 flex flex-col gap-6 justify-center items-center text-center p-2 md:p-4">
                    <h2 className="text-lg md:text-2xl font-bold text-[#78CEF9b3]">
                        Motivation
                    </h2>
                    <div className='space-y-4'>
                        <h4 className="text-lg md:text-xl font-semibold text-[#a4daf6b3]">
                            Bitcoin backed
                        </h4>
                        <p className="text-base leading-relaxed text-white">
                            Bitcoin's value is a trillion dollar worth, but there are no decentralized borrowing solutions for Bitcoin. By using Bitcoin as collateral on a sufficiently trust minimized L2, we will unlock trillion dollar worth of collateral onchain.
                        </p>
                    </div>
                    <div className='space-y-4'>
                        <h4 className="text-lg md:text-xl font-semibold text-[#a4daf6b3]">
                            One size fits all approach
                        </h4>
                        <p className="text-base leading-relaxed text-white">
                            Existing stablecoin protocols are often implemented as a one size fits all approach, where all users are considered to have identical needs and capabilities or introduces third party trust by having delegated actions. This can lead to inefficiencies and high hidden costs for users.
                        </p>
                    </div>
                    <div className='space-y-4'>
                        <h4 className="text-lg md:text-xl font-semibold text-[#a4daf6b3]">
                            Achieve market stability with 0% Interest Rate
                        </h4>
                        <p className="text-base leading-relaxed text-white">
                            Currently only one protocol has 0% interest rate, however the protocol is inefficient in all market conditions. Our goal with this protocol is to achieve a stablecoin design with 0% interest rates with users only paying market driven fees.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Why;
