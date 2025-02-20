"use client";
import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Tabs, Tab } from "@nextui-org/react";
import DataTab from "./tabs/data";
import LeaderboardTab from "./tabs/leaderboard";
import RulesTab from "./tabs/rules";

export default function CompetitionPage() {
  const [selectedTab, setSelectedTab] = useState<string>("data");

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
      {/* Navbar */}
      <Navbar isBordered className="bg-white shadow-md">
        <NavbarBrand>
          <h1 className="text-xl font-bold">AI Mathematical Olympiad</h1>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button color="primary">Join Competition</Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* Page Container */}
      <div className="max-w-6xl mx-auto mt-6 p-4">
        <h2 className="text-3xl font-bold">AI Mathematical Olympiad - Progress Prize 2</h2>
        <p className="text-gray-600">Solve national-level math challenges using AI models.</p>

        {/* Tabs */}
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

        {/* Dynamic Content */}
        <div className="mt-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}