import { useState } from "react";
import { useTranslation } from "react-i18next"; // Importando i18next para gerenciar a tradução

const LanguageSelect = () => {
  const { i18n, t } = useTranslation(); // Hook para usar o sistema de tradução
  const [activeDropdown, setActiveDropdown] = useState(false);

  const toggleLanguageSelect = () => {
    setActiveDropdown(!activeDropdown);
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language); // Função para mudar o idioma usando i18n
    setActiveDropdown(false); // Fecha o dropdown após a troca de idioma
  };

  return (
    <div className="relative dropdown">
      <button
        onClick={toggleLanguageSelect}
        className="inline-flex items-center px-2 py-2 border border-border-color text-sm font-medium rounded-md text-text-color bg-background-color hover:bg-hover-color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-color transition duration-150 ease-in-out"
      >
        {/* Exibindo o idioma atual com base no valor do i18n */}
        <span>{i18n.language === "en" ? "EN 🇺🇸" : "PT 🇧🇷"}</span>
      </button>
      {activeDropdown && (
        <ul className="absolute left-0 mt-2 w-48 bg-background-color border border-border-color shadow-lg rounded-md z-10">
          <li
            className="text-text-color px-4 py-2 hover:bg-hover-color cursor-pointer"
            onClick={() => changeLanguage("pt-BR")}
          >
            🇧🇷 {t("language.portuguese", { ns: "translation" })}
          </li>
          <li
            className="text-text-color px-4 py-2 hover:bg-hover-color cursor-pointer"
            onClick={() => changeLanguage("en")}
          >
            🇺🇸 {t("language.english", { ns: "translation" })}
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSelect;
