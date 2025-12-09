"use client";

import { FolderOpen, LayoutDashboard, Settings, Wand2 } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { SidebarMenuButton, SidebarMenuItem, useSidebar } from "../ui/sidebar";
import { useMemo } from "react";
import Link from "next/link";

const menus = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
    active: false,
  },
  {
    title: "Create",
    url: "/dashboard/create",
    icon: Wand2,
    active: false,
  },
  {
    title: "Projects",
    url: "/dashboard/projects",
    icon: FolderOpen,
    active: false,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
    active: false,
  },
];

export default function SidebarMenuItems() {
  const pathname = usePathname();
  const { isMobile, setOpenMobile } = useSidebar();

  const handleMenuClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  const items = useMemo(
    () =>
      menus.map((item) => {
        return {
          ...item,
          active: pathname === item.url,
        };
      }),
    [pathname],
  );

  return (
    <>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton
            asChild
            isActive={item.url === pathname}
            className={cn(
              "group hover:bg-primary/10 hover:text-primary relative h-10 w-full justify-start rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
            )}
          >
            <Link
              href={item.url}
              onClick={handleMenuClick}
              className="flex cursor-pointer items-center gap-3"
            >
              <item.icon
                className={cn(
                  "size-5 transition-colors duration-200",
                  item.active
                    ? "text-primary"
                    : "text-muted-foreground group-hover:text-primary",
                )}
              />
              <span className="truncate">{item.title}</span>
              {item.active && (
                <div className="bg-primary absolute top-1/2 left-0 h-6 w-1 -translate-y-1/2 rounded-r-full" />
              )}
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </>
  );
}
