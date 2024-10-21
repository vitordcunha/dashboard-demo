"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarLeftExpandFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/_lib/utils";

import { Sidebar as SidebarUi, SidebarBody, SidebarLink } from "./ui/sidebar";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

import withTooltip from "@/_hocs/withTooltip";

/**
 * The Sidebar component is responsible for rendering the application's sidebar.
 * It includes the logo, navigation links, and a pin menu button.
 *
 * @returns {React.ReactElement} - The Sidebar component.
 */
function Sidebar(): React.ReactElement {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [isPinned, setPinned] = useState(false);

  function toggleIsPinned() {
    setPinned((state) => !state);
  }

  const links = [
    {
      label: "Dashboard",
      href: "/",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  return (
    <SidebarUi open={open} setOpen={isPinned ? undefined : setOpen}>
      <SidebarBody>
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <div className="flex justify-between text-neutral-700 h-12">
            {open ? <Logo /> : <LogoIcon />}
            {open && (
              <PinMenuButtonWithTooltip
                tooltipContent={isPinned ? "Unpin menu" : "Pin menu"}
                isPinned={isPinned}
                toggleIsPinned={toggleIsPinned}
              />
            )}
          </div>

          <Separator className="my-4" />

          <div className="flex flex-col gap-1">
            {links.map((link, idx) => (
              <Button
                key={idx}
                variant="ghost"
                className={cn("justify-start px-2", {
                  "px-0": !open,
                })}
                asChild
              >
                <SidebarLink
                  link={link}
                  className={cn("hover:bg-secondary", {
                    "bg-secondary": pathname === link.href,
                  })}
                />
              </Button>
            ))}
          </div>
        </div>
      </SidebarBody>
    </SidebarUi>
  );
}

export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Acet Labs
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

interface PinMenuButtonProps {
  toggleIsPinned(): void;
  isPinned: boolean;
}

export const PinMenuButton = ({
  toggleIsPinned,
  isPinned,
}: PinMenuButtonProps) => {
  return (
    <Button variant="ghost" size="icon" onClick={toggleIsPinned}>
      {isPinned ? (
        <IconLayoutSidebarLeftCollapse className="text-neutral-700 size-6 hover:text-neutral-800" />
      ) : (
        <IconLayoutSidebarLeftExpandFilled className="text-neutral-700 size-6 hover:text-neutral-800" />
      )}
    </Button>
  );
};
const PinMenuButtonWithTooltip = withTooltip(PinMenuButton);

export default Sidebar;
