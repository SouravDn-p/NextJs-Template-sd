"use client";

import Link from "next/link";
import { Button } from "../ui/Button";
import { useAuth } from "@/hooks/useAuth";
import { useTheme } from "@/hooks/useTheme";
import { useAppDispatch } from "@/redux/store/hooks";
import { logOut } from "@/redux/features/slice/authSlice";

export default function HeaderWithAuth() {
  const { user, isAuthenticated } = useAuth();
  const { theme, toggleCurrentTheme } = useTheme();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <header className="bg-background border-b border-border py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-foreground">
          NextJS Template
        </Link>

        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <Button
            text={`Theme: ${theme}`}
            onClick={toggleCurrentTheme}
            variant="outline"
            size="sm"
          />

          {/* Auth Status */}
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <span className="text-foreground">
                Welcome, {user?.name || user?._id}
              </span>
              <Button
                text="Logout"
                onClick={handleLogout}
                variant="secondary"
                size="sm"
              />
            </div>
          ) : (
            <div className="flex space-x-2">
              <Link href="/login">
                <Button text="Login" variant="outline" size="sm" />
              </Link>
              <Link href="/register">
                <Button text="Register" variant="primary" size="sm" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
