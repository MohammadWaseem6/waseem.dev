import React from 'react'
import { motion } from 'framer-motion'

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
}

const projectData: Project[] = [
  { id: 1, title: "Project 1", description: "Description of Project 1", link: "https://devwacryptocap.vercel.app/" },
  { id: 2, title: "Project 2", description: "Description of Project 2", link: "https://mycarrent-seven.vercel.app/" },
  { id: 3, title: "Project 3", description: "Description of Project 3", link: "https://mycarrent-seven.vercel.app/" },
  { id: 4, title: "Project 4", description: "Description of Project 4", link: "https://mycarrent-seven.vercel.app/" },
  { id: 5, title: "Project 5", description: "Description of Project 5", link: "https://mycarrent-seven.vercel.app/" },
  { id: 6, title: "Project 6", description: "Description of Project 6", link: "https://mycarrent-seven.vercel.app/" },
];

const Projects: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-white p-6 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-gray-900 to-cyan-900 animate-gradient" />

      {/* Overlay code background image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/codes.png')" }}
      />

      {/* Floating particles */}
      <motion.div
        className="absolute w-3 h-3 bg-cyan-400 rounded-full"
        animate={{ y: [0, -50, 0], opacity: [1, 0.5, 1] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        style={{ top: "30%", left: "10%" }}
      />
      <motion.div
        className="absolute w-2 h-2 bg-purple-400 rounded-full"
        animate={{ y: [0, -70, 0], opacity: [1, 0.3, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        style={{ top: "60%", left: "80%" }}
      />

      {/* Title */}
      <h1 className="text-3xl font-bold mb-8 z-10">My Projects</h1>
      
      {/* Projects grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full z-10">
        {projectData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ rotate: 5, scale: 1.05 }}
            className="bg-gray-800 bg-opacity-80 p-6 rounded-3xl shadow-lg hover:shadow-cyan-600 transition-shadow duration-300 cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
