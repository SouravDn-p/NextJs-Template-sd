"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useAppDispatch } from "@/redux/store/hooks";
import { setSession, logOut } from "@/redux/features/slice/authSlice";

export const useSessionSync = () => {
  const { data: session, status } = useSession();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === "authenticated" && session) {
      // Sync session data to Redux store
      dispatch(setSession({ session }));
    } else if (status === "unauthenticated") {
      // Clear Redux store when user logs out
      dispatch(logOut());
    }
  }, [session, status, dispatch]);
};
