import React, { useState } from 'react';
import { motion } from 'framer-motion';

const skillTabs = {
  language: (
    <ul style={{ textAlign: "center", listStyle: "none", padding: 0 }}>
      <li>Java</li>
      <li>Python</li>
      <li>JavaScript</li>
      <li>C</li>
    </ul>
  ),
  web: (
    <ul style={{ textAlign: "center", listStyle: "none", padding: 0 }}>
      <li>React</li>
      <li>Node.js, Express.js</li>
      <li>HTML, CSS</li>
      <li>SASS</li>
    </ul>
  ),
  database: (
    <ul style={{ textAlign: "center", listStyle: "none", padding: 0 }}>
      <li>MongoDB</li>
      <li>MySQL</li>
    </ul>
  ),
};

const info = {
  about: {
    heading: "About Me",
    date: "",
    content: (
      <p style={{ textAlign: "center" }}>
        I am a passionate Computer Science Engineering student with a knack for building user-friendly web applications and solving real-world problems through code, currently pursuing my B.Tech in Computer Science and have a growing interest in full-stack development.
        <br /><br />
        Beyond code, I love learning new tools, contributing to meaningful projects, and collaborating with like-minded developers. I believe in writing clean, maintainable code and designing with accessibility and performance in mind.
        <br /><br />
        <span className='text-yellow-500'>🔗 Let's connect and build something amazing together!</span>
      </p>
    ),
  },
  skills: {
    heading: "Skills",
    date: "",
    content: null, 
  },
  education: {
    heading: "Education",
    date: "2022 - 2026",
    content: (
      <div style={{ textAlign: "center" }}>
        <div>
          <span style={{ color: "#fde047", fontWeight: "bold" }}>
            Bachelors of Technology - Computer Science and Engineering
          </span>
          <br />
          <span style={{ color: "#fff" }}>
            Dr. A.P.J. Abdul Kalam Technical University | 2026 &nbsp; Overall CGPA:8.28
          </span>
        </div>
        <br />
        <div>
          <span style={{ color: "#fde047", fontWeight: "bold" }}>
            Class 12
          </span>
          <br />
          <span style={{ color: "#fff" }}>
            Silver Line Prestige School(CBSE) | 2022 &nbsp; 76%
          </span>
        </div>
        <br />
        <div>
          <span style={{ color: "#fde047", fontWeight: "bold" }}>
            Class 10
          </span>
          <br />
          <span style={{ color: "#fff" }}>
            Silver Line Prestige School(CBSE) | 2020 &nbsp; 89%
          </span>
        </div>
      </div>
    ),
  },
};

function Resume() {
  const [selected, setSelected] = useState('about');
  const [skillTab, setSkillTab] = useState('language');
  const { heading, date, content } = info[selected];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="h-screen w-full px-4 md:px-8 lg:px-16 xl:px-24 py-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto bg-black/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl h-full">
        <div className="flex flex-col md:flex-row h-full">
          {/* Left Side - Navigation */}
          <div className="w-full md:w-1/3 bg-[#02160d] text-white flex flex-col items-center p-4 md:p-6">
            <h1 className="text-lg md:text-xl xl:text-2xl mb-4 md:mb-6 text-center font-bold">Why hire me?</h1>
            <div className="flex flex-row md:flex-col gap-2 md:gap-4 w-full max-w-md overflow-x-auto md:overflow-x-visible">
              <button
                onClick={() => setSelected('about')}
                className={`px-4 py-3 md:px-6 md:py-4 whitespace-nowrap rounded-lg font-bold cursor-pointer transition-all duration-300 text-sm md:text-base ${
                  selected === 'about' 
                    ? 'bg-[#fde047] text-[#02160d] shadow-lg transform scale-105' 
                    : 'bg-white text-[#02160d] hover:bg-gray-200 hover:transform hover:scale-102'
                }`}
              >
                About Me
              </button>
              <button
                onClick={() => setSelected('skills')}
                className={`px-4 py-3 md:px-6 md:py-4 whitespace-nowrap rounded-lg font-bold cursor-pointer transition-all duration-300 text-sm md:text-base ${
                  selected === 'skills' 
                    ? 'bg-[#fde047] text-[#02160d] shadow-lg transform scale-105' 
                    : 'bg-white text-[#02160d] hover:bg-gray-200 hover:transform hover:scale-102'
                }`}
              >
                Skills
              </button>
              <button
                onClick={() => setSelected('education')}
                className={`px-4 py-3 md:px-6 md:py-4 whitespace-nowrap rounded-lg font-bold cursor-pointer transition-all duration-300 text-sm md:text-base ${
                  selected === 'education' 
                    ? 'bg-[#fde047] text-[#02160d] shadow-lg transform scale-105' 
                    : 'bg-white text-[#02160d] hover:bg-gray-200 hover:transform hover:scale-102'
                }`}
              >
                Education
              </button>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-2/3 bg-gradient-to-br from-[#134c55] to-[#031012] text-white flex flex-col p-4 md:p-6 xl:p-8 overflow-hidden">
            <h1 className="text-xl md:text-2xl xl:text-3xl text-yellow-300 text-center mb-4 md:mb-6 font-bold">{heading}</h1>
            
            <div className="flex-1 flex flex-col justify-center items-center overflow-hidden min-h-0">
              {date && (
                <div className="text-center font-bold text-base md:text-lg xl:text-xl mb-4 md:mb-6 text-gray-200">
                  {date}
                </div>
              )}
              
              <div className="w-full max-w-4xl mx-auto overflow-y-auto flex-1 flex items-center justify-center">
                {selected === 'skills' ? (
                  <div className="w-full">
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4 md:mb-6">
                      <button
                        onClick={() => setSkillTab('language')}
                        className={`px-3 py-2 md:px-4 md:py-3 text-xs md:text-sm xl:text-base rounded-lg font-bold cursor-pointer transition-all duration-300 ${
                          skillTab === 'language' 
                            ? 'bg-[#fde047] text-[#02160d] shadow-lg transform scale-105' 
                            : 'bg-white text-[#02160d] hover:bg-gray-200 hover:transform hover:scale-102'
                        }`}
                      >
                        Languages
                      </button>
                      <button
                        onClick={() => setSkillTab('web')}
                        className={`px-3 py-2 md:px-4 md:py-3 text-xs md:text-sm xl:text-base rounded-lg font-bold cursor-pointer transition-all duration-300 ${
                          skillTab === 'web' 
                            ? 'bg-[#fde047] text-[#02160d] shadow-lg transform scale-105' 
                            : 'bg-white text-[#02160d] hover:bg-gray-200 hover:transform hover:scale-102'
                        }`}
                      >
                        Web Tech
                      </button>
                      <button
                        onClick={() => setSkillTab('database')}
                        className={`px-3 py-2 md:px-4 md:py-3 text-xs md:text-sm xl:text-base rounded-lg font-bold cursor-pointer transition-all duration-300 ${
                          skillTab === 'database' 
                            ? 'bg-[#fde047] text-[#02160d] shadow-lg transform scale-105' 
                            : 'bg-white text-[#02160d] hover:bg-gray-200 hover:transform hover:scale-102'
                        }`}
                      >
                        Database
                      </button>
                    </div>
                    <div className="min-h-[150px] md:min-h-[200px] flex items-center justify-center text-sm md:text-base xl:text-lg">
                      {skillTabs[skillTab]}
                    </div>
                  </div>
                ) : (
                  <div className="text-sm md:text-base xl:text-lg leading-relaxed flex items-center justify-center min-h-[200px] md:min-h-[300px]">
                    {content}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Resume;
