import React, { useEffect, useRef, useState } from 'react';
import protocolImage from '../../assets/photos/protocol-how.png';
import GradientBackgroundContainer from "../GradientBackgroundContainer/GradientBackgroundContainer";

const How: React.FC = () => {
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
                {/* Left Side Image */}
                <div className='lg:w-1/2 lg:bg-[#808080] lg:p-6 rounded-xl' style={{ height: imageHeight }}>
                    <img
                        src={protocolImage}
                        alt="How We Are Building"
                        className="w-full h-full bg-black"
                    />
                </div>

                {/* Right Side Content for Desktop */}
                <div ref={contentRef} className="lg:w-1/2">
                    <GradientBackgroundContainer colorRight="#f0df7fb3">
                        <div className='space-y-6 p-4 xl:p-6 2xl:p-8'>
                            <h2 className='text-xl lg:text-2xl 2xl:text-3xl font-bold text-[#f0df7fb3]'>
                                Key Innovations
                            </h2>
                            <div className='space-y-4'>
                                <h4 className="text-md md:text-xl font-semibold text-[#f6eaa3b3]">
                                    Pay As You Go Pricing model
                                </h4>
                                <p className="text-base lg:text-lg leading-relaxed">
                                    We introduce a new pricing model instead of traditional interest rates nor origination fees.
                                    During normal market conditions, users don't pay anything to borrow.  However, during times of lower demand, redemptions are highly likely as it is a key mechanism to ensure peg. Users can protect themselves from redemptions by paying a small fee to jump up the redemption queue.
                                </p>
                            </div>
                            <div className='space-y-4'>
                                <h4 className="text-md md:text-xl font-semibold text-[#f6eaa3b3]">
                                    Market determined fees
                                </h4>
                                <p className="text-base lg:text-lg leading-relaxed">
                                    Users determine when they want to pay and how much they want to pay. There is no minimum, nor maximum fee.
                                </p>
                            </div>
                            <div className='space-y-4'>
                                <h4 className="text-md md:text-xl font-semibold text-[#f6eaa3b3]">
                                    Bitcoin backed loans
                                </h4>
                                <p className="text-base lg:text-lg leading-relaxed">
                                    Users can borrow against their Bitcoin holdings in one of the supported Bitcoin Layer 2 networks.</p>
                            </div>
                        </div>
                    </GradientBackgroundContainer>
                </div>
            </div>

            {/* Overlay Content for mobile and medium screens */}
            <div className="lg:hidden relative">
                <img
                    src={protocolImage}
                    alt="How We Are Building"
                    className="w-full opacity-30 object-fill h-[97vh] xs:h-[87vh] sm-xs:h-[80vh] md:h-[65vh] bg-black"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col gap-6 justify-center items-center text-center p-2 md:p-4">
                    <h2 className="text-lg md:text-2xl font-bold text-[#f0df7fb3]">
                        Key Innovations
                    </h2>
                    <div className='space-y-4'>
                        <h4 className="text-lg md:text-xl font-semibold text-[#f6eaa3b3]">
                            Pay As You Go Pricing model
                        </h4>
                        <p className="text-base leading-relaxed text-white">
                            We introduce a new pricing model instead of traditional interest rates nor origination fees.
                            During normal market conditions, users don't pay anything to borrow.  However, during times of lower demand, redemptions are highly likely as it is a key mechanism to ensure peg. Users can protect themselves from redemptions by paying a small fee to jump up the redemption queue.
                        </p>
                    </div>
                    <div className='space-y-4'>
                        <h4 className="text-lg md:text-xl font-semibold text-[#f6eaa3b3]">
                            Market determined fees
                        </h4>
                        <p className="text-base leading-relaxed text-white">
                            Users determine when they want to pay and how much they want to pay. There is no minimum, nor maximum fee.
                        </p>
                    </div>
                    <div className='space-y-4'>
                        <h4 className="text-lg md:text-xl font-semibold text-[#f6eaa3b3]">
                            Bitcoin backed loans
                        </h4>
                        <p className="text-base leading-relaxed text-white">
                            Users can borrow against their Bitcoin holdings in one of the supported Bitcoin Layer 2 networks.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default How;
