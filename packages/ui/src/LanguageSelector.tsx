import { useState, useEffect, useRef } from "react";

interface Language {
  code: string;
  label: string;
  flag: string;
}

interface LanguageSelectProps {
  languages: Language[];
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

const LanguageSelect: React.FC<LanguageSelectProps> = ({
  languages,
  currentLanguage,
  onLanguageChange,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleLanguageSelect = () => {
    setIsDropdownOpen(!isDropdownOpen);

    if (isDropdownOpen && buttonRef.current) {
      buttonRef.current.blur();
    }
  };

  const handleLanguageChange = (language: string) => {
    onLanguageChange(language);
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
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
};

export default LanguageSelect;
