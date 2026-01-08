"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store/store";
import { useEffect } from "react";
import { hydrateAuthState } from "@/lib/auth-utils";
import { useSessionSync } from "@/hooks/useSessionSync";

// Create a wrapper component to handle store hydration
function ReduxProviderWrapper({ children }: { children: React.ReactNode }) {
  // Sync NextAuth session with Redux store
  useSessionSync();

  useEffect(() => {
    // Hydrate the store with persisted data on initial render
    store.dispatch(hydrateAuthState());
  }, []);

  return <Provider store={store}>{children}</Provider>;
}

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ReduxProviderWrapper>{children}</ReduxProviderWrapper>;
}
