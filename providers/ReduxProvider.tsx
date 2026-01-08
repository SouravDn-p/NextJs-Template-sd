"use client";

import { Provider } from "react-redux";
import { getStore } from "@/redux/store/store";
import { useRef } from "react";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<ReturnType<typeof getStore> | null>(null);
  if (!storeRef.current) {
    storeRef.current = getStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
