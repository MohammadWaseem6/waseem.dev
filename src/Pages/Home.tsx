import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import image from '../assets/IMG_2283-Photoroom.png';

interface HomeProps {
  id: string;
}

const EASE = [0.22, 1, 0.36, 1] as const;

const socials = [
  { label: 'GitHub', href: 'https://github.com/MohammadWaseem6', icon: FaGithub },
  // This is your LinkedIn feed link. Replace it with your profile URL (linkedin.com/in/...)
  { label: 'LinkedIn', href: 'https://www.linkedin.com/feed/', icon: FaLinkedin },
  { label: 'X (Twitter)', href: 'https://x.com/MWaseem0110', icon: FaXTwitter },
  { label: 'Email', href: 'mailto:mohammadwaseem001100@gmail.com', icon: FaEnvelope },
];

const stack = ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'];

/* ---------- Variants ---------- */

const textGroup: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
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

const chipGroup: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const chip: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: EASE } },
};

const portrait: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: EASE, delay: 0.3 } },
};

/* ---------- Component ---------- */

const Home: React.FC<HomeProps> = ({ id }) => {
  const reduce = !!useReducedMotion();
  const initial = reduce ? false : 'hidden';

  return (
    <section
      id={id}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 pb-12 pt-24"
    >
      {/* texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />

      {/* soft ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
      />

      <div className="relative z-10 grid w-full max-w-5xl grid-cols-1 items-center gap-10 rounded-3xl border border-cyan-500/20 bg-gray-800/50 p-8 shadow-2xl shadow-black/30 backdrop-blur-md md:grid-cols-[1.4fr_1fr] md:gap-6 md:p-14">
        {/* ---------- Text ---------- */}
        <motion.div
          variants={textGroup}
          initial={initial}
          animate="visible"
          className="order-2 text-center md:order-1 md:text-left"
        >
          <motion.p variants={rise} className="mb-3 text-sm font-medium text-cyan-400">
            Full-stack web developer
          </motion.p>

          <motion.h1
            variants={rise}
            className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text font-extrabold text-transparent">
              Waseem
            </span>
          </motion.h1>

          <motion.p
            variants={rise}
            className="mx-auto mb-6 max-w-md text-base leading-relaxed text-gray-300 sm:text-lg md:mx-0"
          >
            I build fast, reliable web apps with the MERN stack, from the database and API to a
            polished interface.
          </motion.p>

          {/* tech chips */}
          <motion.ul
            variants={chipGroup}
            aria-label="Core technologies"
            className="mb-8 flex flex-wrap justify-center gap-2 md:justify-start"
          >
            {stack.map((tech) => (
              <motion.li
                key={tech}
                variants={chip}
                className="rounded-full border border-cyan-500/20 bg-cyan-900/30 px-3 py-1 text-xs text-cyan-300"
              >
                {tech}
              </motion.li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div
            variants={rise}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start"
          >
            <div className="flex gap-3">
              <motion.a
                href="#projects"
                whileHover={reduce ? undefined : { scale: 1.04 }}
                whileTap={reduce ? undefined : { scale: 0.96 }}
                className="rounded-full bg-cyan-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/30 transition-colors duration-300 hover:bg-cyan-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
              >
                View my work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={reduce ? undefined : { scale: 1.04 }}
                whileTap={reduce ? undefined : { scale: 0.96 }}
                className="rounded-full border border-cyan-500/40 px-6 py-3 font-semibold text-cyan-300 transition-colors duration-300 hover:bg-cyan-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
              >
                Contact me
              </motion.a>
            </div>

            <ul className="flex items-center gap-4">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="block text-xl text-gray-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-cyan-400 focus-visible:text-cyan-400 focus-visible:outline-none"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* ---------- Portrait ---------- */}
        <motion.div
          variants={portrait}
          initial={initial}
          animate="visible"
          className="order-1 flex items-center justify-center md:order-2"
        >
          <div className="relative">
            {/* glow */}
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 opacity-30 blur-2xl"
            />
            {/* gradient ring */}
            <div className="relative rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1">
              <img
                src={image}
                alt="Portrait of Waseem"
                className="h-40 w-40 rounded-full border-4 border-gray-900 bg-gray-800 object-cover sm:h-48 sm:w-48 md:h-60 md:w-60"
                onError={(e) => {
                  const img = e.currentTarget;
                  img.onerror = null; // prevent an infinite error loop
                  img.src = '/src/assets/IMG_2283.JPG';
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
