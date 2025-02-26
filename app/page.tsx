"use client";

import { JSX } from "react";
import DockNavbar from "../components/navBar";
import Head from "next/head";
import Tracks from "@/components/tracks";
import { Sponsors } from "@/components/sponsors";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import Mentor from "@/components/mentor";

export default function Home(): JSX.Element {
  return (
    <>
      <DockNavbar />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Victor Hacks 2025</title>
        <meta
          name="description"
          content="Victor Hacks 2025: A Hackathon Fit for Vikings"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen relative text-white font-ibmplex">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://i.redd.it/2y2k540v3f171.jpg')",
          }}
        />
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Centered "Coming soon" text */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="relative inline-block text-5xl sm:text-7xl md:text-8xl font-bold">
            <span className="bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent dark:from-white dark:to-black">
              Coming soon
            </span>
          </h1>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 w-full p-4 sm:p-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-Tomorrow font-light text-gold">
              Victor Hacks 2024
            </h1>
            <p className="text-xl sm:text-2xl mt-4 font-semibold text-white">
              A Hackathon Fit for Vikings
            </p>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white">
              Join us on April 19 – 20 and unleash your inner warrior!
            </p>

            {/* Email Input Form */}
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-center items-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full sm:w-auto px-4 py-2 rounded-t-md sm:rounded-l-md sm:rounded-tr-none sm:rounded-bl-md text-black focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button className="w-full sm:w-auto mt-2 sm:mt-0 px-6 py-2 bg-gold rounded-b-md sm:rounded-r-md sm:rounded-bl-none hover:bg-yellow-600 text-white font-bold">
                Notify me
              </button>
            </div>

            {/* Sponsorship Info */}
            <p className="mb-4 sm:mb-6 mt-4 text-xs sm:text-sm">
              Interested in sponsoring us? Fill out{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdEPBSPX4vkd1ks_YSnUGZD6PTcYqnCpgCylNRDot0kwKdEMg/viewform?usp=dialog"
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
        </div>
      </div>

      <div id="tracks" className="px-4 sm:px-8">
        <Tracks />
      </div>

      <div id="sponsors" className="px-4 sm:px-8">
        <Sponsors />
      </div>

      <div className="px-4 sm:px-8">
        <Mentor />
      </div>

      <div id="faq" className="px-4 sm:px-8">
        <FAQ />
      </div>

      <div className="px-4 sm:px-8">
        <Footer />
      </div>
    </>
  );
}
