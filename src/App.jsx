import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ReactLenis from 'lenis/react';
import CustomCursor from './components/CustomCursor';

function App() {
 return (
 <ReactLenis root>
 <CustomCursor />
 <div className="flex flex-col min-h-screen relative overflow-hidden">
 <Navbar />
 <main className="flex-grow w-full">
 <section id="home">
 <Home />
 </section>
 <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 md:space-y-10">
 <section id="about" className="scroll-mt-24">
 <About />
 </section>

 <hr className="border-secondary opacity-50" />

 <section id="projects" className="scroll-mt-24">
 <Projects />
 </section>

 <hr className="border-secondary opacity-50" />

 <section id="contact" className="scroll-mt-24">
 <Contact />
 </section>
 </div>
 </main>
 <Footer />
 <ScrollToTop />
 </div>
 </ReactLenis>
 );
}

export default App;
