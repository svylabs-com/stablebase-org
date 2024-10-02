import React from 'react';

const ContactUs: React.FC = () => {
    return (
        <section className="py-10 px-6 lg:p-10">
            <h2 className="font-bold text-center pt-2 text-2xl md:text-3xl mb-10">Contact Us</h2>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center h-full">
                <div className="md:w-1/2 mb-10 md:mb-0 flex flex-col justify-center items-center h-full">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-center">Share Your Thoughts</h2>
                    <p className="text-base lg:text-lg leading-relaxed mb-6 text-center">
                        We'd love to hear from you! Whether you have feedback, questions, or suggestions,
                        feel free to share your thoughts with us. Your input helps us improve and grow.
                    </p>
                </div>

                <div className="md:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl lg:text-2xl font-semibold mb-4">Send Message</h3>
                    <form>
                        <div className="mb-3">
                            <label className="block mb-2 text-sm font-medium" htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-violet-500"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="block mb-2 text-sm font-medium" htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-violet-500"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                className="w-full p-3 h-32 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-violet-500"
                                placeholder="Write your message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-violet-600 text-white font-semibold rounded-lg shadow-lg hover:bg-violet-700 transition ease-in-out duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
