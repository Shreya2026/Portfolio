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
    link: "https://shreya2026.github.io/Melodic/",
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
      className="h-screen w-full bg-[#18191f] text-white overflow-hidden p-4 md:p-6 lg:p-8"
    >
      <div className="max-w-7xl mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-12 h-full justify-center">
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
