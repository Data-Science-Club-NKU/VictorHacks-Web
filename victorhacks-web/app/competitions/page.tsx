"use client";
import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Tabs, Tab, Card, CardBody } from "@nextui-org/react";

export default function CompetitionPage() {
  const [selectedTab, setSelectedTab] = useState<string>("overview");

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
          onSelectionChange={(key) => setSelectedTab(String(key))} // ✅ Fix: Convert Key to string
          className="mt-4"
        >
          <Tab key="overview" title="Overview"></Tab>
          <Tab key="data" title="Data"></Tab>
          <Tab key="code" title="Code"></Tab>
          <Tab key="models" title="Models"></Tab>
          <Tab key="discussion" title="Discussion"></Tab>
          <Tab key="leaderboard" title="Leaderboard"></Tab>
          <Tab key="rules" title="Rules"></Tab>
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
