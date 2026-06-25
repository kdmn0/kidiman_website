import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import LanguageToggle from './LanguageToggle';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useLenis } from 'lenis/react';

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const lenis = useLenis();

  const links = [
    { name: t('nav.home'), id: 'home' },
    { name: t('nav.about'), id: 'about' },
    { name: t('nav.projects'), id: 'projects' },
    { name: t('nav.contact'), id: 'contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-primary-light/80 dark:bg-primary-dark/80 border-b border-secondary-light dark:border-secondary-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                if (lenis) {
                  lenis.scrollTo(0);
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
                setActiveSection('home');
                window.history.pushState(null, '', '#home');
              }}
              className="text-xl font-bold tracking-tighter text-brand"
            >
              YK.
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (lenis) {
                    lenis.scrollTo(link.id === 'home' ? 0 : `#${link.id}`);
                  } else {
                    if (link.id === 'home') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      document.querySelector(`#${link.id}`)?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                  setActiveSection(link.id);
                  window.history.pushState(null, '', `#${link.id}`);
                }}
                className={`nav-link relative py-2 ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-brand"
                  />
                )}
              </a>
            ))}
            <div className="flex items-center gap-2 pl-4 border-l border-secondary-light dark:border-secondary-dark">
              <LanguageToggle />
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <LanguageToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="text-textMain-light dark:text-textMain-dark">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-card-light dark:bg-card-dark border-b border-secondary-light dark:border-secondary-dark"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (lenis) {
                    lenis.scrollTo(link.id === 'home' ? 0 : `#${link.id}`);
                  } else {
                    if (link.id === 'home') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      document.querySelector(`#${link.id}`)?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                  setActiveSection(link.id);
                  setIsOpen(false);
                  window.history.pushState(null, '', `#${link.id}`);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium ${activeSection === link.id
                  ? 'bg-brand text-white'
                  : 'text-textMuted-light dark:text-textMuted-dark hover:bg-secondary-light dark:hover:bg-secondary-dark'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
