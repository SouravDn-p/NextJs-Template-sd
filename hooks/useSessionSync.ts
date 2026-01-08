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
      const sessionUser = session.user;
      dispatch(
        setSession({
          session: {
            user: {
              id: sessionUser?.id,
              name: sessionUser?.name ?? undefined,
              email: sessionUser?.email ?? undefined,
              role: (sessionUser as { role?: string })?.role,
            },
            accessToken: (session as { accessToken?: string })?.accessToken,
          },
        })
      );
    } else if (status === "unauthenticated") {
      // Clear Redux store when user logs out
      dispatch(logOut());
    }
  }, [session, status, dispatch]);
};
