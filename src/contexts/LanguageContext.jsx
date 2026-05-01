import { createContext, useState, useContext } from 'react';
import { translations, projects } from '../data/index.js';

// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('th');

  const toggleLang = () => setLang(lang === 'th' ? 'en' : 'th');

  const t = translations[lang];
  const localizedProjects = projects.map((project) => ({
    ...project,
    description: project.desc[lang],
  }));

  return (
    <LanguageContext.Provider
      value={{ lang, toggleLang, t, projects: localizedProjects }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLang = () => useContext(LanguageContext);
