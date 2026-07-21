import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function ProjectCard({ title, description, tags, link, github, comingSoon }) {
 const { t } = useTranslation();

 return (
 <motion.div
 initial={{ opacity: 0, y: 50 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, amount: 0.2 }}
 transition={{ duration: 0.5 }}
 className="card-base flex flex-col h-full relative overflow-hidden group bg-transparent"
 >

 <div className="flex justify-between items-start mb-4">
 <h3 className="text-xl font-bold">{title}</h3>
 <div className="flex gap-2">
 {github && (
 <a href={github} target="_blank" rel="noreferrer" className="text-textMuted hover:text-brand :text-brand">
 <FaGithub size={20} />
 </a>
 )}
 {link && (
 <a href={link} target="_blank" rel="noreferrer" className="text-textMuted hover:text-brand :text-brand">
 <ExternalLink size={20} />
 </a>
 )}
 </div>
 </div>

 <p className="text-textMuted mb-6 flex-grow">
 {description}
 </p>

 <div className="flex flex-wrap gap-2 mt-auto items-center justify-between">
 <div className="flex flex-wrap gap-2">
 {tags?.map((tag, index) => (
 <span
 key={index}
 className="px-3 py-1 bg-secondary text-xs font-semibold rounded-full"
 >
 {tag}
 </span>
 ))}
 {comingSoon && (
 <span className="px-3 py-1 bg-brand/10 text-brand text-xs font-semibold rounded-full">
 {t('projects.comingSoon') || "Coming Soon"}
 </span>
 )}
 </div>
 
 {link && (
 <a 
 href={link} 
 target="_blank" 
 rel="noreferrer" 
 className="flex items-center gap-1 px-3 py-1 bg-brand text-white text-xs font-bold rounded-full hover:bg-brand/90 transition-colors"
 >
 {t('projects.liveDemo')} <ExternalLink size={14} />
 </a>
 )}
 </div>
 </motion.div>
 );
}
