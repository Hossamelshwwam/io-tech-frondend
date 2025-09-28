"use client";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { MdKeyboardArrowDown } from "react-icons/md";
import React from "react";

type SubLink = { href: string; name: string };

interface CollapseProps {
  name: string;
  subLinks: SubLink[];
  isOpen: boolean;
  onToggle: () => void;
  activeRoute: (href: string) => boolean;
  onCloseDrawer: () => void;
}

const Collapse: React.FC<CollapseProps> = ({
  name,
  subLinks,
  isOpen,
  onToggle,
  activeRoute,
  onCloseDrawer,
}) => {
  return (
    <div>
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full px-2 py-2 text-left text-white bg-primary-2/30 hover:bg-primary-2/40 rounded-lg"
      >
        {name}
        <MdKeyboardArrowDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <motion.ul
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
          paddingTop: isOpen ? 8 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden pl-4 space-y-2"
      >
        {subLinks.map((sub, i) => (
          <li key={i}>
            <Link
              href={sub.href}
              onClick={onCloseDrawer}
              className={`block px-2 py-2 rounded-lg duration-300 ${
                activeRoute(sub.href)
                  ? "bg-white text-primary-1"
                  : "text-white bg-primary-2/30"
              }`}
            >
              {sub.name}
            </Link>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Collapse;
