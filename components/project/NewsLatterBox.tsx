'use client';

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface ProjectCardData {
  id: string;
  name: string;
  image: string;
  accent: string; // tailwind color hex
  summary: string; // 3 line short summary
  details: { icon: string; text: string }[];
}

const projects: ProjectCardData[] = [
  {
    id: "court",
    name: "Yeki Woreda Court IMS",
    image: "/images/court.png",
    accent: "#006400",
    summary:
      "Digitized case and litigant tracking system improving transparency and efficiency in judicial workflows.",
    details: [
      { icon: "🔐", text: "Secure role-based case access" },
      { icon: "📄", text: "Centralized litigant documents" },
      { icon: "📬", text: "Email hearing notifications" },
      { icon: "📊", text: "Automated workflow reduces admin" },
      { icon: "🌐", text: "Responsive Bootstrap UI" },
    ],
  },
  {
    id: "school",
    name: "Balela School IMS",
    image: "/images/IOT.jpg", // fallback school related image
    accent: "#004080",
    summary:
      "School platform for managing student records, grades, attendance and generating reports efficiently.",
    details: [
      { icon: "🎓", text: "Student profile management" },
      { icon: "📝", text: "Automated grade calculation" },
      { icon: "📅", text: "Daily attendance tracking" },
      { icon: "📑", text: "Printable report cards" },
      { icon: "📊", text: "Performance & attendance analytics" },
    ],
  },
  {
    id: "delivery",
    name: "Smart Delivery Platform",
    image: "/images/about/profile.jpg",
    accent: "#8B5CF6",
    summary:
      "Logistics web app optimizing parcel routing, real‑time driver tracking, and customer status updates.",
    details: [
      { icon: "🚚", text: "Route optimization algorithm" },
      { icon: "📍", text: "Live GPS driver tracking" },
      { icon: "🔔", text: "Status notifications & ETA" },
      { icon: "📦", text: "Warehouse inventory sync" },
      { icon: "📊", text: "Delivery performance dashboards" },
    ],
  },
  {
    id: "educonnect",
    name: "Edu Connect Portal",
    image: "/images/about/about-image.svg",
    accent: "#0EA5E9",
    summary:
      "Collaboration portal connecting schools and teachers with smart matching, messaging, and onboarding.",
    details: [
      { icon: "🤝", text: "Smart vacancy–teacher matching" },
      { icon: "💬", text: "Integrated secure messaging" },
      { icon: "📂", text: "Document & credential vault" },
      { icon: "⚙️", text: "Automated onboarding workflow" },
      { icon: "📈", text: "Analytics on hiring efficiency" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, duration: 0.6 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
};

const InfoSystems = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <motion.div
      className="w-full mx-auto px-2 sm:px-4 lg:px-6 py-6 sm:py-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{ fontFamily: 'Times New Roman, serif' }}
    >
      <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        {projects.map((p) => {
          const isOpen = openId === p.id;
          return (
            <motion.div
              key={p.id}
              variants={cardVariants}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
              {/* Header bar */}
              <div
                className="flex items-center gap-3 px-4 py-3"
                style={{ background: `linear-gradient(135deg, ${p.accent} 0%, ${p.accent}33 100%)` }}
              >
                <div className="h-10 w-10 rounded-lg bg-white/20 flex items-center justify-center text-xl font-bold text-white shadow-inner">
                  {p.name.charAt(0)}
                </div>
                <h3 className="text-white text-lg sm:text-xl font-semibold tracking-wide">
                  {p.name}
                </h3>
              </div>

              {/* Image & summary row */}
              <div className="flex flex-col sm:flex-row gap-4 p-4">
                <div className="sm:w-5/12 w-full">
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-md">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="sm:w-7/12 w-full flex flex-col justify-between">
                  <p className="text-sm sm:text-[15px] leading-relaxed text-gray-200 line-clamp-3">
                    {p.summary}
                  </p>
                  <button
                    onClick={() => toggle(p.id)}
                    className="mt-3 inline-flex items-center gap-2 self-start text-xs sm:text-sm font-medium px-3 py-2 rounded-md bg-gradient-to-r from-gray-800 to-gray-700 text-white hover:from-gray-700 hover:to-gray-600 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
                    aria-expanded={isOpen}
                  >
                    <span>{isOpen ? 'Hide details' : 'See more'}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="inline-block"
                    >
                      ▼
                    </motion.span>
                  </button>
                </div>
              </div>

              {/* Expandable details */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-4 pb-5"
                  >
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                      {p.details.map((d, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-[13px] sm:text-[14px] text-gray-100 bg-white/5 rounded-md px-3 py-2 border border-white/10"
                        >
                          <span className="text-base sm:text-lg">{d.icon}</span>
                          <span>{d.text}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Accent glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{ boxShadow: `0 0 0 1px ${p.accent}22, 0 0 30px -10px ${p.accent}` }}
              />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default InfoSystems;
