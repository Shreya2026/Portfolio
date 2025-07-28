import React from 'react';
import myResume from '../assets/myResume.pdf'; 
import myPhoto from '../assets/My-Photo.png'; 
import AnimatedButton from '../components/AnimatedButton/AnimatedButton';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      className="w-full h-screen overflow-hidden"
    >
      <section className="h-full w-full flex flex-col lg:flex-row items-center justify-center px-4 md:px-8 lg:px-16 xl:px-24">
        {/* Left Section - Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left text-white space-y-4 lg:space-y-6 lg:pr-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-yellow-300">Shreyanshi Singhal</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-200">
            A Full Stack Developer
          </p>
          <div className="pt-2 lg:pt-4">
            <a href={myResume} download className="inline-block">
              <AnimatedButton />
            </a>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mt-6 lg:mt-0 lg:pl-8">
          <img
            src={myPhoto}
            alt="Shreyanshi Singhal"
            className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover shadow-2xl"
            style={{
              borderRadius: '50% 50% 56% 44% / 18% 17% 83% 82%',
              backgroundColor: '#134c55'
            }}
          />
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
