import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { FileText, GraduationCap, Briefcase, Code, Terminal, Layers, Code2 } from 'lucide-react';


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
 <p className="text-xl text-textMuted ">{t('about.subtitle')}</p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 <motion.div variants={item} className="card-base flex flex-col h-full bg-transparent">
 <h3 className="text-2xl font-bold mb-4">{t('about.whoAmI')}</h3>
 <p className="text-textMuted leading-relaxed flex-grow">
 {t('about.whoAmIDesc')}
 </p>
 <div className="mt-8 pt-6 border-t border-secondary flex justify-center">
 <a href="/documents/resume.pdf" target="_blank" rel="noreferrer" className="btn-outline flex items-center gap-2 w-full sm:w-auto">
 <FileText size={20} />
 <span>{t('about.myResume')}</span>
 </a>
 </div>
 </motion.div>

 <motion.div variants={item} className="card-base bg-transparent">
 <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><GraduationCap className="text-brand" /> {t('about.education')}</h3>
 <div className="relative border-l-2 border-brand/30 pl-6 ml-3 space-y-8">
 <div className="relative">
 <div className="absolute w-4 h-4 bg-brand rounded-full -left-[33px] top-1 shadow-[0_0_10px_rgba(var(--brand),0.5)]"></div>
 <h5 className="text-lg font-bold">{t('about.ostim')}</h5>
 <p className="text-brand font-medium">{t('about.softwareEng')}</p>
 <p className="text-sm text-textMuted ">{t('about.duration')}</p>
 </div>
 </div>

 <h3 className="text-2xl font-bold mb-6 mt-10 flex items-center gap-2"><Briefcase className="text-brand" /> {t('about.experience')}</h3>
 <div className="relative border-l-2 border-brand/30 pl-6 ml-3 space-y-8">
 <div className="relative">
 <div className="absolute w-4 h-4 bg-brand rounded-full -left-[33px] top-1 shadow-[0_0_10px_rgba(var(--brand),0.5)]"></div>
 <h5 className="text-lg font-bold">{t('about.workPlace1')}</h5>
 <p className="text-brand font-medium">{t('about.workRole1')}</p>
 <p className="text-sm text-textMuted ">{t('about.workDuration1')}</p>
 </div>
 </div>
 </motion.div>

 <motion.div variants={item} className="card-base md:col-span-2 bg-transparent">
 <h3 className="text-2xl font-bold mb-6">{t('about.skills')}</h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="p-5 rounded-xl bg-secondary/30 hover:bg-secondary/50 :bg-secondary/50 transition-colors">
 <h5 className="text-lg font-bold mb-4 flex items-center gap-2"><Code size={20} className="text-brand"/> {t('about.frontend')}</h5>
 <div className="flex flex-wrap gap-2 text-sm">
 <span className="px-3 py-1 bg-brand/10 text-textMain border border-brand/20 rounded-full">HTML</span>
 <span className="px-3 py-1 bg-brand/10 text-textMain border border-brand/20 rounded-full">CSS</span>
 <span className="px-3 py-1 bg-brand/10 text-textMain border border-brand/20 rounded-full">React.js</span>
 <span className="px-3 py-1 bg-brand/10 text-textMain border border-brand/20 rounded-full">TailwindCSS</span>
 <span className="px-3 py-1 bg-brand/10 text-textMain border border-brand/20 rounded-full">Bootstrap</span>
 </div>
 </div>

 <div className="p-5 rounded-xl bg-secondary/30 hover:bg-secondary/50 :bg-secondary/50 transition-colors">
 <h5 className="text-lg font-bold mb-4 flex items-center gap-2"><Terminal size={20} className="text-brand"/> {t('about.backend')}</h5>
 <div className="flex flex-wrap gap-2 text-sm">
 <span className="px-3 py-1 bg-brand/10 text-textMain border border-brand/20 rounded-full">Node.js</span>
 <span className="px-3 py-1 bg-brand/10 text-textMain border border-brand/20 rounded-full">Django</span>
 </div>
 </div>

 <div className="p-5 rounded-xl bg-secondary/30 hover:bg-secondary/50 :bg-secondary/50 transition-colors">
 <h5 className="text-lg font-bold mb-4 flex items-center gap-2"><Code2 size={20} className="text-brand"/> {t('about.programmingLanguages')}</h5>
 <div className="flex flex-wrap gap-2 text-sm">
 <span className="px-3 py-1 bg-brand/10 text-textMain border border-brand/20 rounded-full">Python</span>
 <span className="px-3 py-1 bg-brand/10 text-textMain border border-brand/20 rounded-full">JavaScript</span>
 <span className="px-3 py-1 bg-brand/10 text-textMain border border-brand/20 rounded-full">C</span>
 </div>
 </div>

 <div className="p-5 rounded-xl bg-secondary/30 hover:bg-secondary/50 :bg-secondary/50 transition-colors">
 <h5 className="text-lg font-bold mb-4 flex items-center gap-2"><Layers size={20} className="text-brand"/> {t('about.tools')}</h5>
 <div className="flex flex-wrap gap-2 text-sm">
 <span className="px-3 py-1 bg-brand/10 text-textMain border border-brand/20 rounded-full">Supabase</span>
 <span className="px-3 py-1 bg-brand/10 text-textMain border border-brand/20 rounded-full">Git</span>
 <span className="px-3 py-1 bg-brand/10 text-textMain border border-brand/20 rounded-full">GitHub</span>
 <span className="px-3 py-1 bg-brand/10 text-textMain border border-brand/20 rounded-full">Canva</span>
 </div>
 </div>
 </div>
 </motion.div>
 </div>
 </motion.div>
 );
}
