import React from "react";

const RightSide = ({ project, onPrev, onNext }) => (
  <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
    <div className="relative group">
      <img
        alt={project.title}
        className="w-full h-auto max-h-[250px] sm:max-h-[300px] lg:max-h-[350px] xl:max-h-[400px] object-cover rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
        src={project.image}
      />
      <div className="absolute inset-0 bg-black/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <div className="absolute bottom-3 right-3 flex gap-2">
      <button
        aria-label="Previous slide"
        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#00ff5f] rounded-lg flex items-center justify-center text-black font-bold hover:bg-[#00cc4a] transition-all duration-300 shadow-lg transform hover:scale-110 text-base sm:text-lg"
        onClick={onPrev}
      >
        ‹
      </button>
      <button
        aria-label="Next slide"
        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#00ff5f] rounded-lg flex items-center justify-center text-black font-bold hover:bg-[#00cc4a] transition-all duration-300 shadow-lg transform hover:scale-110 text-base sm:text-lg"
        onClick={onNext}
      >
        ›
      </button>
    </div>
  </div>
);

export default RightSide;