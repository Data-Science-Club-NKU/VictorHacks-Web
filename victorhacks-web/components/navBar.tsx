'use client';

import { JSX } from 'react';
import Link from 'next/link';
interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'About', href: './about.tsx' }, 
  { name: 'Tracks', href: './tracks.tsx' },
  { name: 'Sponsors', href: './sponsors.tsx' },
  { name: 'FAQ', href: './faq.tsx' },
  { name: 'Apply', href: './RegistrationForm.tsx' },
];

const DockNavbar = (): JSX.Element => {
  return (
    <div className="fixed mt-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-90 rounded-lg shadow-lg p-4 z-50">
      <nav className="flex space-x-6 items-center">
        {/* Navigation Links */}
        {navItems.map((item, index) => (
          <Link key={index} href={item.href} className="text-white text-sm font-medium hover:text-gold transition duration-200">
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default DockNavbar;
