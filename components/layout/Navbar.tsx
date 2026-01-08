"use client";

import { Heart, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="bg-background">
      <nav className="fixed top-0 right-0 left-0 z-50 px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-background/80 px-4 py-3 shadow-sm backdrop-blur-sm sm:px-8 sm:py-4 border">
          {/* Logo */}
          <Link href={"/"}>
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent">
                <Heart
                  className="h-4 w-4 text-primary-foreground"
                  strokeWidth={3}
                />
              </div>
              <span className="text-lg font-semibold text-foreground">
                NextJS Template
              </span>
            </div>
          </Link>

          {/* Hamburger Button for Mobile */}
          <button
            className="text-foreground focus:outline-none sm:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 cursor-pointer" />
            ) : (
              <Menu className="h-6 w-6 cursor-pointer" />
            )}
          </button>

          {/* Navigation Links - Desktop */}
          <div className="hidden items-center gap-8 sm:flex">
            <Link
              href="/"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-2 rounded-lg bg-muted px-4 py-4 shadow-sm backdrop-blur-sm sm:hidden border">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </section>
  );
}
