"use client";

import { SessionProvider } from "next-auth/react";
import ReduxProvider from "@/providers/ReduxProvider";
import AuthSync from "@/components/auth/AuthSync";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <ReduxProvider>
        <AuthSync />
        {children}
      </ReduxProvider>
    </SessionProvider>
  );
}
