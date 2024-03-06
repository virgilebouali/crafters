"use client"
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon, SpaceIcon } from "lucide-react";
import Image from "next/image";
import { useSession, signIn, signOut, SessionProvider } from "next-auth/react";
import { Spotlight } from "@/components/ui/Spotlight";
import SignOutBtn from "@/components/auth/SignOutBtn";
import SignIn from "@/components/auth/SignIn";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Features } from "@/components/Features";

export default function DesktopNav() {
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
    <div className="flex flex-col min-h-screen bg-black">
      <header className="px-4 lg:px-6 h-20 flex items-center border-b-2 z-10  shadow-xl shadow-white-200 w-full">
        <Link className="flex items-center justify-center" href="#">
          <Image src="/logo.svg" height={100} width={100} alt="logo" className="h-10 w-10 text-white bg-white rounded-full" />
          <h1 className="font-bold text-2xl ml-4 hidden lg:block">Best App Ever</h1>
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button
        variant={"outline"}
        className={` bg-${theme === "light" ? "slate-500" : "slate-500"} `}
        onClick={toggleTheme}
      >
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
        
      </Button>
      {session ? (
              <DropdownMenu>
              <DropdownMenuTrigger>
                <Image src={session.user.image ?? ''} alt="user image" width={50} height={50} className=" rounded-full "/>
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

    </div>
  );
}
