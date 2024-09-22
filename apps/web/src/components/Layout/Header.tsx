"use client"; // Adicione esta linha no topo do arquivo

import { useEffect, useState } from "react";
import { LanguageSelector } from "@repo/ui";
import { Notifications } from "@repo/ui";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>("null");
  const isAuthenticated = true;

  function handleLogout() {
    alert("Logged out!");
  }

  const toggleProfileDropdown = () => {
    setActiveDropdown(activeDropdown === "profile" ? null : "profile");
  };

  const toggleLanguageDropdown = () => {
    setActiveDropdown(activeDropdown === "language" ? null : "language");
  };

  const toggleNotificationsDropdown = () => {
    setActiveDropdown(
      activeDropdown === "notifications" ? null : "notifications"
    );
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

  return (
    <header className="fixed top-0 left-0 w-full bg-background-color border-b border-border-color shadow-md h-20 z-50">
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
                className="flex items-center justify-center px-4 py-2 border border-border-color rounded-lg w-full bg-background-color hover:bg-hover-color text-text-color transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-color"
              />
            </div>
            {isAuthenticated ? (
              <>
                {/* Notifications */}
                <Notifications />

                {/* Profile */}
                <div className="relative dropdown">
                  <button
                    onClick={toggleProfileDropdown}
                    className="flex items-center cursor-pointer space-x-3 hover:bg-hover-color rounded-lg p-2 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-color"
                  >
                    <img
                      src="https://www.profilebakery.com/wp-content/uploads/2023/04/Profile-Image-AI.jpg"
                      alt="Profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <p className="font-bold text-text-color">Your name</p>
                      <p className="font-medium text-sm text-text-color">
                        Marketing manager
                      </p>
                    </div>
                  </button>

                  {activeDropdown === "profile" && (
                    <ul className="absolute mt-2 w-48 bg-background-color border border-border-color shadow-lg rounded-md z-10">
                      <li className="px-4 py-2 text-text-color hover:bg-hover-color cursor-pointer">
                        My Profile
                      </li>
                      <li className="px-4 py-2 text-text-color hover:bg-hover-color cursor-pointer">
                        Settings
                      </li>
                      <li
                        onClick={handleLogout}
                        className="px-4 py-2 text-text-color hover:bg-hover-color cursor-pointer"
                      >
                        Logout
                      </li>
                    </ul>
                  )}
                </div>
              </>
            ) : (
              <>
                <a href="/" className="text-text-color hover:text-hover-color">
                  Sign in
                </a>
              </>
            )}

            {/* Language dropdown */}
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
}
