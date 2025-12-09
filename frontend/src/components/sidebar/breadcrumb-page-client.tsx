"use client";

import { usePathname } from "next/navigation";
import { BreadcrumbPage } from "../ui/breadcrumb";

const getPageTitle = (path: string) => {
  switch (path) {
    case "/dashboard":
      return "Dashboard";
    case "/dashboard/create":
      return "Create";
    case "/dashboard/projects":
      return "Projects";
    case "/dashboard/settings":
      return "Settings";
    default:
      return "Dashboard";
  }
};

export default function BreadcrumbPageClient() {
  const pathname = usePathname();

  return (
    <BreadcrumbPage className="text-foreground text-sm font-medium">
      {getPageTitle(pathname)}
    </BreadcrumbPage>
  );
}
