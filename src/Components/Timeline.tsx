import React from 'react';

const Timeline: React.FC = () => {
    const timelineItems = [
        {
            date: 'September - November 2023',
            content: 'Researched on existing protocols, gaps identified',
        },
        {
            date: 'December 2023',
            content: 'Came up with the concept of user-defined origination fees',
        },
        {
            date: 'December 2023 - February 2024',
            content: 'Early prototypes with user-defined origination fees',
        },
        {
            date: 'March-April 2024',
            content: 'Unsatisfied with the protocol, went back to the drawing board',
        },
        {
            date: 'May 2024',
            content: 'Introduced the concept of reserve ratio',
        },
        {
            date: 'June 2024',
            content: 'Redemption protection finalized',
        },
        {
            date: 'June - October 2024',
            content: 'Code, Test, Repeat',
        },
        {
            date: 'July 2024',
            content: 'Protocol Advisor onboarded',
        },
        {
            date: 'September 2024',
            content: 'Whitepaper draft released',
        },
        {
            date: 'October 2024',
            content: 'Alpha Launch',
        },
        {
            date: 'October 2024',
            content: 'Bootstrap ecosystem',
        },
        {
            date: 'December 2024',
            content: 'Beta Launch in testnet'
        },
        {
            date: 'Q1 2025',
            content: 'Security Audit',
        },
        {
            date: 'April 2025',
            content: 'Launch on Mainnet',
        },
    ];

    return (
        <section className="relative bg-black text-white py-10 lg:px-10">
            <h2 className="font-bold text-center pt-2 text-2xl md:text-3xl mb-10">Project Timeline</h2>
            <div className="container mx-auto relative">
                {/* Timeline vertical line */}
                <div className="absolute w-1 bg-gray-700 h-full left-1/2 transform -translate-x-1/2 z-0"></div>

                {/* Timeline items */}
                {timelineItems.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center mb-10 lg:mb-20 ${
                            index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                        }`}
                    >
                        <div className="lg:w-1/2 lg:px-10 min-w-full md:min-w-fit z-10">
                            {/* Content block */}
                            <div
                                className={`p-6 rounded-lg shadow-lg ${
                                    index % 2 === 0 ? 'bg-gray-600' : 'bg-gray-500'
                                }`}
                            >
                                <h3 className="text-lg font-semibold">{item.date}</h3>
                                <p className="mt-2 text-sm">{item.content}</p>
                            </div>
                        </div>

                        {/* Circle and line connector */}
                        <div className="relative flex items-center justify-center h-full lg:w-1/12 lg:flex-none z-10">
                            <div className="w-8 h-8 bg-white rounded-full z-10 border-4 border-black"></div>
                        </div>

                        <div className="lg:w-1/2 lg:px-10"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Timeline;
