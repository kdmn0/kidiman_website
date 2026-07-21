import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
 const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
 const [isHovering, setIsHovering] = useState(false);

 useEffect(() => {
 const updateMousePosition = (e) => {
 setMousePosition({ x: e.clientX, y: e.clientY });
 };

 const handleMouseOver = (e) => {
 // Check if we are hovering over a clickable element
 const target = e.target;
 if (
 target.tagName.toLowerCase() === 'a' ||
 target.tagName.toLowerCase() === 'button' ||
 target.closest('a') ||
 target.closest('button') ||
 target.classList.contains('cursor-pointer') ||
 target.closest('.cursor-pointer') ||
 window.getComputedStyle(target).cursor === 'pointer'
 ) {
 setIsHovering(true);
 } else {
 setIsHovering(false);
 }
 };

 window.addEventListener('mousemove', updateMousePosition);
 window.addEventListener('mouseover', handleMouseOver);

 return () => {
 window.removeEventListener('mousemove', updateMousePosition);
 window.removeEventListener('mouseover', handleMouseOver);
 };
 }, []);

 const variants = {
 default: {
 x: mousePosition.x - 16,
 y: mousePosition.y - 16,
 scale: 1,
 backgroundColor: 'transparent',
 border: '2px solid rgba(99, 102, 241, 0.8)',
 },
 hover: {
 x: mousePosition.x - 16,
 y: mousePosition.y - 16,
 scale: 1.5,
 backgroundColor: 'rgba(99, 102, 241, 0.2)',
 border: '2px solid rgba(99, 102, 241, 1)',
 }
 };

 return (
 <>
 <motion.div
 className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[100] hidden md:block"
 variants={variants}
 animate={isHovering ? 'hover' : 'default'}
 transition={{
 type: 'spring',
 stiffness: 500,
 damping: 28,
 mass: 0.5
 }}
 />
 <div 
 className="fixed top-0 left-0 w-2 h-2 bg-brand rounded-full pointer-events-none z-[100] hidden md:block"
 style={{
 transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)`,
 }}
 />
 </>
 );
}
