import { useState, useEffect } from 'react';
import { navItems } from '../../constants/nav.js';
import { scrollTo, cx } from '../../lib/utils.js';
import { useLang } from '../../contexts/LanguageContext.jsx';
import { useTheme } from '../../contexts/ThemeContext.jsx';

export default function Navbar() {
  const { t, lang, toggleLang } = useLang();
  const { isDark: dark, toggleTheme: setDark } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActive] = useState('hero');
  const btnBaseClass = 'btn-outline px-3.5 py-1.5 text-xs';

  // ใช้ Intersection Observer ในการตรวจจับ section ที่กำลังแสดงอยู่ใน viewport
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    // Options สำหรับ Intersection Observer
    const spyOptions = {
      root: null,
      rootMargin: '-25% 0px -65% 0px',
      threshold: 0,
    };

    // Callback observer เมื่อ section เข้าสู่ viewport
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    // เริ่มต้นใช้งาน Observer
    const observer = new IntersectionObserver(handleIntersect, spyOptions);
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNav = (id) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <>
      {/* ── Desktop nav ── */}
      // Base styles from @utility
      <nav className="nav-container">
        {/* Logo */}
        <button
          onClick={() => handleNav('hero')}
          className="nav-logo" // Base styles from @utility
          aria-label="Back to top"
        >
          CHAMP.
        </button>

        {/* Desktop links */}
        <ul className="hidden gap-8 md:flex">
          {navItems.map(({ id, key }) => (
            <li key={id}>
              <button
                onClick={() => handleNav(id)}
                className={cx(
                  'nav-link', // Base styles from @utility
                  activeSection === id ? 'text-accent' : 'text-content' //  States & Colors
                )}
              >
                {t.nav[key]}
              </button>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Lang toggle */}
          <button onClick={toggleLang} className={btnBaseClass}>
            {lang === 'th' ? 'EN' : 'TH'}
          </button>

          {/* Dark toggle */}
          <button onClick={() => setDark(!dark)} className={btnBaseClass}>
            {dark ? '☀️' : '🌙'}
          </button>

          {/* Hamburger  mobile only*/}
          <button
            className={
              'flex cursor-pointer flex-col gap-1.25 border-none bg-transparent p-1 md:hidden'
            }
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={cx(
                'ham-bar', // Base styles from @utility
                menuOpen && 'transform-[translateY(7px)_rotate(45deg)]'
              )}
            />
            <span className={cx('ham-bar', menuOpen && 'opacity-0')} />
            <span
              className={cx(
                'ham-bar',
                menuOpen && 'transform-[translateY(-7px)_rotate(-45deg)]'
              )}
            />
          </button>
        </div>
      </nav>
      {/* ── Mobile menu ── */}
      {menuOpen && (
        // Base styles from @utility
        <div className="mobile-nav-container">
          {navItems.map(({ id, key }) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className={cx(
                'mobile-nav-item', // Base styles from @utility
                activeSection === id ? 'text-accent' : 'text-content' // States & Colors
              )}
            >
              {t.nav[key]}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
