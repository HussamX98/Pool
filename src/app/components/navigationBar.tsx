'use client';

import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconDroplet,
  IconHome
} from "@tabler/icons-react";

export function NavigationBar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/home",
    },
    {
      title: "Profile",
      icon: (
        <IconDroplet
    size={48}
    strokeWidth={2}
     className="h-full w-full text-cyan-500" />
      ),
      href: "/profile",
    },

  ];
  return (
    <div className="flex items-end justify-center h-[5rem] w-full" style={{position:"fixed", bottom:"1vh", zIndex:"30"}}>
      <FloatingDock
        mobileClassName="translate-y-20 " // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
