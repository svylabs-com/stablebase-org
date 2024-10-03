import React from 'react';

const Motivation: React.FC = () => {
    return (
        <section className="bg-black text-white py-20 px-6">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10  text-violet-500">Guiding Principles</h2>
                <p className="text-lg md:text-xl leading-relaxed mb-8 text-center">
                    
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Card 1 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h3 className="text-2xl font-semibold mb-4  text-violet-300">Open Source</h3>
                        <p>
                            StableBase is committed to building an open source protocol that is free to be used, modified by anyone.
                        </p>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h3 className="text-2xl font-semibold mb-4 text-violet-300">Market Driven Approach</h3>
                        <p>
                            The protocol is designed to be market driven with a base interest rate / fee of 0%.
                        </p>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h3 className="text-2xl font-semibold mb-4 text-violet-300">Decentralized and Immutable</h3>
                        <p>
                            Protocol is designed to be decentralized and immutable.
                        </p>
                    </div>
                    {/* Card 4 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h3 className="text-2xl font-semibold mb-4 text-violet-300">Focus on borrower experience</h3>
                        <p>
                            The protocol is designed with borrowers in mind, with the goal of making it flexible and predictable for borrowers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Motivation;
