import React from 'react';
import What from './Overview/What';
import Why from './Overview/Why';
import How from './Overview/How';
import ExpertTeam from "./ExpertTeam";
import Timeline from "./Timeline";
import Footer from './Footer';
import universe from "../assets/photos/hero.jpeg";
import imageBlob from "../assets/photos/blobImage.png"

const Home: React.FC = () => {
  return (
    <>
      <section
        className="flex flex-col gap-8 mx-auto justify-center md:flex-row items-center p-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${universe})` }}
      >
        <div className="flex flex-col gap-4 text-center md:text-left mx-auto">
          <h1 className="text-4xl md:text-6xl font-black tracking-wide">STABLEBASE</h1>
          <h2 className="md:text-lg text-gray-200">Empowering You to Control Your Financial Future</h2>
          <div>
            <button className="px-6 py-3 bg-white text-violet-600 font-semibold rounded-lg shadow-lg hover:bg-violet-500 hover:text-white transition duration-300 ease-in-out">
              Get started for free
            </button>
          </div>
        </div>
        <div className="flex justify-center md:justify-end mx-auto">
          <object
            data="https://141b7c150b00f338e700fb1580e57ed6.cdn.bubble.io/f1727093355139x847709677085598700/coin.svg"
            type="image/svg+xml"
            className="shadow-md w-72 h-w-72 md:w-[100%] md:h-[100%]"
          >
            Your browser does not support SVG
          </object>
        </div>
      </section>
      <What />
      <Why />
      <How />
      <ExpertTeam />
      <Timeline />
      <Footer />
    </>
  );
};

export default Home;
