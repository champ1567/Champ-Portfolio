import { useState, useEffect } from 'react';
import { navItems } from '../../constants/nav.js';
import { scrollTo, cx } from '../../lib/utils.js';
import { useLang } from '../../contexts/LanguageContext.jsx';
import { useTheme } from '../../contexts/ThemeContext.jsx';
import { cn } from '../../lib/utils.js';

export default function Navbar() {
  const { t, lang, setLang } = useLang();
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
      <nav
        className={cn(
          'fixed inset-x-0 top-0 z-100', // กลุ่ม Position
          'flex h-17 items-center justify-between', // กลุ่ม Layout & Size
          'border-border border-b px-[5%]', // กลุ่ม Spacing & Border
          'bg-bg/85 backdrop-blur-md', // กลุ่ม Colors & Effect (v4 style)
          'transition-colors duration-400' // กลุ่ม Animation
        )}
      >
        {/* Logo */}
        <button
          onClick={() => handleNav('hero')}
          className="nav-logo"
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
                  'nav-link cursor-pointer border-none bg-transparent', //  Layout & Shape
                  'font-body text-sm font-medium', //  Typography
                  activeSection === id ? 'text-accent' : 'text-muted', //  States & Colors
                  'transition-colors duration-300' //  Effects & Transitions
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
          <button
            onClick={() => setLang(lang === 'th' ? 'en' : 'th')}
            className={btnBaseClass}
          >
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
                'ham-bar',
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
        <div className="fixed top-[68px] right-0 left-0 z-[99] border-b border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-bg)_85%,transparent)] px-[5%] py-[1.2rem] backdrop-blur-[14px] md:hidden">
          {navItems.map(({ id, key }, i) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className={cx(
                'block w-full py-[0.9rem] text-left text-[var(--color-text2)]',
                'cursor-pointer border-none bg-transparent text-base font-medium',
                'font-[var(--font-body)] transition-[color,padding-left] duration-200',
                'hover:pl-2 hover:text-[var(--color-accent)]',
                i < navItems.length - 1 &&
                  'border-b border-[var(--color-border)]'
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
