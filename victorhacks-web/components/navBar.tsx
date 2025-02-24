import { useAuth } from '@clerk/nextjs';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { Dock, DockIcon } from '@/components/ui/dock';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Separator } from '@/components/ui/separator';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { HomeIcon, UsersIcon, TrophyIcon, InfoIcon, HelpCircleIcon, UserPlusIcon } from 'lucide-react';
import { Github, Linkedin } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';

const navItems = [
  { name: 'About', href: '#about', icon: InfoIcon },
  { name: 'Tracks', href: '#tracks', icon: UsersIcon },
  { name: 'Sponsors', href: '#sponsors', icon: TrophyIcon },
  { name: 'FAQ', href: '#faq', icon: HelpCircleIcon },
  { name: 'Apply', href: '/register', newTab: true, icon: UserPlusIcon },
  { name: 'Competitions', href: '/Dashboard', newTab: true, protected: true, icon: TrophyIcon },
];

const socialLinks = [
  { name: 'GitHub', href: '#', icon: Github },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Discord', href: '#', icon: FaDiscord },
];

const DockNavbar = () => {
  const { isLoaded, userId } = useAuth();

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-56 flex justify-between items-center">
        <div className="max-w-screen-xl w-full flex justify-between items-center mx-auto">
          <div className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <SignedIn key={index}>
                <Link href={item.href} target={item.newTab ? '_blank' : undefined} className="text-white flex items-center space-x-2 hover:text-gray-300 transition">
                  <item.icon className="size-5 opacity-80" />
                  <span>{item.name}</span>
                </Link>
              </SignedIn>
            ))}
          </div>
          <TooltipProvider>
            <Dock direction="middle" className="flex justify-start items-center space-x-2">
              {navItems.map((item) => (
                <DockIcon key={item.name}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href={item.href} className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'size-12 rounded-full opacity-90 hover:opacity-100 transition')}>
                        <item.icon className="size-5" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              ))}
              <Separator orientation="vertical" className="h-full" />
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <DockIcon key={name}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href={href} className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'size-12 rounded-full opacity-90 hover:opacity-100 transition')}>
                        <Icon className="size-5" />
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
          {isLoaded && (
            <div>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="text-white font-Tomorrow bg-primary rounded-full px-5 py-2 mt-8 hover:bg-opacity-80 transition">Sign In</button>
                </SignInButton>
              </SignedOut>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default DockNavbar;
