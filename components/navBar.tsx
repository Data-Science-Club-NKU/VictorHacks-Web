"use client";

import { useState } from "react";
import { useAuth, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  InfoIcon,
  UsersIcon,
  TrophyIcon,
  HelpCircleIcon,
  UserPlusIcon,
  LogIn,
  User,
  Menu,
  X,
} from "lucide-react";
import { Instagram } from "lucide-react";
import { FaDiscord } from "react-icons/fa";

interface NavItem {
  name: string;
  href?: string;
  icon: React.ElementType;
  protected: boolean;
  newTab?: boolean;
}

const staticNavItems: NavItem[] = [
  { name: "About", href: "#about", icon: InfoIcon, protected: false },
  { name: "Tracks", href: "#tracks", icon: UsersIcon, protected: false },
  { name: "Sponsors", href: "#sponsors", icon: UsersIcon, protected: false },
  { name: "FAQ", href: "#faq", icon: HelpCircleIcon, protected: false },
  { name: "Apply", href: "/register", newTab: true, protected: true, icon: UserPlusIcon },
  { name: "Competitions", href: "/Dashboard", newTab: true, protected: true, icon: TrophyIcon },
];

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: Instagram },
  { name: "Discord", href: "#", icon: FaDiscord },
];

const DockNavbar = () => {
  const { userId } = useAuth();
  const isSignedIn = !!userId;
  const [menuOpen, setMenuOpen] = useState(false);

  // For authentication: if signed in, show "Profile" with a link; otherwise, create an item without href.
  const authNavItem: NavItem = isSignedIn
    ? { name: "Profile", href: "/profile", icon: User, protected: false }
    : { name: "Sign In", icon: LogIn, protected: false };

  const finalNavItems: NavItem[] = [...staticNavItems, authNavItem];

  return (
    <>
      <nav className="fixed w-full z-50 md:px-12 pb-2">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          {/* Desktop: use Dock UI on md+ screens */}
          <div className="hidden md:flex w-full justify-between items-center">
            <TooltipProvider>
              <Dock direction="middle" className="flex justify-start items-center space-x-2 text-white">
                {finalNavItems.map((item) => {
                  // Skip rendering items that are protected if the user isn’t signed in.
                  if (item.protected && !isSignedIn) return null;
                  return (
                    <DockIcon key={item.name}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          { !item.href ? (
                              <SignInButton mode="modal">
                                <button
                                  className={cn(
                                    buttonVariants({ variant: "ghost", size: "icon" }),
                                    "w-12 h-12 rounded-full opacity-90 hover:opacity-100 transition"
                                  )}
                                >
                                  <item.icon className="w-5 h-5" />
                                </button>
                              </SignInButton>
                            ) : (
                              <Link
                                href={item.href}
                                target={item.newTab ? "_blank" : undefined}
                                className={cn(
                                  buttonVariants({ variant: "ghost", size: "icon" }),
                                  "w-12 h-12 rounded-full opacity-90 hover:opacity-100 transition"
                                )}
                              >
                                <item.icon className="w-5 h-5" />
                              </Link>
                            )
                          }
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{item.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </DockIcon>
                  );
                })}
                <Separator orientation="vertical" className="h-full" />
                {socialLinks.map(({ name, href, icon: Icon }) => (
                  <DockIcon key={name}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={href}
                          className={cn(
                            buttonVariants({ variant: "ghost", size: "icon" }),
                            "w-12 h-12 rounded-full opacity-90 hover:opacity-100 transition"
                          )}
                        >
                          <Icon className="w-5 h-5" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </DockIcon>
                ))}
              </Dock>
            </TooltipProvider>
          </div>

          {/* Mobile: Hamburger menu on smaller screens */}
<div className="md:hidden flex items-center justify-between w-full p-2">
  <img
    src="https://png.pngtree.com/png-clipart/20240923/original/pngtree-viking-warrior-head-logo-png-image_16075099.png"
    alt="Viking Logo"
    className="w-16 h-16 opacity-80"
  />
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="text-white focus:outline-none"
  >
    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
  </button>
</div>
        </div>
      </nav>

      {/* Mobile Hamburger Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50">
          <div className="absolute top-0 right-0 p-4">
            <button onClick={() => setMenuOpen(false)} className="text-white focus:outline-none">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            {finalNavItems.map((item) => {
              if (item.protected && !isSignedIn) return null;
              return (
                <div key={item.name}>
                  { !item.href ? (
                      <SignInButton mode="modal">
                        <button
                          onClick={() => setMenuOpen(false)}
                          className="text-white text-2xl"
                        >
                          {item.name}
                        </button>
                      </SignInButton>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="text-white text-2xl"
                      >
                        {item.name}
                      </Link>
                    )
                  }
                </div>
              );
            })}
            <div className="mt-8 flex space-x-6">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <Link key={name} href={href} onClick={() => setMenuOpen(false)}>
                  <Icon className="w-6 h-6 text-white" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DockNavbar;
