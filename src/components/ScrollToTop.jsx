import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { useLenis } from 'lenis/react';

export default function ScrollToTop() {
 const [isVisible, setIsVisible] = useState(false);


 // Show button when page is scrolled down 300px
 const toggleVisibility = () => {
 if (window.scrollY > 300) {
 setIsVisible(true);
 } else {
 setIsVisible(false);
 }
 };

 const lenis = useLenis();

  const scrollToTop = () => {
  if (lenis) {
  lenis.scrollTo(0);
  } else {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  window.history.pushState(null, '', window.location.pathname + window.location.search);
  };



 useEffect(() => {
 window.addEventListener("scroll", toggleVisibility);
 return () => window.removeEventListener("scroll", toggleVisibility);
 }, []);

 return (
 <AnimatePresence>
 {isVisible && (
 <motion.button
 initial={{ opacity: 0, scale: 0.5 }}
 animate={{ opacity: 1, scale: 1 }}
 exit={{ opacity: 0, scale: 0.5 }}
 onClick={scrollToTop}
 className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-brand text-white shadow-lg hover:bg-opacity-90 transition-all duration-300 focus:outline-none"
 aria-label="Scroll to top"
 >
 <ArrowUp size={24} />
 </motion.button>
 )}
 </AnimatePresence>
 );
}
