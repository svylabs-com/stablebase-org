import React, { useEffect, useRef, useState } from 'react';
import protocolImage from '../../assets/photos/protocol.png';

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
        <section className="space-y-8 2xl:space-y-10">
            <h2 className='text-2xl lg:text-3xl font-bold text-[#808080] text-center'>
                Protocol Overview
            </h2>
            <div className="flex flex-col lg:flex-row h-full gap-4 items-stretch justify-between">
                {/* Left Side Image */}
                <div className='lg:w-1/2 lg:bg-gray-400 lg:p-6 xl:p- rounded-md' style={{ height: imageHeight }}>
                    <img
                        src={protocolImage}
                        alt="Protocol Overview"
                        className="w-full h-full"
                        // className="w-full h-[90vh] object-fill xs:h-[80vh] sm-xs:h-[70vh] md:object-cover opacity-40 md:h-[20rem] lg:h- lg:static lg:shadow-lg lg:rounded-md lg:opacity-100"
                    />
                </div>

                {/* Right Side Content for Desktop */}
                <div ref={contentRef} className="hidden lg:block lg:w-1/2 space-y-6">
                    <h2 className='text-xl lg:text-2xl 2xl:text-3xl font-bold text-[#808080] text-center'>
                        WHAT IS STABLEBASE
                    </h2>
                    <div className='space-y-4'>
                        <h4 className="text-md md:text-xl font-semibold text-yellow-300">
                            CDP based Stablecoin Protocol
                        </h4>
                        <p className="text-base lg:text-lg leading-relaxed">
                            StableBase is a decentralized CDP based protocol that allows users to mint $DFID, a USD-pegged stablecoin by depositing a collateral asset.
                            The protocol uses Liquidation and Redemption mechanisms to ensure the stability of the stablecoin, and offers yield to participants from the fees paid by users.
                        </p>
                    </div>
                    <div className='space-y-4'>
                        <h4 className="text-md md:text-xl font-semibold text-yellow-300">
                            Unique Pay As You Go pricing model
                        </h4>
                        <p className="text-base lg:text-lg leading-relaxed">
                            StableBase doesn't employ neither traditional interest rates where fees accrue whether you like it or not, nor origination fees, a large upfront fee you pay to borrow. Instead, it uses a simple pay as you go model where you pay a small fee (determined by market conditions) to jump up the redemption queue.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default What;