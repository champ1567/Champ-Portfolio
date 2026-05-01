import { useTheme } from '../contexts/ThemeContext';
import { useLang } from '../contexts/LanguageContext';

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLang();

  return (
    <nav
      className="flex justify-between items-center px-8 py-4
                    bg-white dark:bg-gray-900 shadow-md"
    >
      {/* Logo */}
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">
        Portfolio
      </h1>

      {/* Menu */}
      <ul className="flex gap-6 text-gray-600 dark:text-gray-300">
        <li>{t.nav.about}</li>
        <li>{t.nav.projects}</li>
        <li>{t.nav.contact}</li>
      </ul>

      {/* Toggle Buttons */}
      <div className="flex gap-3">
        {/* ปุ่มเปลี่ยนภาษา */}
        <button
          onClick={toggleLang}
          className="px-3 py-1 rounded-full border border-gray-300 
                     dark:border-gray-600 text-sm font-medium
                     text-gray-700 dark:text-gray-300
                     hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {lang === 'th' ? 'EN' : 'TH'}
        </button>

        {/* ปุ่ม Dark Mode */}
        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded-full border border-gray-300
                     dark:border-gray-600 text-sm
                     hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}
