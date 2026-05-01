import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../contexts/LanguageContext';

const projects = [
  {
    id: 1,
    title: 'E-Commerce App',
    description: {
      th: 'แอปพลิเคชันสำหรับซื้อขายสินค้าออนไลน์ พัฒนาด้วย React และ Node.js',
      en: 'Full-featured online shopping app built with React and Node.js',
    },
    tags: ['React', 'Node.js', 'MongoDB'],
    emoji: '🛒',
    color: 'from-blue-400 to-cyan-400',
    category: 'fullstack',
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    description: {
      th: 'แดชบอร์ดแสดงสภาพอากาศแบบ Real-time พร้อม Chart สวยงาม',
      en: 'Real-time weather dashboard with beautiful data visualization',
    },
    tags: ['React', 'API', 'Chart.js'],
    emoji: '🌤️',
    color: 'from-orange-400 to-yellow-400',
    category: 'frontend',
  },
  {
    id: 3,
    title: 'Task Manager',
    description: {
      th: 'แอปจัดการงานแบบ Drag & Drop พร้อมระบบ Authentication',
      en: 'Drag & Drop task manager with full authentication system',
    },
    tags: ['React', 'Firebase', 'Tailwind'],
    emoji: '✅',
    color: 'from-green-400 to-emerald-400',
    category: 'fullstack',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: {
      th: 'เว็บไซต์ Portfolio ส่วนตัว รองรับหลายภาษาและ Dark Mode',
      en: 'Personal portfolio with multi-language support and dark mode',
    },
    tags: ['React', 'Vite', 'Tailwind'],
    emoji: '🎨',
    color: 'from-purple-400 to-pink-400',
    category: 'frontend',
  },
  {
    id: 5,
    title: 'Chat Application',
    description: {
      th: 'แอปแชทแบบ Real-time รองรับห้องสนทนาและการแชร์ไฟล์',
      en: 'Real-time chat app with rooms and file sharing support',
    },
    tags: ['React', 'Socket.io', 'Express'],
    emoji: '💬',
    color: 'from-indigo-400 to-blue-400',
    category: 'fullstack',
  },
  {
    id: 6,
    title: 'Recipe Finder',
    description: {
      th: 'แอปค้นหาสูตรอาหารจาก API พร้อมบันทึกรายการโปรด',
      en: 'Recipe search app with favorites and ingredient filtering',
    },
    tags: ['React', 'API', 'CSS'],
    emoji: '🍳',
    color: 'from-red-400 to-orange-400',
    category: 'frontend',
  },
];

const categories = ['all', 'frontend', 'fullstack'];

export default function Projects() {
  const { t, lang } = useLang();
  const [active, setActive] = useState('all');
  const [hovered, setHovered] = useState(null);

  const filtered =
    active === 'all' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-28 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold tracking-widest text-blue-500 uppercase">
            {t.projects.subtitle}
          </span>
          <h2 className="mt-2 text-4xl font-bold text-gray-800 dark:text-white">
            {t.projects.title}
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-blue-500 rounded-full" />
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {t.projects.categories[cat]}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onHoverStart={() => setHovered(project.id)}
                onHoverEnd={() => setHovered(null)}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
              >
                {/* Top Gradient Banner */}
                <div
                  className={`h-32 bg-gradient-to-r ${project.color} flex items-center justify-center text-6xl relative overflow-hidden`}
                >
                  <motion.span
                    animate={
                      hovered === project.id
                        ? { scale: 1.3, rotate: 10 }
                        : { scale: 1, rotate: 0 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    {project.emoji}
                  </motion.span>
                  {/* Shine effect */}
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={
                      hovered === project.id ? { x: '200%' } : { x: '-100%' }
                    }
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                    {project.description[lang]}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Hover Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                      hovered === project.id
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 10 }
                    }
                    transition={{ duration: 0.2 }}
                    className="flex gap-2 mt-4"
                  >
                    <button className="flex-1 py-2 text-sm font-medium bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                      {t.projects.demo}
                    </button>
                    <button className="flex-1 py-2 text-sm font-medium border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      {t.projects.code}
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
