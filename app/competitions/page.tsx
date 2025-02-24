"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Tabs, Tab } from "@nextui-org/react";
import { Upload } from "lucide-react";
import DataTab from "./tabs/data";
import LeaderboardTab from "./tabs/leaderboard";
import RulesTab from "./tabs/rules";
import FileUpload from "./upload";

export default function CompetitionPage() {
  const [selectedTab, setSelectedTab] = useState<string>("data");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const router = useRouter();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmission = async () => {
    if (!selectedFile) {
      alert("Please select a file first");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      alert("File submitted successfully!");
      setSelectedFile(null);
    } catch (error) {
      console.error("Error submitting file:", error);
      alert("Error submitting file. Please try again.");
    }
  };

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
    <div className="min-h-screen bg-gray-100">
      <Navbar isBordered className="bg-white shadow-md">
        <NavbarBrand>
          <h1 className="text-xl font-bold">AI Mathematical Olympiad</h1>
        </NavbarBrand>
        <NavbarContent justify="end" className="gap-4">
          <SignedIn>
            <NavbarItem>
              <div className="flex items-center gap-4">
                
                <FileUpload onFileSelect={(file) => setSelectedFile(file)} />
              </div>
            </NavbarItem>
            <NavbarItem>
              <Button color="primary">Join Competition</Button>
            </NavbarItem>
          </SignedIn>
          <SignedOut>
            <NavbarItem>
              <SignInButton>
                <Button color="primary">Sign In</Button>
              </SignInButton>
            </NavbarItem>
          </SignedOut>
        </NavbarContent>
      </Navbar>

      <SignedIn>
        <div className="max-w-6xl mx-auto mt-6 p-4">
          <h2 className="text-3xl font-bold">AI Mathematical Olympiad - Progress Prize 2</h2>
          <p className="text-gray-600">Solve national-level math challenges using AI models.</p>

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
      </SignedIn>

      <SignedOut>
        <div className="flex justify-center items-center h-screen">
          <p className="text-lg">You must be signed in to view this page.</p>
        </div>
      </SignedOut>
    </div>
  );
}
