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
    <section className="min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-25">
        {/* Left Section */}
        <div className="mx-20 text-center md:text-left text-white flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm <span className="text-yellow-300">Shreyanshi Singhal</span></h1>
          <p className="text-2xl md:text-3xl font-medium mb-6">A Full Stack Developer</p>
          <div>
            <a href={myResume} download className="inline-block mb-4">
              <AnimatedButton />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 overflow-hidden">
          <img
            src={myPhoto} 
            alt="Shreyanshi Singhal"
            className="w-90 h-90 object-cover shadow-xl mx-auto md:mx-20" style={{ borderRadius: '50% 50% 56% 44% / 18% 17% 83% 82% ' , backgroundColor: '#134c55'}}
          />
        </div>
      </div>
    </section>
    </motion.div>
  );
};

export default Home;
