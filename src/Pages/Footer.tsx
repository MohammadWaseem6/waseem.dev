import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaReact,
  FaNodeJs,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiTypescript, SiMongodb } from 'react-icons/si';

interface FooterProps {
  id?: string;
}

const EASE = [0.22, 1, 0.36, 1] as const;

const EMAIL = 'mohammadwaseem001100@gmail.com';
const RESUME_URL = '/resume.pdf';

const socials = [
  { label: 'GitHub', href: 'https://github.com/MohammadWaseem6', icon: FaGithub },
  // Replace with your profile URL (linkedin.com/in/...). The feed link sends visitors to a login page.
  { label: 'LinkedIn', href: 'https://www.linkedin.com/feed/', icon: FaLinkedin },
  { label: 'X (Twitter)', href: 'https://x.com/MWaseem0110', icon: FaXTwitter },
  { label: 'Email', href: `mailto:${EMAIL}`, icon: FaEnvelope },
];

const quickLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
];

const builtWith = [
  { label: 'React', icon: FaReact },
  { label: 'TypeScript', icon: SiTypescript },
  { label: 'Node.js', icon: FaNodeJs },
  { label: 'MongoDB', icon: SiMongodb },
];

/* ---------- Variants ---------- */

const group: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: EASE },
  },
};

/* ---------- Component ---------- */

const Footer: React.FC<FooterProps> = ({ id = 'contact' }) => {
  const reduce = !!useReducedMotion();

  const focus =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900';

  const scrollTo = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    document
      .getElementById(target)
      ?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });

  return (
    <footer
      id={id}
      className="relative overflow-hidden border-t border-gray-800 bg-gray-900 px-4 pb-8 pt-20"
    >
      {/* top accent line */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
      />
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-56 w-[28rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <div className="container relative z-10 mx-auto max-w-6xl">
        {/* ---------- Call to action ---------- */}
        <motion.div
          variants={group}
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-16 text-center"
        >
          <motion.h2 variants={rise} className="mb-3 text-3xl font-bold text-white md:text-4xl">
            Let's build something <span className="text-cyan-400">together</span>
          </motion.h2>
          <motion.p variants={rise} className="mx-auto mb-8 max-w-xl text-gray-400">
            I'm open to full-stack developer roles and freelance projects. Send me a message and
            I'll get back to you.
          </motion.p>
          <motion.div variants={rise}>
            <motion.a
              href={`mailto:${EMAIL}`}
              whileHover={reduce ? undefined : { scale: 1.04 }}
              whileTap={reduce ? undefined : { scale: 0.96 }}
              className={`inline-flex items-center gap-2 rounded-full bg-cyan-600 px-7 py-3 font-semibold text-white shadow-lg shadow-cyan-500/30 transition-colors duration-300 hover:bg-cyan-500 ${focus}`}
            >
              <FaEnvelope aria-hidden="true" />
              Say hello
            </motion.a>
            <p className="mt-4 text-sm text-gray-500">{EMAIL}</p>
          </motion.div>
        </motion.div>

        {/* ---------- Columns ---------- */}
        <motion.div
          variants={group}
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 gap-10 border-t border-gray-800 pt-12 text-center md:grid-cols-3 md:text-left"
        >
          {/* Brand */}
          <motion.div variants={rise}>
            <a
              href="#home"
              onClick={(e) => scrollTo(e, 'home')}
              className={`rounded-md text-2xl font-bold tracking-tight text-white ${focus}`}
            >
              Waseem<span className="text-cyan-400">.Dev</span>
            </a>
            <p className="mt-2 text-gray-400">Full-stack developer (MERN)</p>
            <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-gray-500 md:mx-0">
              Building web apps from the database and API to the interface.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.nav variants={rise} aria-label="Footer">
            <h3 className="mb-4 text-sm font-semibold text-white">Explore</h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, id: target }) => (
                <li key={target}>
                  <a
                    href={`#${target}`}
                    onClick={(e) => scrollTo(e, target)}
                    className={`rounded text-sm text-gray-400 transition-colors duration-300 hover:text-cyan-400 ${focus}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded text-sm text-gray-400 transition-colors duration-300 hover:text-cyan-400 ${focus}`}
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.nav>

          {/* Socials */}
          <motion.div variants={rise}>
            <h3 className="mb-4 text-sm font-semibold text-white">Find me online</h3>
            <ul className="flex items-center justify-center gap-3 md:justify-start">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <motion.a
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={reduce ? undefined : { y: -3 }}
                    className={`flex h-11 w-11 items-center justify-center rounded-full border border-gray-700 bg-gray-800/50 text-lg text-gray-400 transition-colors duration-300 hover:border-cyan-400/50 hover:text-cyan-400 ${focus}`}
                  >
                    <Icon />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* ---------- Bottom bar ---------- */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Waseem. All rights reserved.
          </p>

          <div className="flex items-center gap-3 text-gray-500">
            <span className="text-sm">Built with</span>
            <ul className="flex items-center gap-2.5 text-lg">
              {builtWith.map(({ label, icon: Icon }) => (
                <li key={label} title={label}>
                  <Icon aria-label={label} className="transition-colors duration-300 hover:text-cyan-400" />
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            onClick={scrollTop}
            aria-label="Back to top"
            className={`flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/30 text-cyan-300 transition-colors duration-300 hover:bg-cyan-500/10 ${focus}`}
          >
            <FaArrowUp aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
