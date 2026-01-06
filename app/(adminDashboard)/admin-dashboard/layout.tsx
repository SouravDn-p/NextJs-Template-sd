"use client";

import AdminLayout from "@/components/layout/admin/AdminLayout";

type AdminDashboardLayoutProps = {
  children: React.ReactNode;
};

export default function AdminDashboardLayout({
  children,
}: AdminDashboardLayoutProps) {
  return <AdminLayout>{children}</AdminLayout>;
}
