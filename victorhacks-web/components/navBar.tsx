'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase/config';
import Link from 'next/link';

interface NavItem {
  name: string;
  href: string;
  newTab?: boolean;
}

const navItems: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Tracks', href: '#tracks' },
  { name: 'Sponsors', href: '#sponsors' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Apply', href: '/register', newTab: true },
];

const DockNavbar = () => {
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
      router.push('/');
    }
  };

  return (
    <>
      {/* MLH Trust Badge */}
      <div className="absolute top-0 left-0 ml-4 z-50">
        <img
          src="https://hack.gt/img/global/mlh-trust-badge-2025-blue.png"
          alt="MLH Trust Badge"
          className="w-32 h-auto"
        />
      </div>
      {/* Navbar */}
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-gray-900 bg-opacity-90 rounded-3xl shadow-lg mt-4 py-4 px-20 z-40 w-auto">
        <nav className="flex justify-between items-center">
          {/* Navigation Links */}
          <div className="flex space-x-12 items-center">
            {navItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.href} 
                className="text-white text-sm font-medium hover:text-gold transition duration-200"
                {...(item.newTab ? {
                  target: "_blank",
                  rel: "noopener noreferrer"
                } : {})}
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* Logout Button if Logged In */}
          {isLoggedIn && (
            <button 
              onClick={handleLogout} 
              className="ml-6 text-white text-sm font-medium bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition duration-200"
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </>
  );
};

export default DockNavbar;