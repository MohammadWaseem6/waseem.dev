import React, { useState, useEffect, useRef } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useReducedMotion,
} from 'framer-motion';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

// Put your PDF in the /public folder as resume.pdf, or change this URL
const RESUME_URL = '/resume.pdf';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
];

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = !!useReducedMotion();

  const headerRef = useRef<HTMLElement>(null);
  const lockUntil = useRef(0); // ignore scroll-spy while a click-scroll is running
  const setActiveRef = useRef(setActiveSection);
  setActiveRef.current = setActiveSection;

  // Reading-progress bar
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  // Style change after scrolling
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() < lockUntil.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveRef.current(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu on Escape or outside click
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    setOpen(false);
    lockUntil.current = Date.now() + 900;
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  };

  const linkBase =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900';

  return (
    <motion.header
      ref={headerRef}
      initial={reduce ? false : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 px-4 transition-[padding] duration-300 ${
        isScrolled ? 'pt-2' : 'pt-4'
      }`}
    >
      {/* scroll progress */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="fixed left-0 right-0 top-0 h-0.5 origin-left bg-gradient-to-r from-cyan-400 to-blue-500"
      />

      <nav
        aria-label="Primary"
        className={`mx-auto flex h-14 max-w-4xl items-center justify-between rounded-2xl border border-cyan-500/30 px-4 backdrop-blur-md transition-all duration-300 sm:px-6 ${
          isScrolled
            ? 'bg-gray-900/90 shadow-lg shadow-black/30'
            : 'bg-gray-900/70 hover:shadow-lg hover:shadow-cyan-500/20'
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className={`rounded-md text-lg font-bold tracking-tight text-white ${linkBase}`}
        >
          Waseem<span className="text-cyan-400">.Dev</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map(({ label, id }) => {
            const active = activeSection === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, id)}
                  aria-current={active ? 'page' : undefined}
                  className={`relative block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${linkBase} ${
                    active ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full border border-cyan-400/30 bg-cyan-500/15"
                      transition={
                        reduce ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 32 }
                      }
                    />
                  )}
                  <span className="relative">{label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop resume */}
        <motion.a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={reduce ? undefined : { scale: 1.04 }}
          whileTap={reduce ? undefined : { scale: 0.96 }}
          className={`hidden items-center gap-2 rounded-full border border-cyan-500/40 px-4 py-2 text-sm font-semibold text-cyan-300 transition-colors duration-300 hover:bg-cyan-500/10 md:inline-flex ${linkBase}`}
        >
          Resume
          <FaDownload className="text-xs" aria-hidden="true" />
        </motion.a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className={`flex h-10 w-10 items-center justify-center rounded-full text-lg text-gray-300 transition-colors hover:bg-white/5 hover:text-white md:hidden ${linkBase}`}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? false : { opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-2 max-w-4xl rounded-2xl border border-cyan-500/30 bg-gray-900/95 p-2 shadow-xl shadow-black/40 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map(({ label, id }) => {
                const active = activeSection === id;
                return (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={(e) => handleNavClick(e, id)}
                      aria-current={active ? 'page' : undefined}
                      className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${linkBase} ${
                        active
                          ? 'bg-cyan-500/10 text-cyan-300'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
              <li>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-cyan-300 transition-colors hover:bg-cyan-500/10 ${linkBase}`}
                >
                  Resume
                  <FaDownload className="text-sm" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
