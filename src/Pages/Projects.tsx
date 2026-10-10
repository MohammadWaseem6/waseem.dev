import React from 'react';
import { motion } from 'framer-motion';
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

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  const projectData: Project[] = [
    {
      id: 1,
      title: "Smart Store Keeper",
      description:
        "A full-stack inventory management system with real-time expiry tracking, AI-powered item extraction, analytics dashboard, and role-based authentication.",
      link: "https://smart-storekeeper.vercel.app",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Recharts", "JWT"],
      icon: FaBoxes,
      gradient: "from-amber-500/10 to-orange-500/10 group-hover:from-amber-500/20 group-hover:to-orange-500/20",
      iconColor: "text-amber-400",
    },
    {
      id: 2,
      title: "CreditWise",
      description:
        "A gamified credit card management platform with JWT auth, card CRUD, payment tracking, XP/badges, payoff simulator, charts, and a leaderboard. Deployed on Vercel + Render + Neon PostgreSQL.",
      link: "https://dev-waseem-credit-wise.vercel.app",
      technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Tailwind CSS", "Recharts", "Framer Motion", "JWT"],
      icon: FaCreditCard,
      gradient: "from-purple-500/10 to-pink-500/10 group-hover:from-purple-500/20 group-hover:to-pink-500/20",
      iconColor: "text-purple-400",
    },
    {
      id: 3,
      title: "Crypto Market Cap",
      description:
        "A cryptocurrency tracking application with real-time data visualization and portfolio management features.",
      link: "https://mycarrent-seven.vercel.app/",
      technologies: ["React", "TypeScript", "Tailwind CSS", "API Integration"],
      icon: FaBitcoin,
      gradient: "from-yellow-500/10 to-amber-500/10 group-hover:from-yellow-500/20 group-hover:to-amber-500/20",
      iconColor: "text-yellow-400",
    },
    {
      id: 4,
      title: "Car Rental Platform",
      description:
        "A full-featured car rental application with search, filtering, booking, and payment processing capabilities.",
      link: "https://devwacryptocap.vercel.app/",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind"],
      icon: FaCar,
      gradient: "from-red-500/10 to-rose-500/10 group-hover:from-red-500/20 group-hover:to-rose-500/20",
      iconColor: "text-red-400",
    },
    {
      id: 5,
      title: "Task Management App",
      description:
        "A productivity application for managing tasks with drag-and-drop functionality and team collaboration features.",
      link: "#",
      technologies: ["React", "TypeScript", "Framer Motion", "MongoDB"],
      icon: FaTasks,
      gradient: "from-green-500/10 to-emerald-500/10 group-hover:from-green-500/20 group-hover:to-emerald-500/20",
      iconColor: "text-green-400",
    },
    {
      id: 6,
      title: "Weather Dashboard",
      description:
        "A weather application providing forecasts, historical data, and interactive maps with location-based services.",
      link: "#",
      technologies: ["React", "Weather API", "Geolocation"],
      icon: FaCloudSun,
      gradient: "from-sky-500/10 to-blue-500/10 group-hover:from-sky-500/20 group-hover:to-blue-500/20",
      iconColor: "text-sky-400",
    },
    {
      id: 7,
      title: "Social Media Analytics",
      description:
        "Dashboard for tracking social media metrics with data visualization and customizable reporting features.",
      link: "#",
      technologies: ["React", "Node.js", "OAuth"],
      icon: FaChartLine,
      gradient: "from-indigo-500/10 to-violet-500/10 group-hover:from-indigo-500/20 group-hover:to-violet-500/20",
      iconColor: "text-indigo-400",
    },
  ];

  return (
    <section id={id} className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 px-4">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

      <div className="container mx-auto relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          My <span className="text-cyan-400">Projects</span>
        </motion.h2>

        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p className="text-red-500 text-4xl underline font-extrabold mb-4">
            UNDER-CONSTRUCTION
          </p>
          <p className="text-gray-400">
            Here are some of my recent projects that showcase my skills and experience in web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projectData.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="bg-gray-800/50 backdrop-blur-md p-6 rounded-3xl border border-cyan-500/20 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer group relative"
              >
                <div
                  className={`mb-4 h-40 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center transition-all duration-300`}
                >
                  <Icon
                    className={`text-6xl ${project.iconColor} opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}
                  />
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-cyan-900/30 text-cyan-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
                >
                  View Project <span>→</span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
