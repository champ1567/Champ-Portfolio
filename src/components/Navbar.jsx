import { useState, useEffect } from 'react';
import { navItems } from '../constants/nav.js';
import { scrollTo, cx } from '../lib/utils.js';

export default function Navbar({ lang, setLang, dark, setDark, t }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActive] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      let current = '';
      const sections = document.querySelectorAll('section[id]');

      // เช็คว่า Scroll ถึงล่างสุดหรือยัง
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10;

      if (isBottom) {
        current = sections[sections.length - 1].id; // เอา ID ของ Section สุดท้าย
      } else {
        sections.forEach((s) => {
          if (window.scrollY >= s.offsetTop - 120) current = s.id;
        });
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <>
      {/* ── Desktop nav ── */}
      <nav className="nav-main">
        {/* Logo */}
        <button onClick={() => handleNav('hero')} className="nav-logo">
          CHAMP.
        </button>

        {/* Desktop links */}
        <ul className="m-0 hidden list-none gap-8 p-0 md:flex">
          {navItems.map(({ id, key }) => (
            <li key={id}>
              <button
                onClick={() => handleNav(id)}
                className={cx(
                  'nav-link cursor-pointer border-none bg-transparent text-sm font-medium',
                  'font-[var(--font-body)] transition-colors duration-300',
                  activeSection === id
                    ? 'text-[var(--color-accent)]'
                    : 'text-[var(--color-text2)]'
                )}
              >
                {t.nav[key]}
              </button>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-[0.6rem]">
          {/* Lang toggle */}
          <button
            onClick={() => setLang(lang === 'th' ? 'en' : 'th')}
            className="btn-outline rounded-[20px] px-[0.9rem] py-[0.4rem] text-xs font-[var(--font-body)] font-semibold"
          >
            {lang === 'th' ? 'EN' : 'TH'}
          </button>

          {/* Dark toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="btn-outline rounded-[20px] px-[0.9rem] py-[0.4rem] text-xs font-semibold"
          >
            {dark ? '☀️' : '🌙'}
          </button>

          {/* Hamburger */}
          <button
            className={cx(
              'flex cursor-pointer flex-col gap-[5px] border-none bg-transparent p-1 md:hidden',
              menuOpen && 'ham-open'
            )}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={cx(
                'ham-bar',
                menuOpen && '[transform:translateY(7px)_rotate(45deg)]'
              )}
            />
            <span className={cx('ham-bar', menuOpen && 'opacity-0')} />
            <span
              className={cx(
                'ham-bar',
                menuOpen && '[transform:translateY(-7px)_rotate(-45deg)]'
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
