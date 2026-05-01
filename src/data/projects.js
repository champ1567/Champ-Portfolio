/** @type {import('../types').Project[]} */
export const projects = [
  {
    id: 1,
    title: 'E-Commerce App',
    emoji: '🛒',
    gradient: 'linear-gradient(135deg, #4f6ef7, #06b6d4)',
    category: 'fullstack',
    desc: {
      th: 'แอปพลิเคชันสำหรับซื้อขายสินค้าออนไลน์ พัฒนาด้วย React และ Node.js',
      en: 'Full-featured online shopping app built with React and Node.js',
    },
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    emoji: '🌤️',
    gradient: 'linear-gradient(135deg, #f97316, #eab308)',
    category: 'frontend',
    desc: {
      th: 'แดชบอร์ดแสดงสภาพอากาศแบบ Real-time พร้อม Chart สวยงาม',
      en: 'Real-time weather dashboard with beautiful data visualization',
    },
    tags: ['React', 'API', 'Chart.js'],
  },
  {
    id: 3,
    title: 'Task Manager',
    emoji: '✅',
    gradient: 'linear-gradient(135deg, #22c55e, #10b981)',
    category: 'fullstack',
    desc: {
      th: 'แอปจัดการงานแบบ Drag & Drop พร้อมระบบ Authentication',
      en: 'Drag & Drop task manager with full authentication system',
    },
    tags: ['React', 'Firebase', 'Tailwind'],
  },
  {
    id: 4,
    title: 'Portfolio Website',
    emoji: '🎨',
    gradient: 'linear-gradient(135deg, #a855f7, #ec4899)',
    category: 'frontend',
    desc: {
      th: 'เว็บไซต์ Portfolio ส่วนตัว รองรับหลายภาษาและ Dark Mode',
      en: 'Personal portfolio with multi-language support and dark mode',
    },
    tags: ['React', 'Vite', 'Tailwind'],
  },
  {
    id: 5,
    title: 'Chat Application',
    emoji: '💬',
    gradient: 'linear-gradient(135deg, #6366f1, #4f6ef7)',
    category: 'fullstack',
    desc: {
      th: 'แอปแชทแบบ Real-time รองรับห้องสนทนาและการแชร์ไฟล์',
      en: 'Real-time chat app with rooms and file sharing support',
    },
    tags: ['React', 'Socket.io', 'Express'],
  },
  {
    id: 6,
    title: 'Recipe Finder',
    emoji: '🍳',
    gradient: 'linear-gradient(135deg, #ef4444, #f97316)',
    category: 'frontend',
    desc: {
      th: 'แอปค้นหาสูตรอาหารจาก API พร้อมบันทึกรายการโปรด',
      en: 'Recipe search app with favorites and ingredient filtering',
    },
    tags: ['React', 'API', 'CSS'],
  },
];
