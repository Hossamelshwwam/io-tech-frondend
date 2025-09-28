"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Logo from "@/../public/assets/images/iotech_logo_white.png";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import useWindowWidth from "@/hooks/useWindowWidth";
import CustomBtn from "../ui/CustomBtn";
import Collapse from "./Collapse";
import { useTranslations } from "next-intl";

type SingleLink = { href: string; name: string };
type MultiLink = { name: string; subLinks: { href: string; name: string }[] };
type NavLink = SingleLink | MultiLink;

const Drawer = () => {
  const [open, setOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const width = useWindowWidth();
  const pathname = usePathname();
  const t = useTranslations("navbar");

  useEffect(() => {
    if (width > 991) setOpen(false);
  }, [width]);

  const activeRoute = useCallback(
    (href: string) =>
      href === "/" ? pathname === href : pathname.includes(href),
    [pathname]
  );

  const toggleCollapse = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const elements = useMemo(() => {
    const links: NavLink[] = [
      { href: "/", name: t("home") },
      { href: "/about-us", name: t("about") },
      {
        name: t("services"),
        subLinks: [
          { href: "/services/web-dev", name: t("webDev") },
          { href: "/services/design", name: t("design") },
          { href: "/services/consulting", name: t("consulting") },
          { href: "/services/web-dev", name: t("webDev") },
          { href: "/services/design", name: t("design") },
          { href: "/services/consulting", name: t("consulting") },
          { href: "/services/web-dev", name: t("webDev") },
          { href: "/services/design", name: t("design") },
          { href: "/services/consulting", name: t("consulting") },
          { href: "/services/web-dev", name: t("webDev") },
          { href: "/services/design", name: t("design") },
          { href: "/services/consulting", name: t("consulting") },
        ],
      },
      { href: "/blogs", name: t("blog") },
      { href: "/teams", name: t("team") },
      { href: "/contact-us", name: t("contact") },
      { href: "/appointment", name: t("appointment") },
      { href: "/search", name: t("search") },
    ];

    return links.map((link, index) => (
      <li key={index} className="py-1">
        {"subLinks" in link ? (
          <Collapse
            name={link.name}
            subLinks={link.subLinks}
            isOpen={openIndex === index}
            onToggle={() => toggleCollapse(index)}
            activeRoute={activeRoute}
            onCloseDrawer={() => setOpen(false)}
          />
        ) : (
          <Link
            href={link.href}
            onClick={() => setOpen(false)}
            className={`block capitalize py-2 px-2 rounded-lg duration-300 ${
              activeRoute(link.href)
                ? "bg-white text-primary-1"
                : "text-white bg-primary-2/30"
            }`}
          >
            {link.name}
          </Link>
        )}
      </li>
    ));
  }, [activeRoute, openIndex]);

  return (
    <>
      <CustomBtn
        onClick={() => setOpen((state) => !state)}
        className="lg:hidden"
      >
        <FaBarsStaggered size={18} />
      </CustomBtn>

      <motion.div
        initial={{ x: "-100%", display: "none" }}
        animate={
          open ? { x: 0, display: "flex" } : { x: "-100%", display: "none" }
        }
        transition={{
          x: { duration: 0.5, delay: open ? 0.6 : 0 },
          display: { duration: 0.1, delay: open ? 0 : 0.5 },
        }}
        className="h-screen md:w-120 sm:w-100 w-80 fixed left-0 top-0 z-50 bg-primary-1 lg:hidden px-5 flex-col"
      >
        <div className="flex justify-between items-center py-5 mb-8">
          <Image src={Logo} alt="logo alt" />
          <CustomBtn
            onClick={() => setOpen((state) => !state)}
            className="!p-2"
          >
            <FaXmark size={18} />
          </CustomBtn>
        </div>
        <ul className="mb-5 flex-1 overflow-y-auto">{elements}</ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, display: "none" }}
        animate={
          open
            ? { opacity: 1, display: "block" }
            : { opacity: 0, display: "none" }
        }
        transition={{ duration: 0.4 }}
        onClick={() => setOpen(false)}
        className="fixed left-0 top-0 z-40 h-screen w-screen bg-black/70 lg:hidden"
      ></motion.div>
    </>
  );
};

export default Drawer;
