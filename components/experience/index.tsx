'use client';

import { motion } from "framer-motion";

const Blog = () => {
  return (
    <section
      id="experience"
      className="relative py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-black text-white overflow-hidden font-serif"
    >
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-sky-500 via-blue-400 to-sky-500"></div>

        {/* Section Title */}
        <div className="text-center mb-20">
         <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight text-center mb-6">
  Professional Experience
</h2>

          <p className="text-blue-200 mt-4 max-w-2xl mx-auto text-2xl">
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
              item.side === "left" ? "lg:pl-12 lg:mr-auto" : "lg:pr-12 lg:ml-auto"
            } mb-24`}
          >
            <div className="group bg-white text-black border border-gray-200 rounded-2xl shadow-xl p-8 h-full transition-all duration-300 hover:shadow-2xl hover:scale-[1.015] flex flex-col justify-between">
              <div>
                {/* Title */}
                <h3 className="text-5xl font-bold text-blue-800">{item.title}</h3>

                {/* Company and Date */}
                <p className="text-gray-700 text-3xl mb-4">
                  {item.company}
                  <br />
                  <span className="font-semibold">{item.date}</span>
                </p>

                {/* Description */}
                <div className="text-dark-green text-2xl space-y-3 leading-relaxed">
                  {item.description.map((d, index) => (
                    <p key={index}>→ {d}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline Dot */}
            <div
              className={`absolute top-5 ${
                item.side === "left" ? "-right-[6.5px]" : "-left-[6.5px]"
              } w-4 h-4 bg-sky-500 rounded-full border-2 border-white`}
            ></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
