import React from 'react';

const Motivation: React.FC = () => {
    return (
        <section className="bg-black text-white py-20 px-6">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Revolutionizing Stablecoins</h2>
                <p className="text-lg md:text-xl leading-relaxed mb-8 text-center">
                    In a rapidly evolving stablecoin market, StableBase stands out by providing innovative solutions 
                    that address the shortcomings of existing protocols. Our aim is to create a more flexible, 
                    predictable, and stable borrowing environment for users of all types.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Card 1 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h3 className="text-2xl font-semibold mb-4">Innovative Tools</h3>
                        <p>
                            StableBase combines a pre-paid Shielding Rate and a user-defined Reserve Ratio, 
                            ensuring both price stability and flexibility for users in their borrowing experience.
                        </p>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h3 className="text-2xl font-semibold mb-4">Zero Interest Rates</h3>
                        <p>
                            Say goodbye to ongoing borrowing fees! With our 0% interest rate model, users can enjoy 
                            predictable terms and reduce the costs associated with borrowing.
                        </p>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h3 className="text-2xl font-semibold mb-4">Dynamic Stability</h3>
                        <p>
                            Our innovative mechanisms work together to maintain price parity with the pegged currency 
                            while adapting to different market conditions.
                        </p>
                    </div>
                    {/* Card 4 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h3 className="text-2xl font-semibold mb-4">User Flexibility</h3>
                        <p>
                            StableBase allows users to customize their borrowing terms through the Shielding Rate and 
                            Reserve Ratio, enhancing the overall user experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Motivation;
