"use client";

import { useEffect, useState } from "react";
import { LanguageSelector, Profile } from "@repo/ui";
import { Notifications } from "@repo/ui";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>("null");
  const isAuthenticated = true;

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
    { code: "pt-BR", label: "Português", flag: "🇧🇷" },
    { code: "es", label: "Español", flag: "🇪🇸" },
  ];

  const [currentLanguage, setCurrentLanguage] = useState("en");

  const handleLanguageChange = (language: string) => {
    console.log("Language changed to:", language);
    setCurrentLanguage(language);
    // Aqui você pode chamar a função do i18n ou qualquer outra lógica
  };

  const actions = [
    { label: "My Profile", action: () => alert("Profile clicked") },
    { label: "Settings", action: () => alert("Settings clicked") },
  ];

  const notifications = [
    { label: "New message", onClick: () => console.log("New message clicked") },
    { label: "Update available", onClick: () => console.log("Update clicked") },
    { label: "Action required", onClick: () => console.log("Action clicked") },
  ];

  return (
    <header className="bg-background-color border-b border-border-color shadow-md h-20">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Left side - Logo and Navigation Links */}
          <div className="flex items-center space-x-6">
            {/* Logo */}
            <a href="/" className="text-text-color hover:text-hover-color">
              <div className="text-lg font-bold text-text-color">Logo</div>
            </a>

            {/* Navigation Links */}
            {isAuthenticated && (
              <nav className="flex space-x-4">
                <a
                  href="/home"
                  className="text-text-color hover:text-hover-color"
                >
                  Home
                </a>
                <a
                  href="/dashboards"
                  className="text-text-color hover:text-hover-color"
                >
                  Dashboards
                </a>
                <a
                  href="/posts"
                  className="text-text-color hover:text-hover-color"
                >
                  Posts
                </a>
                <a
                  href="/analytics"
                  className="text-text-color hover:text-hover-color"
                >
                  Analytics
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
                placeholder="Search"
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
              <>
                <a href="/" className="text-text-color hover:text-hover-color">
                  Sign in
                </a>
              </>
            )}

            {/* Language dropdown */}
            <LanguageSelector
              languages={languages}
              currentLanguage={currentLanguage}
              onLanguageChange={handleLanguageChange}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
