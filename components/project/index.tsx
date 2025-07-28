"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
   <section
  id="contact"
  className="overflow-hidden py-16 md:py-20 lg:py-28 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-black"
  style={{ fontFamily: '"Times New Roman", serif' }}
>

      <h1 className="text-6xl font-extrabold text-white mb-8 px-6 text-center">
        My Projects
      </h1>

      <div className="container max-w-screen-xl px-4 mx-auto relative z-10">
        <div className="-mx-4 flex flex-wrap items-center justify-start">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full px-4 lg:w-5/12 xl:w-4/12 z-10"
          >
            <div
              onClick={() => setIsZoomed(true)}
              className="rounded-2xl overflow-hidden border border-white/10 shadow-xl cursor-pointer transition hover:scale-105"
            >
              <Image
                src="/images/court.png"
                alt="Court Project"
                width={500}
                height={500}
                className="object-cover w-full h-full rounded-2xl"
                priority
              />
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full px-4 lg:w-7/12 xl:w-8/12 mt-10 lg:mt-0 z-10"
          >
            <NewsLatterBox />
          </motion.div>
        </div>
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsZoomed(false)}
            />

            {/* Modal Content */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsZoomed(false)}
            >
              <div className="max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-900">
                <Image
                  src="/images/court.png"
                  alt="Zoomed Court Project"
                  width={1000}
                  height={1000}
                  className="object-contain w-full h-auto rounded-2xl"
                  priority
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
