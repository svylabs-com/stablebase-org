import React from 'react';
import GradientBackgroundContainer from "./GradientBackgroundContainer/GradientBackgroundContainer";

const Motivation: React.FC = () => {
    return (
        <section className="py-10 px-6">
                <div className="space-y-8 2xl:space-y-10 container mx-auto">
                    <h2 className='text-2xl lg:text-3xl font-bold text-[#808080] text-center'>
                    Guiding Principles
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 2xl:gap-10">
                        {[
                            {
                                title: 'Open Source',
                                content: 'StableBase is committed to building an open source protocol that is free to be used, modified by anyone.',
                            },
                            {
                                title: 'Market Driven Approach',
                                content: 'The protocol is designed to be market driven with a base interest rate / fee of 0%.',
                            },
                            {
                                title: 'Decentralized and Immutable',
                                content: 'Protocol is designed to be decentralized and immutable.',
                            },
                            {
                                title: 'Focus on borrower experience',
                                content: 'The protocol is designed with borrowers in mind, with the goal of making it flexible and predictable for borrowers.',
                            },
                        ].map((item, i) => (
                            <GradientBackgroundContainer key={i} colorRight="#7ed372b3">
                                <div
                                    className="p-6"
                                >
                                    <h3 className="text-xl 2xl:text-2xl font-semibold text-[#7ed372b3] mb-3">{item.title}</h3>
                                    <p className="2xl:text-lg text-gray-300">{item.content}</p>
                                </div>
                            </GradientBackgroundContainer>
                        ))}
                    </div>
                </div>
        </section>
    );
};

export default Motivation;
