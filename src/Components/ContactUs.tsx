import React, { useState } from 'react';

const ContactUs: React.FC = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('User');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoLink = `mailto:info@stablebase.org?subject=${encodeURIComponent(subject)}&body=Name: ${encodeURIComponent(name)}%0AType: ${encodeURIComponent(type)}%0A%0A${encodeURIComponent(message)}`;
        window.location.href = mailtoLink;
    };

    return (
        <section className="py-10 px-6 lg:p-10">
            <h2 className="font-bold text-center pt-2 text-2xl md:text-3xl mb-10">Contact <span className="text-violet-600">Us</span></h2>
            <div className="container mx-auto flex flex-col md:flex-row justify-between md:items-center h-full">
                <div className="md:w-1/2 mb-10 md:mb-0 flex flex-col justify-center items-center h-full">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-center text-violet-600">Get In Touch</h2>
                    <p className="text-base lg:text-lg leading-relaxed text-center">
                        Contact us to get involved, whether you are a user, an investor or looking to collaborate, we would love to hear from you.
                    </p>
                </div>

                <div className="md:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl lg:text-2xl font-semibold mb-4"></h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="block mb-2 text-sm font-medium" htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-violet-500"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="block mb-2 text-sm font-medium" htmlFor="type">I'm a</label>
                            <select
                                id="type"
                                className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-violet-500"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                required
                            >
                                <option value="User">User, wanna try your product</option>
                                <option value="LiquidityProvider">Yield Farmer</option>
                                <option value="Investor">Investor</option>
                                <option value="Institution">Institution</option>
                                <option value="Developer">Developer</option>
                                <option value="Other">Others</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="block mb-2 text-sm font-medium" htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-violet-500"
                                placeholder="Enter the subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                className="w-full p-3 h-32 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-violet-500"
                                placeholder="Write your message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-violet-600 text-white font-semibold rounded-lg shadow-lg hover:bg-violet-700 transition ease-in-out duration-300"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
