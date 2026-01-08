"use client";

import { useSession } from "next-auth/react";
import { useAppSelector } from "@/redux/store/hooks";
import { User } from "@/types/user/userType";
import type { RootState } from "@/redux/store/store";

export const useAuthStatus = () => {
  const { data: session, status } = useSession();
  const reduxUser = useAppSelector((state) => state.auth.user);

  return {
    session,
    status,
    user: reduxUser as User | null,
    isAuthenticated: status === "authenticated",
    isLoading: status === "loading",
  };
};
