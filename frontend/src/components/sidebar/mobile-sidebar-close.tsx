"use client";

import { X } from "lucide-react";

import { Button } from "../ui/button";
import { useSidebar } from "../ui/sidebar";

export default function MobileSidebarClose() {
  const { isMobile, setOpenMobile } = useSidebar();
  if (!isMobile) return null;

  return (
    <div className="absolute top-2 right-2 z-50 mb-4 px-2">
      <Button
        variant="ghost"
        size="sm"
        className="hover:bg-muted/50 size-8 p-0"
        aria-label="Close sidebar"
        onClick={() => setOpenMobile(false)}
      >
        <X className="size-4" />
      </Button>
    </div>
  );
}
