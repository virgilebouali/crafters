"use client";
import { useSession, signIn, signOut, SessionProvider } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function SignIn() {
  const { data: session, status } = useSession();

  if (status === "loading") return <div>Loading...</div>;

  if (session) {
    return (
      <div className="">

        <Button variant={"destructive"} onClick={() => signOut({ callbackUrl: "/" })}>
          Sign out
        </Button>
      </div>
    );
  }
  return (
    <div className="bg-violet-400">
      <Button onClick={() => signIn()}>Se connecter</Button>
    </div>
  );
}
