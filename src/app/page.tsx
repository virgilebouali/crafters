"use client"
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon, SpaceIcon, WholeWordIcon, Tornado, Target } from "lucide-react";
import Image from "next/image";
import { useSession, signIn, signOut, SessionProvider } from "next-auth/react";
import { Spotlight } from "@/components/ui/Spotlight";
import SignOutBtn from "@/components/auth/SignOutBtn";
import SignIn from "@/components/auth/SignIn";
import { NavigationMenuDemo } from "@/components/NavigationMenu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Waves } from "@/components/Waves";
import { Features } from "@/components/Features";
import { DropdownMobileNav } from "@/components/DropdownMobileNav";
import PricingPage from "@/components/Pricing";

export default function LandingPage() {
  const { theme, setTheme } = useTheme();
  const { data: session, status } = useSession();
  console.log(session)
  const toggleTheme = () => {
    // Vérifiez le thème actuel et basculez vers l'autre
    if (theme  === "light") {
      setTheme("dark");
      // Ajoutez ici le code pour changer l'icône, etc. pour le thème sombre
    } else {
      setTheme("light");
      // Ajoutez ici le code pour changer l'icône, etc. pour le thème clair
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black overflow-hidden w-auto">
      <header className="mx-6 lg:px-6 h-20 flex items-center z-10 justify-center">
        <Link className="flex items-center justify-center" href="#">
          <Target />
          <h1 className="font-bold text-2xl ml-4 hidden lg:block">Crafters</h1>
          <NavigationMenuDemo />
          <div className="lg:hidden block absolute lg:right-24 left-12">
          <DropdownMobileNav />
          </div>
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          
      {session ? (
              <DropdownMenu>
              <DropdownMenuTrigger>
                <Image src={session?.user.image ?? ''} alt="user image" width={50} height={50} className="rounded-full  border-white border-2 hover:border-purple-300"/>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>{session.user.name}</DropdownMenuLabel>
              
                    
                <DropdownMenuSeparator />
                <DropdownMenuItem><Link href="/dashboard" className="cursor-pointer">Profile</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/dashboard" className="cursor-pointer">My Products</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/dashboard" className="cursor-pointer">Billing</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/dashboard" className="cursor-pointer">Team</Link></DropdownMenuItem>
                <DropdownMenuItem><SignIn/></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

      ) : <SignIn />}
        </nav>
        
      </header>
      
      <main className="flex-col">
        <Spotlight />
        <Waves />
        <PricingPage />
        <Features />
        

        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Sign Up for Updates
                </h2>
                <p className="max-w-[600px] text-neutral-500 md:text-xl dark:text-neutral-400">
                  Stay updated with the latest product news and updates.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex sm:flex-row flex-col space-y-2 sm:space-y-0 sm:space-x-2">
                  <input
                    className="max-w-lg flex-1 px-4 py-2 border-border border rounded-md "
                    placeholder="Enter your email"
                    type="email"
                  />
                  <button
                    type="submit"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-neutral-900 px-4 text-sm font-medium text-neutral-50 shadow transition-colors hover:bg-neutral-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 dark:focus-visible:ring-neutral-300"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          © 2024 Acme Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
