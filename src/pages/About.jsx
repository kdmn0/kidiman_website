import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { FileText, Gamepad2, Book, Music } from 'lucide-react';


export default function About() {
  const { t } = useTranslation();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="space-y-12 py-8"
    >
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-black">{t('about.heading')}</h1>
        <p className="text-xl text-textMuted-light dark:text-textMuted-dark">{t('about.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div variants={item} className="card-base flex flex-col h-full bg-transparent">
          <h3 className="text-2xl font-bold mb-4">{t('about.whoAmI')}</h3>
          <p className="text-textMuted-light dark:text-textMuted-dark leading-relaxed flex-grow">
            {t('about.whoAmIDesc')}
          </p>
          <div className="mt-8 pt-6 border-t border-secondary-light dark:border-secondary-dark flex justify-center">
            <a href="/documents/resume.pdf" target="_blank" rel="noreferrer" className="btn-outline flex items-center gap-2 w-full sm:w-auto">
              <FileText size={20} />
              <span>{t('about.myResume')}</span>
            </a>
          </div>
        </motion.div>

        <motion.div variants={item} className="card-base bg-transparent">
          <h3 className="text-2xl font-bold mb-6 ">{t('about.education')}</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-brand pl-4">
              <h5 className="text-lg font-bold">{t('about.ostim')}</h5>
              <p className="text-brand font-medium">{t('about.softwareEng')}</p>
              <p className="text-sm text-textMuted-light dark:text-textMuted-dark">{t('about.duration')}</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={item} className="card-base md:col-span-2 bg-transparent">
          <h3 className="text-2xl font-bold mb-6">{t('about.skills')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h5 className="text-lg font-bold mb-3 border-b border-secondary-light dark:border-secondary-dark pb-2">{t('about.backend')}</h5>
              <ul className="space-y-2 text-textMuted-light dark:text-textMuted-dark">
                <li>Python</li>
                <li>C</li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-bold mb-3 border-b border-secondary-light dark:border-secondary-dark pb-2">{t('about.frontend')}</h5>
              <ul className="space-y-2 text-textMuted-light dark:text-textMuted-dark">
                <li>HTML & CSS</li>
                <li>JavaScript / React</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-bold mb-3 border-b border-secondary-light dark:border-secondary-dark pb-2">{t('about.tools')}</h5>
              <ul className="space-y-2 text-textMuted-light dark:text-textMuted-dark">
                <li>Git & GitHub</li>
                <li>Django</li>
                <li>Vite</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
