import React from 'react';
import { motion } from 'framer-motion';
import { FaReact } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  technologies: string[];
}

interface ProjectsProps {
  id: string;
}

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  const projectData: Project[] = [
    { 
      id: 1, 
      title: "Crypto Market Cap", 
      description: "A cryptocurrency tracking application with real-time data visualization and portfolio management features.", 
      link: "https://mycarrent-seven.vercel.app/",
      technologies: ["React", "TypeScript", "Tailwind CSS", "API Integration"]
    },
    { 
      id: 2, 
      title: "Car Rental Platform", 
      description: "A full-featured car rental application with search, filtering, booking, and payment processing capabilities.", 
      link: "https://devwacryptocap.vercel.app/",
      technologies: ["React", "Node.js", "MongoDB", "tailwind"]
    },
    { 
      id: 3, 
      title: "E-Commerce Store", 
      description: "A modern e-commerce platform with product catalog, shopping cart, user authentication, and admin dashboard.", 
      link: "#",
      technologies: ["React", "Redux", "tailwind"]
    },
    { 
      id: 4, 
      title: "Task Management App", 
      description: "A productivity application for managing tasks with drag-and-drop functionality and team collaboration features.", 
      link: "#",
      technologies: ["React", "TypeScript", "Framer Motion", "Mongodb"]
    },
    { 
      id: 5, 
      title: "Weather Dashboard", 
      description: "A weather application providing forecasts, historical data, and interactive maps with location-based services.", 
      link: "#",
      technologies: ["React", "Weather API", "Geolocation"]
    },
    { 
      id: 6, 
      title: "Social Media Analytics", 
      description: "Dashboard for tracking social media metrics with data visualization and customizable reporting features.", 
      link: "#",
      technologies: ["React", "Node.js", "OAuth"]
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
        
        <motion.p 
          className="text-gray-400 text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
         <p className='text-red-500 text-4xl underline font-extrabold'>UNDER-CONSTRUCTION</p>
          Here are some of my recent projects that showcase my skills and experience in web development.
        </motion.p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projectData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 backdrop-blur-md p-6 rounded-3xl border border-cyan-500/20 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer group"
            >
              <div className="mb-4 h-40 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl flex items-center justify-center group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-300">
                <div className="text-5xl text-cyan-400 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  <FaReact />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-cyan-900/30 text-cyan-300 text-xs rounded-full">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
