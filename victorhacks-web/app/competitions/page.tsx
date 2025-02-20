"use client";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Tabs,
  Tab,
  Card,
  CardBody,
} from "@nextui-org/react";

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
    <div className="min-h-screen p-2 m-8">
      {/* Navbar */}
      <Navbar isBordered className="shadow-md bg-slate-50 rounded-full p-2">
        <NavbarBrand>
          <h1 className="text-xl font-bold p-2">AI Mathematical Olympiad</h1>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
               <Avatar 
  src="/public/image.jpg" 
  size="md" 
  className="cursor-pointer" 
  alt="User Profile"
/>

              </DropdownTrigger>
              <DropdownMenu aria-label="User Menu">
                <DropdownItem key="profile">Profile</DropdownItem>
                <DropdownItem key="settings">Settings</DropdownItem>
                <DropdownItem key="logout" color="danger">Logout</DropdownItem>
              </DropdownMenu>
            </Dropdown>
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