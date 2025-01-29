'use client';

import { JSX } from "react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Tracks", href: "#tracks" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "FAQ", href: "#faq" },
  { name: "Apply", href: "#apply" },
];

const DockNavbar = (): JSX.Element => {
  return (
    <div className="fixed mt-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-90 rounded-lg shadow-lg p-4 z-50">
      <nav className="flex space-x-6 items-center">
        {/* Navigation Links */}
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="text-white text-sm font-medium hover:text-gold transition duration-200"
          >
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default DockNavbar;
