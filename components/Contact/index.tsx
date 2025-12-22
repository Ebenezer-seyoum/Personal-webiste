"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : -40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
};

const BlogDetailsPage = () => {
  return (
   <section
  id="contact"
  className="overflow-hidden py-16 md:py-20 lg:py-28 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-black"
  style={{ fontFamily: '"Times New Roman", serif' }}
>


      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn()}
        >
          {/* Header */}
          
          <div className="text-center mb-12">
            <motion.h2
              className="mb-4 text-6xl font-bold leading-tight text-dark dark:text-white sm:text-6xl"
              variants={fadeIn("up", 0.2)}
            >
              Get in Touch
            </motion.h2>
            <motion.p
              className="text-base font-normal text-gray-800 dark:text-gray-200 sm:text-2xl"
              variants={fadeIn("up", 0.3)}
            >
              I would love to discuss any future professional opportunities, potential partnerships, or even freelance roles — feel free to get in touch.
            </motion.p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg space-y-5"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              variants={fadeIn("up", 0.4)}
            >
              <h4 className="text-4xl font-bold text-dark text-center">Contact Info</h4>

              <div className="space-y-5 text-[17px] sm:text-[18px] leading-relaxed">
                <div className="flex items-center gap-4">
                  <a
                    href="mailto:Abseyoum16@gmail.com"
                    className="flex items-center gap-4 text-dark-green hover:underline"
                  >
                    <motion.svg
                      className="h-6 w-6 text-dark-green"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </motion.svg>
                    <span>Abseyoum16@gmail.com</span>
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href="tel:+25199299398"
                    className="flex items-center gap-4 text-dark-green hover:underline"
                  >
                    <motion.svg
                      className="h-6 w-6 text-dark-green"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.11-.21 11.36 11.36 0 003.89.73 1 1 0 011 1v3.5a1 1 0 01-1 1A16 16 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.33.25 2.6.73 3.89a1 1 0 01-.21 1.11l-2.2 2.2z" />
                    </motion.svg>
                    <span>+251 909 299 398</span>
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-4 text-dark-green">
                    <motion.svg
                      className="h-6 w-6 text-dark-green"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                    </motion.svg>
                    <span>Addis Ababa, Ethiopia</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
         <motion.div
  className="bg-white text-dark-green p-6 rounded-2xl shadow-lg"
  whileHover={{ scale: 1.02 }}
  transition={{ type: "spring", stiffness: 300 }}
  variants={fadeIn("up", 0.6)}
>
  <h4 className="text-4xl sm:text-5xl font-bold mb-6 text-dark text-center">Find me on:</h4>

  <div className="flex flex-col gap-6 text-[20px] sm:text-[21px] leading-relaxed">
    {[
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/Ebenezer-seyoum",
        icon: "linkedin",
      },
      {
        name: "GitHub",
        href: "https://github.com/Ebenezer-seyoum",
        icon: "github",
      },
      {
        name: "LeetCode",
        href: "https://leetcode.com/Ebenezer-seyoum",
        icon: "leetcode",
      },
      {
        name: "Telegram",
        href: "https://t.me/Abeni_M21",
        icon: "telegram",
      },
    ].map(({ name, href, icon }) => (
      <motion.a
        key={name}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 group"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.3 }}
      >
        {/* FIXED: use <img> instead of <Image> */}
        <img
          src={`https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${icon}.svg`}
          alt={name}
          width="28"
          height="28"
          className="h-8 w-8 group-hover:scale-110 transition-transform duration-300"
        />
        <span className="text-[20px] sm:text-[21px] group-hover:underline">{name}</span>
      </motion.a>
    ))}
  </div>
</motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogDetailsPage;
