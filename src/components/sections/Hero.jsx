import { useLang } from '../../contexts/LanguageContext';
import { scrollTo } from '../../lib/utils';

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="hero" className="hero-container">
      {/* Background blobs */}
      <div className="bg-blob" />
      <div className="bg-blob2" />

      {/* Grid */}
      <div className="grid-container">
        {/* ── Left: Text ── */}
        <div>
          {/* Tag */}
          <div className="tag">
            <span className="tag-dot" />
            {t.hero.tag}
          </div>

          {/* Title */}
          <h1 className="title">
            <span className="block">{t.hero.greeting}</span>
            <span className="gradient-text">
              {t.hero.nName} <br />
              {t.hero.fName}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="sub-title">{t.hero.sub}</p>

          {/* CTA buttons */}
          <div className="hero-btn-container">
            <button
              onClick={() => scrollTo('projects')}
              className="btn-gradient px-8 py-3.5 text-base"
            >
              {t.hero.btnProjects}
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="btn-outline px-8 py-3.5 text-base"
            >
              {t.hero.btnContact}
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 flex [animation:fadeUp_0.6s_0.4s_ease_both] flex-wrap gap-10">
            {t.hero.stats.map((s) => (
              <div key={s.label}>
                <div className="text-[2rem] font-[var(--font-heading)] font-extrabold text-[var(--color-text)]">
                  {s.num}
                </div>
                <div className="mt-[0.1rem] text-[0.78rem] font-medium text-[var(--color-text2)]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Avatar ── */}
        <div className="hidden [animation:fadeUp_0.6s_0.2s_ease_both] items-center justify-center md:flex">
          <div className="relative h-[340px] w-[340px]">
            <div className="avatar-bg" />
            <div className="avatar-inner">🧑‍💻</div>
            <div className="float-badge top-[10px] -right-[10px] [animation:float_3s_ease-in-out_infinite]">
              ⚡ React Dev
            </div>
            <div className="float-badge bottom-[30px] -left-[20px] [animation:float_3s_1.5s_ease-in-out_infinite]">
              🎨 UI/UX Lover
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
