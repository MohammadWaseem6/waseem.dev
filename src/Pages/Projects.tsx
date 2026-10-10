import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import {
  FaBoxes,
  FaCreditCard,
  FaBitcoin,
  FaCar,
  FaTasks,
  FaCloudSun,
  FaChartLine,
} from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  technologies: string[];
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  iconColor: string;
}

interface ProjectsProps {
  id: string;
}

const EASE = [0.22, 1, 0.36, 1] as const;

const projectData: Project[] = [
  {
    id: 1,
    title: 'Smart Store Keeper',
    description:
      'A full-stack inventory management system with real-time expiry tracking, AI-powered item extraction, analytics dashboard, and role-based authentication.',
    link: 'https://smart-storekeeper.vercel.app',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Recharts', 'JWT'],
    icon: FaBoxes,
    gradient:
      'from-amber-500/10 to-orange-500/10 group-hover:from-amber-500/20 group-hover:to-orange-500/20',
    iconColor: 'text-amber-400',
  },
  {
    id: 2,
    title: 'CreditWise',
    description:
      'A gamified credit card management platform with JWT auth, card CRUD, payment tracking, XP/badges, payoff simulator, charts, and a leaderboard. Deployed on Vercel + Render + Neon PostgreSQL.',
    link: 'https://dev-waseem-credit-wise.vercel.app',
    technologies: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Tailwind CSS', 'Recharts', 'Framer Motion', 'JWT'],
    icon: FaCreditCard,
    gradient:
      'from-purple-500/10 to-pink-500/10 group-hover:from-purple-500/20 group-hover:to-pink-500/20',
    iconColor: 'text-purple-400',
  },
  {
    id: 3,
    title: 'Crypto Market Cap',
    description:
      'A cryptocurrency tracking application with real-time data visualization and portfolio management features.',
    link: 'https://devwacryptocap.vercel.app/',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'API Integration'],
    icon: FaBitcoin,
    gradient:
      'from-yellow-500/10 to-amber-500/10 group-hover:from-yellow-500/20 group-hover:to-amber-500/20',
    iconColor: 'text-yellow-400',
  },
  {
    id: 4,
    title: 'Car Rental Platform',
    description:
      'A full-featured car rental application with search, filtering, booking, and payment processing capabilities.',
    link: 'https://mycarrent-seven.vercel.app/',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    icon: FaCar,
    gradient: 'from-red-500/10 to-rose-500/10 group-hover:from-red-500/20 group-hover:to-rose-500/20',
    iconColor: 'text-red-400',
  },
  {
    id: 5,
    title: 'Task Management App',
    description:
      'A productivity application for managing tasks with drag-and-drop functionality and team collaboration features.',
    link: '#',
    technologies: ['React', 'TypeScript', 'Framer Motion', 'MongoDB'],
    icon: FaTasks,
    gradient:
      'from-green-500/10 to-emerald-500/10 group-hover:from-green-500/20 group-hover:to-emerald-500/20',
    iconColor: 'text-green-400',
  },
  {
    id: 6,
    title: 'Weather Dashboard',
    description:
      'A weather application providing forecasts, historical data, and interactive maps with location-based services.',
    link: '#',
    technologies: ['React', 'Weather API', 'Geolocation'],
    icon: FaCloudSun,
    gradient: 'from-sky-500/10 to-blue-500/10 group-hover:from-sky-500/20 group-hover:to-blue-500/20',
    iconColor: 'text-sky-400',
  },
  {
    id: 7,
    title: 'Social Media Analytics',
    description:
      'Dashboard for tracking social media metrics with data visualization and customizable reporting features.',
    link: '#',
    technologies: ['React', 'Node.js', 'OAuth'],
    icon: FaChartLine,
    gradient:
      'from-indigo-500/10 to-violet-500/10 group-hover:from-indigo-500/20 group-hover:to-violet-500/20',
    iconColor: 'text-indigo-400',
  },
];

/* ---------- Animation variants ---------- */

const headerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const riseVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: EASE },
  },
};

const lineVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: { scaleX: 1, opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

// custom = column position, so each row staggers left → right
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 48, scale: 0.96 },
  visible: (col: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: EASE,
      delay: col * 0.1,
      when: 'beforeChildren',
      staggerChildren: 0.08,
    },
  }),
};

const innerVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

const tagGroupVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const tagVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: EASE } },
};

/* ---------- Card ---------- */

const ProjectCard: React.FC<{ project: Project; index: number; reduce: boolean }> = ({
  project,
  index,
  reduce,
}) => {
  const Icon = project.icon;
  const hasLink = project.link && project.link !== '#';
  const column = index % 3;

  // Cursor-follow spotlight
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <motion.article
      custom={column}
      variants={cardVariants}
      initial={reduce ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.25, margin: '0px 0px -60px 0px' }}
      whileHover={
        reduce
          ? undefined
          : { y: -8, transition: { type: 'spring', stiffness: 300, damping: 22 } }
      }
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-cyan-500/20 bg-gray-800/50 p-6 shadow-lg backdrop-blur-md transition-[border-color,box-shadow] duration-300 hover:border-cyan-400/40 hover:shadow-cyan-500/20"
    >
      {/* spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), rgba(34,211,238,0.12), transparent 60%)',
        }}
      />

      <motion.div
        variants={innerVariants}
        className={`relative mb-4 flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br ${project.gradient} transition-all duration-300`}
      >
        <Icon
          className={`text-6xl ${project.iconColor} opacity-70 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100`}
        />
      </motion.div>

      <motion.h3 variants={innerVariants} className="relative mb-2 text-xl font-semibold text-white">
        {project.title}
      </motion.h3>

      <motion.p variants={innerVariants} className="relative mb-4 text-sm leading-relaxed text-gray-400">
        {project.description}
      </motion.p>

      <motion.ul
        variants={tagGroupVariants}
        className="relative mb-5 flex flex-wrap gap-2"
        aria-label={`${project.title} technologies`}
      >
        {project.technologies.map((tech) => (
          <motion.li
            key={tech}
            variants={tagVariants}
            className="rounded-full bg-cyan-900/30 px-2 py-1 text-xs text-cyan-300"
          >
            {tech}
          </motion.li>
        ))}
      </motion.ul>

      <motion.div variants={innerVariants} className="relative mt-auto">
        {hasLink ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} (opens in a new tab)`}
            className="flex items-center gap-1 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300 focus-visible:outline-none after:absolute after:-inset-[200px] after:content-[''] focus-visible:after:ring-2 focus-visible:after:ring-cyan-400"
          >
            View project
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-500">
            <span className="h-1.5 w-1.5 rounded-full bg-gray-500" aria-hidden="true" />
            Coming soon
          </span>
        )}
      </motion.div>
    </motion.article>
  );
};

/* ---------- Section ---------- */

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  const reduce = !!useReducedMotion();

  return (
    <section
      id={id}
      className="relative bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-20 md:py-28"
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

      <div className="container relative z-10 mx-auto">
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
          variants={headerVariants}
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h2
            variants={riseVariants}
            className="mb-4 text-3xl font-bold text-white md:text-4xl"
          >
            My <span className="text-cyan-400">Projects</span>
          </motion.h2>

          <motion.div
            variants={lineVariants}
            className="mx-auto mb-6 h-1 w-20 origin-center rounded-full bg-gradient-to-r from-cyan-400 to-sky-500"
            aria-hidden="true"
          />

          <motion.p variants={riseVariants} className="mb-5 text-gray-400">
            Here are some of my recent projects that showcase my skills and experience in web
            development.
          </motion.p>

          <motion.div
            variants={riseVariants}
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-sm font-medium text-amber-300"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
            </span>
            Under construction: more projects coming soon
          </motion.div>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {projectData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} reduce={reduce} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
