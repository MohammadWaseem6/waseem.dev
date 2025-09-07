import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = ["Home", "About", "Projects", "Resume"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: string) => {
    setActiveSection(item.toLowerCase());
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-gray-900/95 backdrop-blur-sm' : 'py-4 bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="w-full sm:w-[80%] md:w-[60%] mx-auto rounded-3xl h-[60px] bg-gray-900/80 border border-cyan-500/30 flex items-center justify-center gap-6 text-gray-300 font-bold backdrop-blur-md hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
          {navItems.map((item, index) =>
            item === "Resume" ? (
              <motion.a
                key={index}
                href="/resume.pdf"
                download="Waseem_Resume.pdf"
                whileHover={{ scale: 1.1, color: "#06b6d4" }}
                whileTap={{ scale: 0.95 }}
                className={`text-sm sm:text-base md:text-lg cursor-pointer transition-colors duration-200 ${activeSection === item.toLowerCase() ? 'text-cyan-400' : ''}`}
              >
                {item}
              </motion.a>
            ) : (
              <motion.button
                key={index}
                onClick={() => handleNavClick(item)}
                whileHover={{ scale: 1.1, color: "#06b6d4" }}
                whileTap={{ scale: 0.95 }}
                className={`text-sm sm:text-base md:text-lg transition-colors duration-200 ${activeSection === item.toLowerCase() ? 'text-cyan-400' : ''}`}
              >
                {item}
              </motion.button>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;