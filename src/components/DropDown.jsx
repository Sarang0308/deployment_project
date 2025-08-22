import React from "react";

const languages = [
  { code: "english", name: "English" },
  { code: "hindi", name: "Hindi" },
  { code: "tamil", name: "Tamil" },
  { code: "bengali", name: "Bengali" },
  { code: "Marathi", name: "Marathi" },
  { code: "Kannada", name: "Kannada" },
  { code: "Gujarati", name: "Gujarati" },
  { code: "Malayalam", name: "Malayalam" },
  { code: "Telgu", name: "Telugu" },
];

const LanguageDropdown = ({ selectedLanguage, onLanguageChange }) => {
  return (
    <div className="language-dropdown">
      <label htmlFor="language">Select Language:</label>
      <select
        id="language"
        value={selectedLanguage}
        onChange={(e) => onLanguageChange(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageDropdown;
