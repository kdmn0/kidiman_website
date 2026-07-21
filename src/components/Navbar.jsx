import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import LanguageToggle from './LanguageToggle';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
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

 useEffect(() => {
 const handleScroll = () => {
 const sections = links.map(link => document.getElementById(link.id));
 
 let currentActive = 'home';
 const offset = 150; // trigger offset from top
 
 for (let i = sections.length - 1; i >= 0; i--) {
 const section = sections[i];
 if (section) {
 const rect = section.getBoundingClientRect();
 if (rect.top <= offset) {
 currentActive = links[i].id;
 break;
 }
 }
 }
 
 // If we've reached the absolute bottom of the page, highlight the last item
 if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
 currentActive = 'contact';
 }
 
 setActiveSection(currentActive);
 };

 window.addEventListener('scroll', handleScroll);
 handleScroll(); // run once on mount
 
 return () => window.removeEventListener('scroll', handleScroll);
 }, [t]);



 return (
 <nav className="sticky top-0 z-50 backdrop-blur-xl bg-primary/80 border-b border-secondary/50 ">
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
 <div className="flex items-center gap-2 pl-4 border-l border-secondary ">
 <LanguageToggle />
 </div>
 </div>

 <div className="md:hidden flex items-center gap-4">
 <LanguageToggle />
 <button onClick={() => setIsOpen(!isOpen)} className="text-textMain ">
 {isOpen ? <X size={24} /> : <Menu size={24} />}
 </button>
 </div>
 </div>
 </div>

 {isOpen && (
 <motion.div
 initial={{ opacity: 0, y: -10 }}
 animate={{ opacity: 1, y: 0 }}
 className="md:hidden bg-card border-b border-secondary "
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
 : 'text-textMuted hover:bg-secondary :bg-secondary'
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
