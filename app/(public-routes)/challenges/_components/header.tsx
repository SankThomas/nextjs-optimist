import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import React from "react";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between p-4">
        <Button variant="outline">Optimist</Button>

        <UserButton afterSignOutUrl="/" />
      </header>
    </>
  );
}
