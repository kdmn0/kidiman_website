import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import { FaGithub } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
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

 const projectsData = [
 {
 title: t('projects.kidimusic_generator'),
 description: t('projects.kidimusic_generatorDesc'),
 tags: [t('projects.tags.Typescript'), t('projects.tags.JavaScript'), t('projects.tags.CSS')],
 github: "https://github.com/yigitardakidiman/kidimusic-generator-app",
 link: "https://music.kidiman.com"
 },
 {
 title: t('projects.meyveKayit'),
 description: t('projects.meyveKayitDesc'),
 tags: [t('projects.tags.Python'), t('projects.tags.FileManagement')],
 github: "https://github.com/yigitardakidiman/MeyveKayit"
 },

 {
 title: t('projects.bankingSystem'),
 description: t('projects.bankingSystemDesc'),
 tags: [t('projects.tags.Python'), t('projects.tags.OOP')],
 github: "https://github.com/yigitardakidiman/CENG110-Simple-Banking-System"
 }
 ];

 return (
 <motion.div
 variants={container}
 initial="hidden"
 animate="show"
 className="space-y-12 py-8"
 >
 <div className="text-center space-y-4">
 <h1 className="text-4xl md:text-5xl font-black">{t('projects.heading')}</h1>
 <p className="text-xl flex items-center justify-center gap-2">
 <a href="https://github.com/yigitardakidiman" target="_blank" rel="noreferrer" className="font-bold text-brand hover:underline flex items-center gap-1">
 GitHub <FaGithub size={20} />
 </a>
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {projectsData.map((project, index) => (
 <motion.div key={index} variants={item}>
 <ProjectCard {...project} />
 </motion.div>
 ))}
 </div>
 </motion.div>
 );
}
