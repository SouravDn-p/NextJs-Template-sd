"use client";

import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import ReduxProvider from "./ReduxProvider";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <>{children}</>;
  }

  return (
    <SessionProvider>
      <ReduxProvider>{children}</ReduxProvider>
    </SessionProvider>
  );
}
