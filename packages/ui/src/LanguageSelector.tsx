"use client";

import { useState, useRef, useEffect } from "react";

interface Language {
  code: string;
  label: string;
  flag: string;
}

interface LanguageSelectProps {
  languages: Language[];
  defaultValue: string;
  onLanguageChange: (newLocale: string) => void;
}

export default function LanguageSelector({
  languages,
  defaultValue,
  onLanguageChange,
}: LanguageSelectProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(defaultValue);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleLanguageSelect = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (newLocale: string) => {
    setCurrentLanguage(newLocale);
    onLanguageChange(newLocale);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative dropdown">
      <button
        ref={buttonRef}
        onClick={toggleLanguageSelect}
        className="inline-flex items-center px-2 py-2 border border-border-color text-sm font-medium rounded-md text-text-color bg-background-color hover:bg-hover-color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-color transition duration-150 ease-in-out"
      >
        <span>
          {languages
            .find((lang) => lang.code === currentLanguage)
            ?.code.toUpperCase()}{" "}
          {languages.find((lang) => lang.code === currentLanguage)?.flag}{" "}
        </span>
      </button>
      {isDropdownOpen && (
        <ul className="absolute left-0 mt-2 block w-48 bg-background-color border border-border-color shadow-lg rounded-md z-20">
          {languages.map((language) => (
            <li
              key={language.code}
              className="text-text-color px-4 py-2 hover:bg-hover-color cursor-pointer"
              onClick={() => handleLanguageChange(language.code)}
            >
              {language.flag} {language.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
