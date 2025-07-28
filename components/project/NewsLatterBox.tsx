'use client';

import { motion } from "framer-motion";

const CourtInfoSystem = () => {
  return (
    <motion.div
      className="h-full p-6 sm:p-8 lg:p-10 xl:p-12 space-y-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      {/* Title Section */}
      <motion.div
        className="relative rounded-lg px-6 py-6 shadow-lg overflow-hidden bg-white flex items-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="absolute left-0 top-0 h-full w-2 bg-[#006400] animate-pulse shadow-[0_0_20px_rgba(0,100,0,0.5)]" />
        <motion.h3
          className="ml-8 text-[#006400] text-4xl font-bold tracking-wide"
          style={{ letterSpacing: '0.02em' }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        >
          Court Information Management System
        </motion.h3>
      </motion.div>

      {/* Content Section */}
      <div className="bg-white border border-gray-300 rounded-lg px-8 py-8 shadow-md text-[#006400]">
        <p className="mb-8 text-[18px] leading-relaxed">
          This web-based system, built using PHP, JavaScript, and Bootstrap,
          enhances judicial operations by digitizing case tracking and litigant
          data management. Its core automation and secure access increase
          transparency and efficiency within legal workflows.
        </p>

        <h4 className="text-2xl font-semibold mb-4 text-[#004d00]">Key Features:</h4>

        <ul className="space-y-5 text-[17px] leading-relaxed">
          <li className="flex gap-2 items-start">
            <span>🔐</span>
            <span>
              <strong>Secure Case Management:</strong> Real-time tracking with
              role-based access.
            </span>
          </li>
          <li className="flex gap-2 items-start">
            <span>📄</span>
            <span>
              <strong>Litigant Info System:</strong> Centralized profiles & document handling.
            </span>
          </li>
          <li className="flex gap-2 items-start">
            <span>📬</span>
            <span>
              <strong>Email Notifications:</strong> Alerts for hearings, updates, and documents.
            </span>
          </li>
          <li className="flex gap-2 items-start">
            <span>📊</span>
            <span>
              <strong>Automated Workflow:</strong> Reduces admin overhead, speeds up resolutions.
            </span>
          </li>
          <li className="flex gap-2 items-start">
            <span>🌐</span>
            <span>
              <strong>Responsive Interface:</strong> Built with Bootstrap, fully mobile-friendly.
            </span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default CourtInfoSystem;
