"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useAppDispatch } from "@/redux/store/hooks";
import { setCredentials, clearUser } from "@/redux/features/slice/authSlice";

export default function AuthSync() {
  const { data: session, status } = useSession();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      // Map NextAuth session user to Redux User type
      const role = (session.user.role as "ADMIN" | "MODERATOR") || "USER";

      dispatch(
        setCredentials({
          user: {
            _id: session.user.id,
            name: session.user.name || "",
            phone: session.user.email || "", // Use email as phone since NextAuth session doesn't have phone property
            roles: [role],
            email: session.user.email || "",
            createdAt: new Date().toISOString(), // Placeholder as session doesn't have this
            updatedAt: new Date().toISOString(), // Placeholder as session doesn't have this
          },
        })
      );
    } else if (status === "unauthenticated") {
      dispatch(clearUser());
    }
  }, [status, session, dispatch]);

  return null;
}
