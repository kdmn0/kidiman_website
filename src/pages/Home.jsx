import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import Lanyard from '../components/Lanyard';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center relative px-4 md:px-8 overflow-hidden">

      {/* 3D Lanyard Component */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Lanyard position={[0, 0, 11]} fov={25} anchorX={-2.25} />
      </div>

      {/* Hero Text */}
      <div className="w-full md:w-1/2 md:ml-auto flex flex-col items-center md:items-start text-center md:text-left space-y-6 z-10 px-4 pointer-events-none mb-auto mt-32 md:mb-0 md:mt-0">
        <motion.h1
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-textMain-light dark:text-textMain-dark pointer-events-auto"
        >
          {t('home.heading')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-textMuted-light dark:text-textMuted-dark max-w-2xl pointer-events-auto"
        >
          {t('home.subtitle')}
        </motion.p>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center animate-bounce hidden md:flex"
      >
        <span className="text-sm text-textMuted-light dark:text-textMuted-dark mb-2">Scroll</span>
        <div className="w-6 h-10 border-2 border-textMuted-light dark:border-textMuted-dark rounded-full flex justify-center p-1">
          <div className="w-1.5 h-3 bg-brand rounded-full"></div>
        </div>
      </motion.div>

    </div>
  );
}
