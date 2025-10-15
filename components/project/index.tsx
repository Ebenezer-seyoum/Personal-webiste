"use client";

import NewsLatterBox from "./NewsLatterBox";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="overflow-hidden py-16 md:py-20 lg:py-28 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-black"
      style={{ fontFamily: '"Times New Roman", serif' }}
    >
      <div className="container max-w-screen-xl px-4 mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-12 text-center">
          My Projects
        </h1>
        <NewsLatterBox />
      </div>
    </section>
  );
};

export default ProjectsSection;
