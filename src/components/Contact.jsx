import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../contexts/LanguageContext';

const socialLinks = [
  { icon: '🐙', label: 'GitHub', href: '#' },
  { icon: '💼', label: 'LinkedIn', href: '#' },
  { icon: '🐦', label: 'Twitter', href: '#' },
];

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 outline-none
    bg-white dark:bg-gray-800 text-gray-800 dark:text-white
    placeholder:text-gray-400 dark:placeholder:text-gray-500
    ${
      focused === field
        ? 'border-blue-500 shadow-lg shadow-blue-500/10'
        : 'border-gray-200 dark:border-gray-700'
    }`;

  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100 dark:bg-blue-900/10 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest text-blue-500 uppercase">
            {t.contact.subtitle}
          </span>
          <h2 className="mt-2 text-4xl font-bold text-gray-800 dark:text-white">
            {t.contact.title}
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-blue-500 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              {t.contact.description}
            </p>

            {/* Info Items */}
            {[
              {
                icon: '📍',
                label: t.contact.locationLabel,
                value: 'Bangkok, Thailand',
              },
              {
                icon: '📧',
                label: t.contact.emailLabel,
                value: 'champ@email.com',
              },
              {
                icon: '📱',
                label: t.contact.phoneLabel,
                value: '+66 98 765 4321',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-400 dark:text-gray-500">
                    {item.label}
                  </p>
                  <p className="font-medium text-gray-700 dark:text-gray-200">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center text-xl shadow-md hover:shadow-lg border border-gray-100 dark:border-gray-700 transition-shadow"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 space-y-5"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.contact.nameLabel}
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
                placeholder={t.contact.namePlaceholder}
                required
                className={inputClass('name')}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.contact.emailLabel}
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
                placeholder={t.contact.emailPlaceholder}
                required
                className={inputClass('email')}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.contact.messageLabel}
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                placeholder={t.contact.messagePlaceholder}
                rows={4}
                required
                className={`${inputClass('message')} resize-none`}
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors duration-300 shadow-lg shadow-blue-500/30"
            >
              {sent ? `✅ ${t.contact.sent}` : t.contact.send}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
