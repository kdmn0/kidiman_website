import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Globe } from 'lucide-react';

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'tr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleLanguage}
      className="flex items-center gap-2 p-2 rounded-full bg-secondary-light dark:bg-secondary-dark text-textMain-light dark:text-textMain-dark hover:bg-brand dark:hover:bg-brand hover:text-white dark:hover:text-white transition-colors uppercase font-bold text-sm"
      aria-label="Toggle Language"
    >
      <Globe size={18} />
      <span>{i18n.language}</span>
    </motion.button>
  );
}
