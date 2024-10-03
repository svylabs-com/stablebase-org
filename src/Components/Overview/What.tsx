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
                        className="w-full h-full object-cover opacity-40 md:h-[30rem] lg:static lg:shadow-lg lg:rounded-md lg:opacity-100"
                    />

                    {/* Overlay Content for mobile */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 lg:hidden overflow-y-auto max-h-full p-6 flex flex-col justify-center items-center text-center">
                        <div className="overflow-y-auto max-h-[80vh] w-full"> {/* Ensuring scrollable area */}
                            <h2 className="text-lg md:text-3xl font-semibold mb-4  text-violet-500">
                                {/* Stablebase Protocol Overview */}
                                WHAT IS STABLEBASE
                            </h2>
                            <h4 className="text-lg md:text-3xl font-semibold mb-4 text-violet-300">
                            CDP based Stablecoin Protocol
                                </h4>
                            <p className="text-base leading-relaxed mb-4 text-white">
                                StableBase is a decentralized CDP based protocol that allows users to mint a USD-pegged stablecoin by depositing ETH or native assets as collateral. 
                                The protocol aims to improve borrowing experience for both large and small users by providing an alternative mechanism to traditional interest rate
                                based CDP protocols.
                            </p>
                            <h4 className="text-md md:text-xl font-semibold mb-6 text-violet-300">
                                Caters to Different Risk Profiles
                            </h4>
                            <p className="text-base leading-relaxed mb-4 text-white">
                                For users that can tolerate risk and have advanced capabilities, the protocol offers a 0% interest rate on loans, and in return expects the users to actively manage their positions.
                            </p>
                            <p className="text-base leading-relaxed mb-4 text-white">
                                For regular users that are risk averse, the protocol offers predictable borrowing terms for a pre-paid fee.
                            </p>
                            <button className="px-6 py-3 mt-4 bg-violet-600 text-white font-semibold rounded-lg shadow-lg hover:bg-violet-700 transition ease-in-out duration-300">
                                Learn More
                            </button>
                        </div>
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
                            StableBase is a decentralized protocol that allows users to mint a USD-pegged stablecoin by depositing ETH or native assets as collateral. 
                            The protocol aims to improve borrowing experience for large and small users by providing an alternative mechanism to traditional interest rate
                            based CDP protocols.
                    </p>
                    <h4 className="text-md md:text-xl font-semibold mb-6 text-violet-300">
                        Caters to Different Risk Profiles
                    </h4>
                    <p className="text-base lg:text-lg leading-relaxed mb-4">
                        For users that can tolerate risk and have advanced capabilities, the protocol offers a 0% interest rate on loans, and in return expects the users to actively manage their positions.
                    </p>
                    <p className="text-base lg:text-lg leading-relaxed mb-4">
                        For regular users that are risk averse, the protocol offers predictable borrowing terms for a pre-paid fee
                    </p>
                    <button className="px-6 py-3 mt-4 bg-violet-600 text-white font-semibold rounded-lg shadow-lg hover:bg-violet-700 transition ease-in-out duration-300">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default What;




// import React from 'react';
// import protocolImage from '../../assets/photos/protocol.png';

// const What: React.FC = () => {
//     return (
//         <section className="my-5 lg:px-10">
//             <h1 className="p-2 md:mb-5 md:py-4 font-bold text-2xl md:text-3xl lg:text-4xl px-4 md:px-6 lg:px-0 lg:mx-auto lg:flex items-center justify-center  text-violet-500">
//                 Protocol Overview
//             </h1>
//             <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
//                 {/* Left Side Image (Visible as background on mobile) */}
//                 <div className="hidden lg:block w-full lg:w-1/2 lg:bg-gray-400 lg:p-6 rounded-md">
//                     <img
//                         src={protocolImage}
//                         alt="Protocol Overview"
//                         className="w-full h-full object-cover opacity-40 md:h-[30rem] lg:static lg:shadow-lg lg:rounded-md lg:opacity-100"
//                     />
//                 </div>

//                 {/* Right Side Content for Desktop */}
//                 <div className="lg:w-1/2 lg:pl-10  text-center lg:text-left">
//                     <h2 className="text-3xl font-semibold mb-4  text-violet-500" >
//                         WHAT IS STABLEBASE
//                     </h2>
//                     <h4 className="text-md md:text-xl font-semibold mb-6 text-violet-300">
//                         CDP based Stablecoin Protocol
//                     </h4>
//                     <p className="text-base lg:text-lg leading-relaxed mb-4">
//                             StableBase is a decentralized protocol that allows users to mint a USD-pegged stablecoin by depositing ETH or native assets as collateral. 
//                             The protocol aims to improve borrowing experience for large and small users by providing an alternative mechanism to traditional interest rate
//                             based CDP protocols.
//                     </p>
//                     <h4 className="text-md md:text-xl font-semibold mb-6 text-violet-300">
//                         Caters to Different Risk Profiles
//                     </h4>
//                     <p className="text-base lg:text-lg leading-relaxed mb-4">
//                         For users that can tolerate risk and have advanced capabilities, the protocol offers a 0% interest rate on loans, and in return expects the users to actively manage their positions.
//                     </p>
//                     <p className="text-base lg:text-lg leading-relaxed mb-4">
//                         For regular users that are risk averse, the protocol offers predictable borrowing terms for a pre-paid fee
//                     </p>
//                     <button className="px-6 py-3 mt-4 bg-violet-600 text-white font-semibold rounded-lg shadow-lg hover:bg-violet-700 transition ease-in-out duration-300">
//                         Learn More
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default What;
