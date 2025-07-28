import React from "react";
import github from "../../assets/github.png";

const LeftSide = ({ project }) => (
  <div className="flex flex-col w-full lg:w-1/2 order-2 lg:order-1 space-y-4 lg:space-y-6">
    <span
      className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-none font-extralight select-none text-center lg:text-left"
      style={{ color: "#fde047" }}
    >
      {project.number}
    </span>
    <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-center lg:text-left leading-tight">
      {project.title}
    </h1>
    <p className="text-sm sm:text-base lg:text-lg font-light text-gray-300 leading-relaxed text-center lg:text-left overflow-hidden" style={{ whiteSpace: "pre-line" }}>
      {project.description}
    </p>
    <p className="text-sm sm:text-base lg:text-lg font-semibold text-[#00b96b] text-center lg:text-left">
      {project.tech}
    </p>
    <hr className="border-gray-600" />
    <div className="flex gap-4 lg:gap-6 justify-center lg:justify-start">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open GitHub repository"
        className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#fde047] transition-all duration-300 transform hover:scale-110 shadow-lg"
      >
        <img src={github} alt="github" className="w-5 h-5 lg:w-6 lg:h-6" />
      </a>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open project link"
        className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#ffffff] flex items-center justify-center hover:bg-[#3a3a3a] hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
      >
        <span
          className="text-lg lg:text-xl font-bold leading-none"
          style={{
            color: "inherit",
            display: "inline-block"
          }}
        >
          ↗
        </span>
      </a>
    </div>
  </div>
);

export default LeftSide;