import { createContext, useState, useContext } from 'react';
import th from '../locales/th';
import en from '../locales/en';

// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('th');
  const toggleLang = () => setLang(lang === 'th' ? 'en' : 'th');
  const t = lang === 'th' ? th : en;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLang = () => useContext(LanguageContext);
