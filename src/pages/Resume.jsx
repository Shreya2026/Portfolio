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
        <span className='text-yellow-500'>🔗 Let’s connect and build something amazing together!</span>
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
      style={{
        display: 'flex',
        height: '80vh',
        background: 'rgba(0,0,0,0.1)',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
      }}
    >
      {/* Left Side */}
      <div
        style={{
          flex: 3,
          background: '#02160d',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '2rem 1rem',
          gap: '2rem',
        }}
      >
        <h1 style={{ marginBottom: '2rem' }}>Why hire me?</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
          <button
            onClick={() => setSelected('about')}
            style={{
              padding: '0.75rem 1.5rem',
              background: selected === 'about' ? '#fde047' : '#fff',
              color: selected === 'about' ? '#02160d' : '#02160d',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background 0.2s, color 0.2s',
            }}
          >
            About Me
          </button>
          <button
            onClick={() => setSelected('skills')}
            style={{
              padding: '0.75rem 1.5rem',
              background: selected === 'skills' ? '#fde047' : '#fff',
              color: selected === 'skills' ? '#02160d' : '#02160d',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background 0.2s, color 0.2s',
            }}
          >
            Skills
          </button>
          <button
            onClick={() => setSelected('education')}
            style={{
              padding: '0.75rem 1.5rem',
              background: selected === 'education' ? '#fde047' : '#fff',
              color: selected === 'education' ? '#02160d' : '#02160d',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background 0.2s, color 0.2s',
            }}
          >
            Education
          </button>
        </div>
      </div>
      {/* Right Side */}
      <div
        style={{
          flex: 7,
          background: 'radial-gradient(#134c55, #031012)',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          padding: '2rem',
          overflowY: 'auto',
        }}
      >
        <h1 style={{ color: 'rgb(225 255 0)', textAlign: 'center', width: '100%', margin: 0 }}>{heading}</h1>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 0,
          }}
        >
          {date && (
            <div style={{ textAlign: 'center', width: '100%', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1.5rem' }}>
              {date}
            </div>
          )}
          <div style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}>
            {selected === 'skills' ? (
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '2rem', 
                    minHeight: '48px', 
                    marginBottom: '2rem',
                    marginTop: '-1.5rem',
                  }}
                >
                  <button
                    onClick={() => setSkillTab('language')}
                    style={{
                      padding: '0.5rem 1.2rem',
                      background: skillTab === 'language' ? '#fde047' : '#fff',
                      color: skillTab === 'language' ? '#02160d' : '#02160d',
                      border: 'none',
                      borderRadius: '6px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'background 0.2s, color 0.2s',
                    }}
                  >
                    Language
                  </button>
                  <button
                    onClick={() => setSkillTab('web')}
                    style={{
                      padding: '0.5rem 1.2rem',
                      background: skillTab === 'web' ? '#fde047' : '#fff',
                      color: skillTab === 'web' ? '#02160d' : '#02160d',
                      border: 'none',
                      borderRadius: '6px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'background 0.2s, color 0.2s',
                    }}
                  >
                    Web
                  </button>
                  <button
                    onClick={() => setSkillTab('database')}
                    style={{
                      padding: '0.5rem 1.2rem',
                      background: skillTab === 'database' ? '#fde047' : '#fff',
                      color: skillTab === 'database' ? '#02160d' : '#02160d',
                      border: 'none',
                      borderRadius: '6px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'background 0.2s, color 0.2s',
                    }}
                  >
                    Database
                  </button>
                </div>
                <div style={{ minHeight: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {skillTabs[skillTab]}
                </div>
              </div>
            ) : (
              content
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Resume;
