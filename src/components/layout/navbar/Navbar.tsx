"use client";
import React, { useCallback, useMemo } from "react";
import logo from "@/../public/assets/images/iotech_logo_white.png";
import Image from "next/image";
import Drawer from "../Drawer";
import { GoSearch } from "react-icons/go";
import CustomBtn from "../../ui/CustomBtn";
import Menu from "./Menu";
import SearchButton from "./SearchBtn";
import { Link, usePathname } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";

type SingleLink = {
  href: string;
  name: string;
};

type MultiLink = {
  name: string;
  subLinks: { href: string; name: string }[];
};

type NavLink = SingleLink | MultiLink;

const Navbar = () => {
  const t = useTranslations("navbar");

  const pathname = usePathname();

  const activeRoute = useCallback(
    (href: string) => {
      return href === "/" ? pathname === href : pathname.includes(href);
    },
    [pathname]
  );

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
    ];

    return links.map((link, index) => (
      <li className={`group`} key={index}>
        {"subLinks" in link ? (
          <Menu activeRoute={activeRoute} link={link} />
        ) : (
          <Link
            href={link.href}
            className={`text-white ${
              activeRoute(link.href) ? "underline" : ""
            }`}
          >
            {link.name}
          </Link>
        )}
      </li>
    ));
  }, [activeRoute]);

  const locale = useLocale();

  console.log(locale);

  return (
    <div className="top-0 w-full z-100 sticky">
      <div className="bg-primary-1 flex items-center">
        <div className="flex justify-between items-center flex-1">
          {/* Logo/LINKS */}
          <div className="flex items-center justify-between container relative h-[75px]">
            <Link
              href={"/"}
              className="relative flex items-center justify-center z-10 py-0.5"
            >
              <Image src={logo} alt="logo alt" className="object-contain" />
            </Link>
            <ul className="lg:flex xl:gap-5 gap-3 hidden items-center px-2">
              {elements}
            </ul>
            <div className="flex items-center  sm:gap-10 gap-5 py-3">
              <div className="max-md:hidden">
                <SearchButton />
              </div>
              <Link href={"/search"} className="md:hidden">
                <GoSearch className="text-white" size={24} />
              </Link>
              <Link href={pathname} locale={locale === "ar" ? "en" : "ar"}>
                <button className="text-white uppercase cursor-pointer">
                  {locale === "ar" ? "en" : "ar"}
                </button>
              </Link>
              <CustomBtn variant="outline" className="max-lg:hidden">
                {t("appointment")}
              </CustomBtn>
              <Drawer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
