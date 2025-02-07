'use client';

import { JSX, useEffect, useState } from "react";
import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase/config'; // Adjust this import path as needed
import { useRouter } from 'next/navigation';

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
  const [signOut, loading, error] = useSignOut(auth);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    const success = await signOut();
    if (success) {
      console.log('Signed out successfully');
      router.push('/'); // Redirect to home page after logout
    }
  };

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
        {/* Logout Button */}
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            disabled={loading}
            className="text-white text-sm font-medium hover:text-red-500 transition duration-200"
          >
            {loading ? 'Logging out...' : 'Logout'}
          </button>
        )}
      </nav>
    </div>
  );
};

export default DockNavbar;
