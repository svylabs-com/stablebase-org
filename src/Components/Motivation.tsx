import React from 'react';

const Motivation: React.FC = () => {
    return (
        <section className="bg-black text-white py-20 px-6">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Guiding Principles</h2>
                <p className="text-lg md:text-xl leading-relaxed mb-8 text-center">
                    
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Card 1 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h3 className="text-2xl font-semibold mb-4">Open Source</h3>
                        <p>
                            StableBase is committed to building an open source protocol that is free to be used, modified by anyone.
                        </p>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h3 className="text-2xl font-semibold mb-4">Market Driven Approach</h3>
                        <p>
                            The protocol is designed to be market driven, with the goal of creating a stablecoin that is useful for real world use cases.
                        </p>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h3 className="text-2xl font-semibold mb-4">Decentralized and Immutable</h3>
                        <p>
                            Protocol is designed to be decentralized and immutable once deployed, thus uses only the native assets of the blockchain.
                        </p>
                    </div>
                    {/* Card 4 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h3 className="text-2xl font-semibold mb-4">Focus on value for borrowers</h3>
                        <p>
                            The protocol is designed with borrowers in mind. The goal is to make it work for all types of borrowers with different risk profiles.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Motivation;
