import React from 'react';
import Motivation from './Motivation';
import What from './Overview/What';
import Why from './Overview/Why';
import How from './Overview/How';
import Team from "./Team";
import Timeline from "./Timeline";
// import ContactUs from './ContactUs';
import Footer from './Footer';
import universe from "../assets/svg/future2.svg";
import coin from "../assets/svg/coin.svg";

const Home: React.FC = () => {
  return (
    <>
      <section
        className="flex flex-col gap-8 mx-auto justify-center md:flex-row items-center p-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${universe})` }}
      >
        <div className="flex flex-col gap-4 text-center md:text-left mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-wide">STABLEBASE</h1>
          <h2 className="text-sm sm:text-base md:text-lg text-gray-200">Governance free, market driven protocol enhancing the borrowing experience</h2>
          <div className="flex justify-center md:justify-start">
            <a
              className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-violet-600 font-semibold rounded-lg shadow-lg hover:bg-violet-500 hover:text-white transition duration-300 ease-in-out text-xs sm:text-base"
              href='https://github.com/svylabs/stablebase/blob/main/WHITEPAPER.pdf'
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
