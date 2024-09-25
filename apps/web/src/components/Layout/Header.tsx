"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { LanguageSelector, Profile } from "@repo/ui";
import { Notifications } from "@repo/ui";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>("null");
  const isAuthenticated = true;

  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleLogout = () => {
    console.log("Usuário desconectado");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !event.target ||
        !(event.target instanceof Element) ||
        !event.target.closest(".dropdown")
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const userData = {
    userName: "Your Name",
    userRole: "Marketing Manager",
    profileImage:
      "https://th.bing.com/th/id/OIP.EVCGXvrjsvMrhfOX3su_FgHaHa?rs=1&pid=ImgDetMain",
  };

  const languages = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "pt", label: "Português", flag: "🇧🇷" },
    { code: "es", label: "Español", flag: "🇪🇸" },
  ];

  const actions = [
    {
      label: t("profile.my_profile"),
      action: () => alert(t("profile.my_profile")),
    },
    {
      label: t("profile.settings"),
      action: () => alert(t("profile.settings")),
    },
  ];

  const notifications = [
    {
      label: t("notifications.new_message"),
      onClick: () => console.log(t("notifications.new_message")),
    },
    {
      label: t("notifications.update_available"),
      onClick: () => console.log(t("notifications.update_available")),
    },
    {
      label: t("notifications.action_required"),
      onClick: () => console.log(t("notifications.action_required")),
    },
  ];

  const handleLanguageChange = (newLocale: string) => {
    const currentLocaleRegex = /^\/(en|pt|es)/;
    const newPathname = pathname.replace(currentLocaleRegex, `/${newLocale}`);

    if (!currentLocaleRegex.test(pathname)) {
      router.push(`/${newLocale}${pathname}`);
    } else {
      router.push(newPathname);
    }
  };

  return (
    <header className="bg-background-color border-b border-border-color shadow-md h-20">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Left side - Logo and Navigation Links */}
          <div className="flex items-center space-x-6">
            {/* Logo */}
            <a
              href={`/${locale}`}
              className="text-text-color hover:text-hover-color"
            >
              <div className="text-lg font-bold text-text-color">
                {t("logo")}
              </div>
            </a>

            {/* Navigation Links */}
            {isAuthenticated && (
              <nav className="flex space-x-4">
                <a
                  href={`/${locale}/home`}
                  className="text-text-color hover:text-hover-color"
                >
                  {t("sections.home")}
                </a>
                <a
                  href={`/${locale}/dashboards`}
                  className="text-text-color hover:text-hover-color"
                >
                  {t("sections.dashboards")}
                </a>
                <a
                  href={`/${locale}/posts`}
                  className="text-text-color hover:text-hover-color"
                >
                  {t("sections.posts")}
                </a>
                <a
                  href={`/${locale}/analytics`}
                  className="text-text-color hover:text-hover-color"
                >
                  {t("sections.analytics")}
                </a>
              </nav>
            )}
          </div>

          {/* Right side - Authentication, Profile, Notifications, and Language Selector */}
          <div className="flex items-center space-x-6">
            {/* Search Bar */}
            <div className="col-span-3 flex items-center">
              <input
                type="text"
                placeholder={t("search.placeholder")}
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg w-full bg-background-color hover:bg-hover-color text-text-color transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-color"
              />
            </div>
            {isAuthenticated ? (
              <>
                {/* Notifications */}
                <Notifications notifications={notifications} />

                {/* Profile */}
                <Profile
                  userData={userData}
                  handleLogout={handleLogout}
                  actions={actions}
                />
              </>
            ) : (
              <a
                href={`/${locale}/login`}
                className="text-text-color hover:text-hover-color"
              >
                {t("sign_in")}
              </a>
            )}

            {/* Language dropdown */}
            <LanguageSelector
              languages={languages}
              defaultValue={locale}
              onLanguageChange={handleLanguageChange}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
