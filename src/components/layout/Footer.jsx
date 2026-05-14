import { useLang } from '../../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-border bg-bg text-content transition-smooth border-t px-[8%] py-8 text-center text-sm">
      <p>
        © 2026{' '}
        <span className="text-accent font-semibold">
          Champ Siradanai Luesup
        </span>
        {' · '}
        {t.footer}{' '}
        <span className="text-accent font-semibold">
          React + Vite + Tailwind
        </span>
        {' ❤️'}
      </p>
    </footer>
  );
}
