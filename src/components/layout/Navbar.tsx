// Header component for consistent navigation
"use client";

import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href={ROUTES.home} className="text-xl font-bold">
          Next App
        </Link>

        <nav className="hidden items-center space-x-6 md:flex">
          <Link href={ROUTES.home} className="text-sm font-medium hover:text-blue-600">
            Home
          </Link>
          <Link href={ROUTES.dashboard} className="text-sm font-medium hover:text-blue-600">
            Dashboard
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            <Link href={ROUTES.login}>Login</Link>
          </Button>
          <Button size="sm">
            <Link href={ROUTES.register}>Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
