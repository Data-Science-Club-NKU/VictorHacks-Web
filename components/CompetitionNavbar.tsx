// components/CompetitionNavbar.tsx
"use client";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";

export default function CompetitionNavbar() {
  return (
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
  );
}