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
    >
      <section className="min-h-screen flex flex-col md:flex-row items-start md:items-center justify-center px-2 sm:px-4 md:px-6 overflow-visible">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left text-white flex-1 px-2 sm:px-6 md:px-0 mb-8 md:mb-0 min-h-screen md:min-h-0 md:py-0 py-12">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="text-yellow-300">Shreyanshi Singhal</span>
          </h1>
          <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-medium mb-6">
            A Full Stack Developer
          </p>
          <div>
            <a href={myResume} download className="inline-block mb-4">
              <AnimatedButton />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center items-start md:items-center flex-1 mt-0 md:mt-0">
          <img
            src={myPhoto}
            alt="Shreyanshi Singhal"
            className="w-36 h-36 xs:w-44 xs:h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover shadow-xl mx-auto"
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
