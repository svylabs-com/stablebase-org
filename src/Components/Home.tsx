import React from 'react';
import Motivation from './Motivation';
import What from './Overview/What';
import Why from './Overview/Why';
import How from './Overview/How';
import Team from "./Team";
import Timeline from "./Timeline";
// import ContactUs from './ContactUs';
import Footer from './Footer';
// import universe from "../assets/svg/future2.svg";
import universe from "../assets/photos/hero-backgroung.jpg";
import coin from "../assets/svg/dfid.svg";

const Home: React.FC = () => {
  return (
    <>
      <section
        className="flex flex-col gap-8 mx-auto justify-center md:flex-row items-center p-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${universe})` }}
      >
        <div className="flex flex-col gap-4 text-center md:text-left mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-wide bg-gradient-to-r from-gray-300 via-gray-500 to-white bg-clip-text text-transparent">
            STABLEBASE
          </h1>
          <h2 className="text-sm sm:text-base md:text-lg text-[#B0B0B0] lg:opacity-80">A market-driven stablecoin protocol with a simple pay-as-you-go pricing</h2>
          <div className="flex justify-center md:justify-start">
            {/* <a
              className="px-4 sm:px-6 py-2 sm:py-3 bg-yellow-600 text-[#161619] font-semibold rounded-lg shadow-lg hover:bg-yellow-500 hover:text-black transition duration-300 ease-in-out text-xs sm:text-base"
              href='https://github.com/svylabs/stablebase/blob/main/WHITEPAPER.md'
            >
              Get started with whitepaper
            </a> */}
            <a
              className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-b from-[#FFD572] to-[#FEBD38] text-[#161619] font-semibold rounded-lg shadow-[0px_10px_20px_0px_#FBCC6440] hover:bg-yellow-500 hover:text-black transition duration-300 ease-in-out text-xs sm:text-base"
              href='https://github.com/svylabs/stablebase/blob/main/WHITEPAPER.md'
            >
              Get started with whitepaper
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end mx-auto">
          <img src={coin} alt='coin' className="shadow-md w-72 h-w-72 md:w-[100%] md:h-[100%]"></img>
        </div>
      </section>
      <Motivation />
      <What />
      <Why />
      <How />
      <Team />
      <Timeline />
      {/* <ContactUs /> */}
      <Footer />
    </>
  );
};

export default Home;
