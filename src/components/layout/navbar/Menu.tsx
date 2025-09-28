"use client";
import { Link } from "@/i18n/routing";
import React, { useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

const Menu = ({
  link,
  activeRoute,
}: {
  link: {
    name: string;
    subLinks: {
      href: string;
      name: string;
    }[];
  };
  activeRoute: (value: any) => boolean;
}) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 300);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className={`text-white flex items-center gap-0.25`}>
        {link.name}
        <MdKeyboardArrowDown
          size={18}
          className="group-hover:rotate-180 duration-300"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-[99%] left-1/2 -translate-x-1/2 z-100 w-full bg-primary-1 grid grid-cols-4 gap-y-10 p-10 rounded-b-3xl"
          >
            {link.subLinks.map((li, index) => (
              <Link
                href={li.href}
                key={index}
                className={`text-white w-fit ${
                  activeRoute(li.href) ? "underline" : ""
                }`}
              >
                {li.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
