"use client";

import { SessionProvider } from "next-auth/react";

// NextAuth Provider - Use this if you need NextAuth functionality
// Otherwise, use the main Providers component which includes Redux
export default function NextAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
