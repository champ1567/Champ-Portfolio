import { useLang } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      className="flex flex-col items-center justify-center 
                        min-h-screen text-center px-4
                        bg-gray-50 dark:bg-gray-900"
    >
      <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
        {t.hero.greeting} <span className="text-blue-500">Champ</span>
      </h1>
      <p className="text-xl text-gray-500 dark:text-gray-400 mb-8">
        {t.hero.role}
      </p>
      <button
        className="px-6 py-3 bg-blue-500 text-white rounded-full
                         hover:bg-blue-600 transition-colors duration-200"
      >
        {t.hero.cta}
      </button>
    </section>
  );
}
