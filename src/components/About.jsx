import { motion } from 'framer-motion';
import { useLang } from '../contexts/LanguageContext';

const skills = [
  {
    name: 'React',
    level: 90,
    color: 'bg-cyan-400',
  },
  {
    name: 'Tailwind CSS',
    level: 85,
    color: 'bg-sky-400',
  },
  {
    name: 'JavaScript',
    level: 88,
    color: 'bg-yellow-400',
  },
  {
    name: 'Node.js',
    level: 75,
    color: 'bg-green-400',
  },
  {
    name: 'Figma',
    level: 70,
    color: 'bg-pink-400',
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function About() {
  const { t } = useLang();

  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      {/* Decorative blob */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest text-blue-500 uppercase">
            {t.about.subtitle}
          </span>
          <h2 className="mt-2 text-4xl font-bold text-gray-800 dark:text-white">
            {t.about.title}
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-blue-500 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Avatar + Card */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="flex flex-col items-center gap-6"
          >
            {/* Avatar */}
            <div className="relative">
              <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-7xl shadow-2xl">
                🧑‍💻
              </div>
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -inset-3 rounded-2xl border-2 border-dashed border-blue-300 dark:border-blue-700"
              />
            </div>

            {/* Info Card */}
            <div className="w-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              {[
                {
                  label: t.about.name,
                  value: 'Champ',
                },
                {
                  label: t.about.role,
                  value: 'Frontend Developer',
                },
                {
                  label: t.about.location,
                  value: 'Bangkok, Thailand',
                },
                {
                  label: t.about.email,
                  value: 'champ@email.com',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0"
                >
                  <span className="text-sm text-gray-400 dark:text-gray-500">
                    {item.label}
                  </span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Text + Skills */}
          <div className="space-y-8">
            <motion.p
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg"
            >
              {t.about.description}
            </motion.p>

            {/* Skills */}
            <div className="space-y-4">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                  }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: `${skill.level}%`,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 1,
                        delay: i * 0.1,
                        ease: 'easeOut',
                      }}
                      className={`h-full ${skill.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
