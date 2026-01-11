"use client";

import DashboardLayout from "@/components/layout/dashboard/DashboardLayout";
import UserSidebar from "@/components/layout/dashboard/UserSidebar";

type UserDashboardLayoutProps = {
  children: React.ReactNode;
};

export default function UserDashboardLayout({
  children,
}: UserDashboardLayoutProps) {
  return <DashboardLayout sidebar={<UserSidebar />}>{children}</DashboardLayout>;
}
