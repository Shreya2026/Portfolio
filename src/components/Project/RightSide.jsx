import React from "react";

const RightSide = ({ project, onPrev, onNext }) => (
  <div className="flex-1 max-w-xl relative">
    <img
      alt={project.title}
      className="rounded-md shadow-lg"
      height="400"
      width="600"
      src={project.image}
    />
    <div className="absolute bottom-2 right-2 flex gap-2">
      <button
        aria-label="Previous slide"
        className="w-10 h-10 bg-[#00ff5f] rounded-sm flex items-center justify-center text-black font-bold hover:bg-[#00cc4a] transition"
        onClick={onPrev}
      >
        &lt;
      </button>
      <button
        aria-label="Next slide"
        className="w-10 h-10 bg-[#00ff5f] rounded-sm flex items-center justify-center text-black font-bold hover:bg-[#00cc4a] transition"
        onClick={onNext}
      >
        &gt;
      </button>
    </div>
  </div>
);

export default RightSide;