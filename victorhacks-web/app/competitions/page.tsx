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
  const [selectedTab, setSelectedTab] = useState<string>("overview");

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
          {["overview", "data", "code", "models", "discussion", "leaderboard", "rules"].map((key) => (
            <Tab
              key={key}
              title={key.charAt(0).toUpperCase() + key.slice(1)}
              className={`px-4 py-2 text-lg font-semibold transition-all duration-200 
                ${selectedTab === key ? "rounded-t-full border-b-4 border-black" : "text-gray-600 hover:text-black"}`}
            />
          ))}
        </Tabs>

        {/* Dynamic Content */}
        <div className="mt-6">
          {selectedTab === "overview" && (
            <Card>
              <CardBody>
                <h2 className="text-xl font-semibold">Overview</h2>
                <p>This competition challenges participants to solve math problems using AI models.</p>
              </CardBody>
            </Card>
          )}

          {selectedTab === "data" && (
            <Card>
              <CardBody>
                <h2 className="text-xl font-semibold">Dataset Description</h2>
                <p>The competition data comprises 110 mathematics problems similar to those of the AIME.</p>
                <p>The answer to each problem is a non-negative integer between 0 and 999.</p>
              </CardBody>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
