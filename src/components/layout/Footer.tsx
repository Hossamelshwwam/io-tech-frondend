import Subscription from "@/components/ui/Subscription";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import React from "react";
import { FaTwitter, FaFacebookF, FaGooglePlusG } from "react-icons/fa";
const socialLinks = [
  { href: "https://twitter.com", icon: <FaTwitter size={24} /> },
  { href: "https://facebook.com", icon: <FaFacebookF size={24} /> },
  { href: "https://plus.google.com", icon: <FaGooglePlusG size={24} /> },
];

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  const links = [
    { title: t("about"), href: "/about" },
    { title: t("strategy"), href: "/strategy" },
    { title: t("advantages"), href: "/advantages" },
    { title: t("responsibility"), href: "/social-responsibility" },
    { title: t("services"), href: "/services" },
  ];
  return (
    <div className="py-11 bg-primary-1">
      <div className="container">
        <div
          className={`${
            locale === "ar" ? "lg:mr-auto " : "lg:ml-auto "
          } flex lg:items-center max-lg:flex-col gap-10 w-fit mb-10`}
        >
          <Subscription />
          <div className="flex items-center gap-8">
            <h4 className="text-white capitalize">{t("contacts")}</h4>
            <div className="flex items-center gap-7">
              {socialLinks.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t-2 border-white/30 pt-10 flex justify-between lg:items-center max-lg:flex-col gap-y-8">
          <ul className="list-none m-0 p-0 flex lg:justify-center max-md:flex-col gap-x-8 gap-y-4">
            {links.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className="text-white capitalize hover:underline"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="text-white">{t("rights")}</h3>
        </div>
      </div>
    </div>
  );
}
