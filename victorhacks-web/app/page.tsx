'use client';

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

      <Head>
        <title>Victor Hacks 2024</title>
        <meta
          name="description"
          content="Victor Hacks 2024: A Hackathon Fit for Vikings"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
                                <DockNavbar />

      <div className="h-screen flex flex-col text-white font-ibmplex">  
        <div
          
          className="flex-grow flex items-end justify-center text-center px-6 relative bg-cover bg-center"
          style={{
            backgroundImage: "url('https://i.redd.it/2y2k540v3f171.jpg')",
          }}
          
        >
        {/* Include Navbar */}

        {/* Main Content */}

        

          <div className="absolute inset-0 bg-opacity-60"></div>

          <div className="relative z-10 max-w-md text-center font-ibmplex">
            <h1 className="text-5xl font-Tomorrow font-light text-gold">
              Victor Hacks 2024
            </h1>
            <p className="text-2xl mt-4 font-semibold text-white">
              A Hackathon Fit for Vikings
            </p>
            <p className="mt-6 text-lg text-white">
              Join us on April 19 – 20 and unleash your inner warrior!
            </p>

            {/* Email Input Form */}
            <div className="mt-6 flex justify-center items-center">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md text-black focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button className="px-6 py-2 bg-gold rounded-r-md hover:bg-yellow-600 text-white font-bold">
                Notify me
              </button>
            </div>

            {/* Sponsorship Info */}
            <p className="mb-24 mt-8 text-sm text-white">
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

        {/* Footer Viking Logo */}
        <div className="absolute bottom-4 right-4">
          <img
            src="https://png.pngtree.com/png-clipart/20240923/original/pngtree-viking-warrior-head-logo-png-image_16075099.png"
            alt="Viking Logo"
            className="w-16 h-16 opacity-80"
          />
        </div>
      </div>
      <div id = "tracks">
        <Tracks />
      </div>
  
      <div id="sponsors">
        <Sponsors/>
      </div>
      <div>
        <div>
          <Mentor/>
        </div>
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
