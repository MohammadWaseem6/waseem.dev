import React from 'react';
import { motion } from 'framer-motion';
import { ImHtmlFive } from "react-icons/im";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from 'react-icons/ri';

interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 px-4">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h2>
        
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-[40%] rounded-3xl p-8 bg-gray-800/50 backdrop-blur-md border border-cyan-500/20 flex flex-wrap justify-center items-center min-h-[300px] gap-6 text-gray-300 font-bold shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-base sm:text-lg"
            >
              I am a passionate web developer with a strong foundation in front-end technologies. I enjoy creating dynamic, interactive user experiences and continuously learning to tackle new challenges. My goal is to build applications that are both visually appealing and highly functional.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full md:w-[40%] rounded-3xl p-8 bg-gray-800/50 backdrop-blur-md border border-cyan-500/20 flex flex-wrap justify-center items-center min-h-[300px] gap-6 text-gray-300 font-bold shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { Icon: ImHtmlFive, name: "HTML5", color: "#E34F26" },
                { Icon: FaReact, name: "React", color: "#61DAFB" },
                { Icon: FaNodeJs, name: "Node.js", color: "#339933" },
                { Icon: FaGitAlt, name: "Git", color: "#F05032" },
                { Icon: RiTailwindCssFill, name: "Tailwind", color: "#06B6D4" },
                { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" }
              ].map(({ Icon, name, color }, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center group"
                >
                  <Icon className="text-5xl mb-2" style={{ color }} />
                  <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">{name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;