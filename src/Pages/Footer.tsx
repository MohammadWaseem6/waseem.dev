import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaGitAlt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white">Waseem</h3>
            <p className="text-gray-400">Frontend Developer</p>
          </div>
          
          <div className="flex gap-6 mb-6 md:mb-0">
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.2, color: "#06b6d4" }}
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <FaReact className="text-xl" />
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.2, color: "#06b6d4" }}
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <FaGitAlt className="text-xl" />
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.2, color: "#06b6d4" }}
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <SiTypescript className="text-xl" />
            </motion.a>
          </div>
          
          <div>
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Waseem. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;