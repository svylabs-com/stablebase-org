import React, { useState, useEffect } from 'react';

const sections = [
    {
        title: 'WHAT',
        content: `StableBase is a stablecoin protocol based on the Collateralized Debt Position (CDP) mechanism. It innovates price stability with pre-paid Shielding Rate and user-defined Reserve Ratio, providing flexibility and predictability in borrowing.`,
    },
    {
        title: 'WHY',
        content: `StableBase addresses the limitations of traditional interest-based stablecoin protocols by offering a more predictable, user-friendly borrowing model. Its tools ensure system stability and enhance user experience.`,
    },
    {
        title: 'HOW',
        content: `StableBase employs two key tools - the Shielding Rate and Reserve Ratio - to maintain stablecoin price parity and control money supply, while offering a 0% interest rate borrowing environment.`,
    },
    {
        title: 'TEAM',
        content: `Team: The StableBase protocol is developed by experts in blockchain technology and DeFi. They are focused on providing a secure and stable borrowing experience to both advanced users and everyday borrowers.`,
    },
    {
        title: 'TIMELINE',
        content: `Timeline: The development of StableBase has followed a rigorous roadmap to ensure stability and usability, from conceptualization to launch.`,
    },
];

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + sections.length) % sections.length);
    };

    // Automatically advance to the next slide every 3 seconds
    useEffect(() => {
        const intervalId = setInterval(nextSlide, 3000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div id="default-carousel" className="relative w-full mt-5" data-carousel="slide">
            {/* Carousel wrapper */}
            {/* <div className="relative h-64 overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-purple-500"> */}
            <div className="relative h-64 overflow-hidden rounded-lg bg-slate-200">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                        data-carousel-item
                    >
                        <div className="flex flex-col items-center justify-center h-full p-4 md:p-0 text-gray-600 md:w-[70%] mx-auto">
                            <h2 className="text-2xl font-extrabold">{section.title}</h2>
                            <p className="mt-2 text-center text-lg">{section.content}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {sections.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-300'}`}
                        aria-current={index === currentIndex ? 'true' : 'false'}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>

            {/* Slider controls */}
            <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={prevSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
                    <svg
                        className="w-4 h-4 text-blue-500 dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={nextSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
                    <svg
                        className="w-4 h-4 text-blue-500 dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default Carousel;
