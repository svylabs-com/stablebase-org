import React from 'react';
import protocolImage from '../../assets/photos/protocol-how.png';

const How: React.FC = () => {
    return (
        <section className="my-10 lg:px-10 lg:my-20">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between">
                {/* Left Side Image (Visible as background on mobile) */}
                <div className="relative w-full lg:w-1/2 lg:bg-gray-400 lg:p-6 rounded-md">
                    <img
                        src={protocolImage}
                        alt="Protocol Overview"
                        className="w-full h-[91rem] object-fill xs:h-[80rem] sm-xs:h-[73rem] md:object-cover opacity-40 md:h-[55rem] lg:h-full lg:static lg:shadow-lg lg:rounded-md bg-black lg:opacity-100"
                    />

                    {/* Overlay Content for mobile and medium screens */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 lg:hidden flex flex-col justify-center items-center text-center p-2">
                        <h2 className="text-lg md:text-3xl font-semibold mb-4 text-violet-500">
                            Key Innovations
                        </h2>
                        <h4 className="text-lg md:text-3xl font-semibold mb-2 text-violet-300">
                            Pay As You Go Pricing model
                        </h4>
                        <p className="text-base leading-relaxed mb-4 text-white">
                            We introduce a new pricing model instead of traditional interest rates nor origination fees. <br/>
                            During normal market conditions, users don't pay anything to borrow.  However, during times of lower demand, redemptions are highly likely as it is a key mechanism to ensure peg. Users can protect themselves from redemptions by paying a small fee to jump up the redemption queue.
                        </p>
                        <h4 className="text-lg md:text-3xl font-semibold mb-2 text-violet-300">
                            Market determined fees
                        </h4>
                        <p className="text-base leading-relaxed mb-4 text-white">
                            Users determine when they want to pay and how much they want to pay. There is no minimum, nor maximum fee.
                        </p>
                        <h4 className="text-lg md:text-3xl font-semibold mb-2 text-violet-300">
                            Bitcoin backed loans
                        </h4>
                        <p className="text-base leading-relaxed mb-4 text-white">
                            Users can borrow against their Bitcoin holdings in one of the supported Bitcoin Layer 2 networks.
                        </p>
                    </div>
                </div>

                {/* Right Side Content for Desktop */}
                <div className="hidden lg:block lg:w-1/2 lg:pl-10">
                    <h2 className="text-3xl font-semibold mb-4 text-violet-500">
                        Key Innovations
                    </h2>
                    <h4 className="text-md md:text-xl font-semibold mb-6 text-violet-300">
                       Pay As You Go Pricing model
                    </h4>
                    <p className="text-base lg:text-lg leading-relaxed mb-4">
                    We introduce a new Pay As You Go pricing model instead of traditional interest rates nor origination fees. <br/>
                    During normal market conditions, users don't pay anything to borrow.  However, during times of lower demand, redemptions are highly likely as it is a key mechanism to ensure peg. Users can protect themselves from redemptions by paying a small fee to jump up the redemption queue.
                    </p>
                    <h4 className="text-md md:text-xl font-semibold mb-6 text-violet-300">
                        Market determined fees
                    </h4>
                    <p className="text-base lg:text-lg leading-relaxed mb-4">
                    Users determine when they want to pay and how much they want to pay. There is no minimum, nor maximum fee.
                    </p>
                    <h4 className="text-md md:text-xl font-semibold mb-6 text-violet-300">
                    Bitcoin backed loans
                    </h4>
                    <p className="text-base lg:text-lg leading-relaxed mb-4">
                    Users can borrow against their Bitcoin holdings in one of the supported Bitcoin Layer 2 networks.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default How;
