"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { setUser, clearUser } from "@/redux/features/auth/authSlice";

export default function AuthSync() {
  const { data: session, status } = useSession();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === "authenticated") {
      dispatch(setUser(session.user));
    } else {
      dispatch(clearUser());
    }
  }, [status, session, dispatch]);

  return null;
}
