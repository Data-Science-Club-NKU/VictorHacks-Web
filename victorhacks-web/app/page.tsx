'use client';

import { JSX } from "react";
import DockNavbar from "../components/navBar";
import Head from "next/head";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Victor Hacks 2024</title>
        <meta
          name="description"
          content="Victor Hacks 2024: A Hackathon Fit for Vikings"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Include Navbar */}
      <DockNavbar />

      <div className="h-screen bg-viking bg-cover bg-center flex items-center justify-end text-white relative font-ibmplex pr-4">
        {/* Main Content */}
        <div className="z-10 text-center">
          <h1 className="text-6xl font-extrabold text-gold">
            Victor Hacks 2024
          </h1>
          <p className="text-2xl mt-4 font-semibold text-white">
            A Hackathon Fit for Vikings
          </p>
          <p className="mt-6 text-lg text-white">
            Join us on September 13–14 and unleash your inner warrior!
          </p>

          {/* Email Input Form */}
          <div className="mt-6 flex justify-center items-center space-x-6">
            <div>
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md text-black focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button className="px-6 py-2 bg-gold rounded-r-md hover:bg-yellow-600 text-white font-bold">
                Notify me
              </button>
            </div>
          </div>

          {/* Sponsorship Info */}
          <p className="mt-8 text-sm text-white">
            Interested in sponsoring us? Fill out{" "}
            <a
              href="https://www.victorhacks.org/sponsor"
              className="underline text-gold hover:text-white"
            >
              this interest form
            </a>{" "}
            or reach out at{" "}
            <a
              href="mailto:sponsor@victorhacks.org"
              className="underline text-gold hover:text-white"
            >
              sponsor@victorhacks.org
            </a>.
          </p>
        </div>

        {/* Footer Viking Logo */}
        <div className="absolute bottom-4 right-4">
          <img
            src="https://png.pngtree.com/png-clipart/20240923/original/pngtree-viking-warrior-head-logo-png-image_16075099.png"
            alt="Viking Logo"
            className="w-16 h-16 opacity-80"
          />
        </div>
      </div>
    </>
  );
}
