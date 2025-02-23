'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase/config';
import Link from 'next/link';
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { useAuth } from '@clerk/nextjs';


interface NavItem {
  name: string;
  href: string;
  newTab?: boolean;
  protected?: boolean;
}

const navItems: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Tracks', href: '#tracks' },
  { name: 'Sponsors', href: '#sponsors' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Apply', href: '/register', newTab: true },
  { name: 'Competitions', href: '/Dashboard', newTab: true, protected: true },
];


const DockNavbar = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  return (
    <>
      {/* MLH Trust Badge */}
      <a
        id="mlh-trust-badge"
        style={{
          display: 'block',
          maxWidth: '100px',
          minWidth: '60px',
          position: 'fixed',
          right: '50px',
          top: '0',
          width: '10%',
          zIndex: '10000',
        }}
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg"
          alt="Major League Hacking 2024 Hackathon Season"
          style={{ width: '100%' }}
        />
      </a>

      {/* Navbar */}
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Navigation Links */}
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          {navItems.map((item, index) => (
            <li key={index}>
          {item.protected ? (
            <SignedIn>
              <Link href={item.href} target={item.newTab ? '_blank' : undefined} className="text-black">
            {item.name}
              </Link>
            </SignedIn>
          ) : (
            <Link href={item.href} target={item.newTab ? '_blank' : undefined} className="text-black">
              {item.name}
            </Link>
          )}
            </li>
          ))}
        </ul>
          </div>

          {/* User Authentication */}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DockNavbar;