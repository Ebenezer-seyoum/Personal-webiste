'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header({ sticky }: { sticky: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuData = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'About', path: '/about' },
    { id: 3, title: 'Experience', path: '/experience' },
    { id: 4, title: 'Projects', path: '/project' },
    { id: 5, title: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent font-serif ${
        sticky
          ? '!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20'
          : 'absolute'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between py-4 px-4">
          {/* Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-md bg-white py-2 px-6 text-base font-semibold text-black hover:bg-[#facc15] active:bg-[#d78520] transition duration-300 flex items-center justify-center"
          >
            <svg
              className="h-6 w-6 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Resume Button */}
          <a
            href="/Ebenezer Seyoum CV.pdf"
            download
            className="rounded-md bg-white py-2 px-6 text-base font-semibold text-black hover:bg-[#facc15] active:bg-[#d78520] transition duration-300"
          >
            Download Resume
          </a>
        </div>

        {/* Navigation Links */}
        {menuOpen && (
          <nav className="bg-white border-t border-gray-300 px-6 py-4 shadow-md font-serif">
            <ul className="space-y-2">
              {menuData.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="block text-base font-semibold text-black hover:bg-[#facc15] active:bg-[#d78520] rounded-md px-4 py-2 transition duration-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
