import React, { useState } from "react";
import { motion } from "framer-motion";
import LeftSide from "../components/Project/LeftSide";
import RightSide from "../components/Project/RightSide";
import prepbot from "../assets/prepbot.png";
import melodic from "../assets/melodic.png";

// Example project data array
const projects = [
  {
    number: "01",
    title: "PrepBot",
    description:
      "PrepBot is an AI-powered mock interview platform that simulates real interview scenarios, evaluates\nresponses, and provides instant feedback. It helps users improve communication, technical skills, and\nconfidence for job success.",
    tech: "Next.js, React, Drizzle ORM, PostgreSQL, Tailwind CSS, Gemini API",
    image: prepbot,
    github: "https://github.com/Shreya2026/PrepBot",
    link: "https://www.prepbot.tech/",
  },
  {
    number: "02",
    title: "Melodic",
    description:
      "A responsive music streaming website designed to deliver a seamless and enjoyable listening experience across all devices.",
    tech: "HTML,CSS,Javascript",
    image: melodic,
    github: "https://github.com/shreya2026/melodic",
    link: "https://shreyanshi.me/Melodic/",
  },
  // Add more projects as needed
];

function Project() {
  const [current, setCurrent] = useState(0);

  const handlePrev = () =>
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-[#18191f] text-white flex items-center justify-center p-6 min-h-70 ml-23 ">
        <div
          className="w-full flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20"
          style={{
            maxWidth: "850px",
            minHeight: "480px",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <LeftSide project={projects[current]} />
          <RightSide
            project={projects[current]}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
