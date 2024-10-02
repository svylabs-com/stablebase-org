import React from 'react';

const Timeline: React.FC = () => {
    const timelineItems = [
        {
            date: 'January 2024',
            content: 'Started working on the project and set initial goals.',
        },
        {
            date: 'February 2024',
            content: 'Conducted market research and gathered feedback.',
        },
        {
            date: 'March 2024',
            content: 'Completed the first phase of development.',
        },
        {
            date: 'April 2024',
            content: 'Introduced new features based on user feedback.',
        },
        {
            date: 'May 2024',
            content: 'Finalized the product design and user interface.',
        },
        {
            date: 'June 2024',
            content: 'Launched the beta version for testing.',
        },
        {
            date: 'July 2024',
            content: 'Gathered user feedback and iterated on features.',
        },
        {
            date: 'August 2024',
            content: 'Enhanced performance and fixed bugs from beta.',
        },
        {
            date: 'September 2024',
            content: 'Received user feedback and made improvements.',
        },
        {
            date: 'October 2024',
            content: 'Officially launched the product to the public.',
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
                                    index % 2 === 0 ? 'bg-blue-600' : 'bg-blue-400'
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
