"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const EducationAndCertifications = () => {
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  return (
    <section
      id="education"
      className="overflow-hidden py-16 md:py-20 lg:py-28 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-black font-serif"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white text-center mb-12 px-4">
        Education & Certifications
      </h1>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 sm:p-8 text-dark-green shadow-lg"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-dark">Education</h2>
          <p className="text-lg sm:text-xl leading-relaxed">
            🎓 <strong>BSc in Information Technology</strong><br />
            Mizan-Tepi University, Ethiopia<br />
            2022 – 2025
          </p>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 sm:p-8 text-dark-green shadow-lg"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-dark">Certifications</h2>

          {/* IoT Certificate */}
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-10 mb-12">
            <div
              onClick={() => setZoomImage("/images/IOT.jpg")}
              className="w-full lg:w-1/2 cursor-pointer rounded-xl overflow-hidden shadow hover:scale-105 transition-transform duration-300"
            >
              <Image
                src="/images/IOT.jpg"
                alt="IoT Certification"
                width={600}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl sm:text-3xl font-semibold text-dark mb-2">IoT Basics Practice Certification</h3>
              <p className="text-base sm:text-lg leading-relaxed">
                This certificate was awarded by <strong>Mizan-Tepi University</strong> in recognition of my participation
                in a one-week training program on <em>“Internet of Things (IoT) basics practice.”</em>
              </p>
            </div>
          </div>

          {/* ADBI Certificate */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-6 sm:gap-10">
            <div
              onClick={() => setZoomImage("/images/ADB.jpg")}
              className="w-full lg:w-1/2 cursor-pointer rounded-xl overflow-hidden shadow hover:scale-105 transition-transform duration-300"
            >
              <Image
                src="/images/ADB.jpg"
                alt="ADB Cybersecurity Certification"
                width={600}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl sm:text-3xl font-semibold text-dark mb-2">ADBI Cybersecurity Certification</h3>
              <p className="text-base sm:text-lg leading-relaxed">
                This certification from the <strong>Asian Development Bank Institute (ADBI)</strong> focuses on
                foundational cybersecurity knowledge, including digital risk management, secure infrastructure, and
                policy frameworks.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {zoomImage && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setZoomImage(null)}
            />
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={() => setZoomImage(null)}
            >
              <div className="max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl bg-white">
                <Image
                  src={zoomImage}
                  alt="Zoomed Certification"
                  width={1000}
                  height={1000}
                  className="object-contain w-full h-auto"
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

export default EducationAndCertifications;
