'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const titles = [
  "Full Stack Web Developer",
  "Mobile App Developer",
  "Junior IT Specialist",
  "Cyber Security Analyst",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-20 md:py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-black text-white overflow-hidden"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="w-full h-full border-t-4 border-yellow-400 shadow-[0_-15px_50px_-10px_rgba(250,204,21,0.7)] animate-pulse rounded-lg p-6">
              <motion.div
                className="mx-auto max-w-[800px] text-center font-serif"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-[#FAF5EF] sm:text-4xl md:text-5xl">
                  Hello, I'm Ebenezer Seyoum,
                </h1>

                <p className="mb-6 text-xl font-semibold text-[#F29D38] transition-all duration-500 ease-in-out">
                  A{" "}
                  <span
                    key={titles[index]}
                    className="inline-block animate-fadeSlide text-transparent bg-clip-text bg-gradient-to-r from-[#F29D38] via-[#f3b755] to-[#d78520] underline underline-offset-8 decoration-[#F29D38] decoration-2 font-bold"
                  >
                    {titles[index]}
                  </span>
                </p>

                <motion.div
                  className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                  <Link
                    href="mailto:abseyoum16@gmail.com"
                    className="rounded-md bg-white py-2 px-6 text-base font-semibold text-black hover:bg-[#facc15] active:bg-[#d78520] transition duration-300"
                  >
                    Contact Me
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
