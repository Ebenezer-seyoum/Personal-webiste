'use client';

import { motion } from "framer-motion";

const Blog = () => {
  return (
    <section
      id="experience"
      className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-black text-white font-serif overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative">
        {/* Vertical Timeline Line */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-sky-500 via-blue-400 to-sky-500"></div>

        {/* Section Title */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            Professional Experience
          </h2>
          <p className="text-blue-200 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto">
            A timeline of hands-on experience, training, and career development.
          </p>
        </div>

        {/* Timeline Cards */}
        {[
          {
            title: "IT Specialist Intern",
            company: "East African Lion Brands Industries PLC",
            date: "June – August 2024",
            side: "right",
            description: [
              "Resolved hardware, software, and network issues",
              "Maintained LAN infrastructure and configurations",
              "Contributed to cybersecurity protocols and access control",
              "Set up systems and monitored issue logs",
            ],
          },
          {
            title: "Cybersecurity Training",
            company: "GeezTech Security Testers",
            date: "Feb – June 2025",
            side: "left",
            description: [
              "Hands-on training in penetration testing, vulnerability scanning, system hardening, and secure access protocols",
            ],
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: item.side === "left" ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`relative w-full lg:w-2/3 ${
              item.side === "left"
                ? "lg:pl-12 lg:mr-auto"
                : "lg:pr-12 lg:ml-auto"
            } mb-16 sm:mb-20`}
          >
            {/* Timeline Dot */}
            <div
              className={`absolute top-6 ${
                item.side === "left"
                  ? "lg:-right-[8px] left-1/2 lg:left-auto"
                  : "lg:-left-[8px] left-1/2 lg:left-auto"
              } transform -translate-x-1/2 lg:transform-none w-4 h-4 bg-sky-500 rounded-full border-2 border-white z-10`}
            ></div>

          <div className="group bg-white text-black border border-gray-200 rounded-2xl shadow-xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:scale-[1.015]">
  <div>
    {/* Title */}
    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-4">
      {item.title}
    </h3>

    {/* Company and Date */}
    <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-3">
      <span className="block font-semibold">{item.company}</span>
      <span className="text-sm sm:text-base md:text-lg text-gray-500">{item.date}</span>
    </p>

    {/* Description */}
    <div className="text-black text-base sm:text-lg md:text-xl space-y-2 leading-relaxed">
      {item.description.map((d, index) => (
        <p key={index}>→ {d}</p>
      ))}
    </div>
  </div>
</div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
