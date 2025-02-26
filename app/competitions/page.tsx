"use client";

import { useState } from "react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Tabs,
  Tab,
} from "@nextui-org/react";
import DataTab from "./tabs/data";
import LeaderboardTab from "./tabs/leaderboard";
import RulesTab from "./tabs/rules";
import FileUpload from "./upload";

export default function CompetitionPage() {
  const [selectedTab, setSelectedTab] = useState<string>("data");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const renderTabContent = () => {
    switch (selectedTab) {
      case "data":
        return <DataTab />;
      case "leaderboard":
        return <LeaderboardTab />;
      case "rules":
        return <RulesTab />;
      default:
        return <DataTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-slate-800 dark:to-slate-900 transition-colors">
      <Navbar isBordered className="bg-white dark:border-none">
        <NavbarBrand>
          <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            AI Mathematical Olympiad
          </h1>
        </NavbarBrand>
        <NavbarContent justify="end" className="gap-4">
          <SignedIn>
            <NavbarItem>
              <div className="flex items-center gap-4">
                <FileUpload onFileSelect={(file) => setSelectedFile(file)} />
              </div>
            </NavbarItem>
            <NavbarItem>
              <Button
                color="primary"
                radius="md"
                variant="solid"
                className="bg-indigo-600 hover:bg-indigo-700 transition-colors rounded-full"
              >
                Join Competition
              </Button>
            </NavbarItem>
          </SignedIn>
          <SignedOut>
            <NavbarItem>
              <SignInButton>
                <Button
                  color="primary"
                  radius="md"
                  variant="solid"
                  className="bg-indigo-600 hover:bg-indigo-700 transition-colors"
                >
                  Sign In
                </Button>
              </SignInButton>
            </NavbarItem>
          </SignedOut>
        </NavbarContent>
      </Navbar>

      <SignedIn>
        <div className="max-w-6xl mx-auto mt-10 p-4">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 sm:p-10 transition-colors">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              AI Mathematical Olympiad - Progress Prize 2
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6">
              Solve national-level math challenges using AI models.
            </p>

            <Tabs
              aria-label="Competition Sections"
              selectedKey={selectedTab}
              onSelectionChange={(key) => setSelectedTab(String(key))}
              className="mt-4"
            >
              <Tab key="data" title="Data" />
              <Tab key="leaderboard" title="Leaderboard" />
              <Tab key="rules" title="Rules" />
            </Tabs>

            <div className="mt-6">{renderTabContent()}</div>
          </div>
        </div>
      </SignedIn>

      <SignedOut>
        <div className="flex justify-center items-center h-[80vh]">
          <p className="text-lg text-slate-800 dark:text-slate-100">
            You must be signed in to view this page.
          </p>
        </div>
      </SignedOut>
    </div>
  );
}
