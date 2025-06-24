import React from "react";
import github from "../../assets/github.png";

const LeftSide = ({ project }) => (
  <div className="flex flex-col flex-1 max-w-md">
    <span
      className="text-[72px] leading-[72px] font-extralight stroke-white stroke-[1px] select-none mb-4"
      style={{ color: "#fde047" }} // sets the text color to yellow
    >
      {project.number}
    </span>
    <h1 className="text-[28px] font-semibold mb-3">
      {project.title}
    </h1>
    <p className="text-[13px] font-light text-gray-400 mb-4 leading-relaxed" style={{ whiteSpace: "pre-line" }}>
      {project.description}
    </p>
    <p className="text-[14px] font-semibold text-[#00b96b] mb-6">
      {project.tech}
    </p>
    <hr className="border-gray-700 mb-6" />
    <div className="flex gap-4">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open GitHub repository"
        className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#fde047] transition"
      >
        <img src={github} alt="github" style={{ width: 24, height: 24 }} />
      </a>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open project link"
        className="w-10 h-10 rounded-full bg-[#ffffff] flex items-center justify-center hover:bg-[#3a3a3a] transition"
      >
        <span
          style={{
            fontSize: "1.7rem",
            color: "#000",
            fontWeight: "bold",
            lineHeight: 1,
            display: "inline-block",
            transform: "translateY(-2px)"
          }}
        >
          ↗
        </span>
      </a>
    </div>
  </div>
);

export default LeftSide;