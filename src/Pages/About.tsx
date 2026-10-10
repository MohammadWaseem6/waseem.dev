import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ImHtmlFive } from 'react-icons/im';
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaCss3Alt,
  FaJs,
  FaAws,
  FaLock,
  FaGraduationCap,
  FaCheck,
} from 'react-icons/fa';
import { SiTypescript, SiExpress, SiMongodb, SiPostgresql } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';

interface AboutProps {
  id: string;
}

type IconType = React.ComponentType<{ className?: string; style?: React.CSSProperties }>;

const EASE = [0.22, 1, 0.36, 1] as const;

/* ---------- Content (edit freely) ---------- */

const skillGroups: { title: string; items: { name: string; Icon: IconType; color: string }[] }[] = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML5', Icon: ImHtmlFive, color: '#E34F26' },
      { name: 'CSS3', Icon: FaCss3Alt, color: '#1572B6' },
      { name: 'JavaScript', Icon: FaJs, color: '#F7DF1E' },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
      { name: 'React', Icon: FaReact, color: '#61DAFB' },
      { name: 'Tailwind', Icon: RiTailwindCssFill, color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend & database',
    items: [
      { name: 'Node.js', Icon: FaNodeJs, color: '#339933' },
      { name: 'Express', Icon: SiExpress, color: '#E5E7EB' },
      { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
    ],
  },
  {
    title: 'Tools & cloud',
    items: [
      { name: 'Git', Icon: FaGitAlt, color: '#F05032' },
      { name: 'AWS', Icon: FaAws, color: '#FF9900' },
    ],
  },
];

type Status = 'Learned' | 'In progress';

const learning: { title: string; note: string; status: Status; Icon: IconType }[] = [
  {
    title: 'MERN stack',
    note: 'MongoDB, Express, React and Node.js, put together in Smart Store Keeper.',
    status: 'Learned',
    Icon: FaReact,
  },
  {
    title: 'TypeScript with React',
    note: 'Typed components and props across CreditWise and Crypto Market Cap.',
    status: 'Learned',
    Icon: SiTypescript,
  },
  {
    title: 'Auth and REST APIs',
    note: 'JWT login, role-based access and CRUD APIs that the frontend can rely on.',
    status: 'Learned',
    Icon: FaLock,
  },
  {
    title: 'FastAPI and PostgreSQL',
    note: 'Built the CreditWise backend and deployed it on Render with Neon.',
    status: 'Learned',
    Icon: SiPostgresql,
  },
  {
    title: 'Sigma Batch (Apna College)',
    note: 'Working through the full course alongside my projects, a few lectures every day.',
    status: 'In progress',
    Icon: FaGraduationCap,
  },
  {
    title: 'AWS',
    note: 'Learning cloud basics so I can deploy and run apps beyond free hosting tiers.',
    status: 'In progress',
    Icon: FaAws,
  },
];

const statusStyle: Record<Status, string> = {
  Learned: 'border-cyan-400/30 bg-cyan-400/10 text-cyan-300',
  'In progress': 'border-amber-400/30 bg-amber-400/10 text-amber-300',
};

/* ---------- Variants ---------- */

const group: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
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

const line: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: { scaleX: 1, opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: EASE, delay, when: 'beforeChildren', staggerChildren: 0.06 },
  }),
};

const chipGroup: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const chip: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 8 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: EASE } },
};

/* ---------- Component ---------- */

const About: React.FC<AboutProps> = ({ id }) => {
  const reduce = !!useReducedMotion();
  const initial = reduce ? false : 'hidden';
  const view = { once: true, amount: 0.25, margin: '0px 0px -60px 0px' } as const;

  return (
    <section
      id={id}
      className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 px-4 py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <div className="container relative z-10 mx-auto max-w-6xl">
        {/* ---------- Heading ---------- */}
        <motion.div
          variants={group}
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mb-14 text-center"
        >
          <motion.h2 variants={rise} className="mb-4 text-3xl font-bold text-white md:text-4xl">
            About <span className="text-cyan-400">Me</span>
          </motion.h2>
          <motion.div
            variants={line}
            aria-hidden="true"
            className="mx-auto h-1 w-20 origin-center rounded-full bg-gradient-to-r from-cyan-400 to-sky-500"
          />
        </motion.div>

        {/* ---------- Bio + skills ---------- */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Bio */}
          <motion.div
            variants={card}
            custom={0}
            initial={initial}
            whileInView="visible"
            viewport={view}
            className="rounded-3xl border border-cyan-500/20 bg-gray-800/50 p-8 shadow-lg backdrop-blur-md transition-shadow duration-300 hover:shadow-cyan-500/20 lg:col-span-2"
          >
            <motion.h3 variants={rise} className="mb-4 text-xl font-semibold text-white">
              Building tools that people actually use
            </motion.h3>
            <motion.p variants={rise} className="mb-4 leading-relaxed text-gray-300">
              I'm a MERN stack developer with an MCA from NIELIT. I work in IT at a large industrial
              facility, where I build internal tools for inventory, expiry tracking and menu
              nutrition labels, all aimed at removing manual work.
            </motion.p>
            <motion.p variants={rise} className="leading-relaxed text-gray-400">
              Outside work I build and deploy full-stack projects, and I keep learning so each one
              is cleaner and more reliable than the last.
            </motion.p>
          </motion.div>

          {/* Skills */}
          <motion.div
            variants={card}
            custom={0.1}
            initial={initial}
            whileInView="visible"
            viewport={view}
            className="rounded-3xl border border-cyan-500/20 bg-gray-800/50 p-8 shadow-lg backdrop-blur-md transition-shadow duration-300 hover:shadow-cyan-500/20 lg:col-span-3"
          >
            <motion.h3 variants={rise} className="mb-6 text-xl font-semibold text-white">
              Tech I work with
            </motion.h3>

            <div className="space-y-6">
              {skillGroups.map(({ title, items }) => (
                <div key={title}>
                  <motion.p variants={rise} className="mb-3 text-sm font-medium text-gray-400">
                    {title}
                  </motion.p>
                  <motion.ul variants={chipGroup} className="flex flex-wrap gap-2.5">
                    {items.map(({ name, Icon, color }) => (
                      <motion.li
                        key={name}
                        variants={chip}
                        className="flex items-center gap-2 rounded-xl border border-gray-700/60 bg-gray-900/40 px-3.5 py-2 text-sm text-gray-200 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50"
                      >
                        <Icon className="text-lg" style={{ color }} />
                        {name}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ---------- What I've learned ---------- */}
        <motion.div
          variants={group}
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mb-10 mt-20 text-center"
        >
          <motion.h3 variants={rise} className="mb-3 text-2xl font-bold text-white md:text-3xl">
            What I've <span className="text-cyan-400">learned</span>
          </motion.h3>
          <motion.p variants={rise} className="mx-auto max-w-xl text-gray-400">
            Skills I've built through real projects, and what I'm learning right now.
          </motion.p>
        </motion.div>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {learning.map(({ title, note, status, Icon }, i) => (
            <motion.li
              key={title}
              custom={(i % 3) * 0.1}
              variants={card}
              initial={initial}
              whileInView="visible"
              viewport={view}
              className="group flex flex-col rounded-3xl border border-cyan-500/20 bg-gray-800/50 p-6 shadow-lg backdrop-blur-md transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-cyan-500/20"
            >
              <motion.div variants={rise} className="mb-4 flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-xl text-cyan-300 transition-colors duration-300 group-hover:bg-cyan-500/20">
                  <Icon />
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${statusStyle[status]}`}
                >
                  {status === 'Learned' ? (
                    <FaCheck className="text-[10px]" aria-hidden="true" />
                  ) : (
                    <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-60 motion-reduce:animate-none" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-400" />
                    </span>
                  )}
                  {status}
                </span>
              </motion.div>

              <motion.h4 variants={rise} className="mb-2 text-lg font-semibold text-white">
                {title}
              </motion.h4>
              <motion.p variants={rise} className="text-sm leading-relaxed text-gray-400">
                {note}
              </motion.p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
