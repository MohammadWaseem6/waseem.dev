import React from 'react';
import { motion } from 'framer-motion';
import { ImHtmlFive } from "react-icons/im";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

import { RiTailwindCssFill } from 'react-icons/ri';

const About: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center min-h-screen bg-gray-800 text-white gap-8 p-4">
            <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full sm:w-[80%] md:w-[40%] rounded-3xl p-6 flex flex-wrap justify-center items-center h-[300px] gap-6 text-gray-300 font-bold shadow-lg
         hover:shadow-cyan-600 hover:shadow-lg transition-all duration-300"
            >
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    className="text-base sm:text-lg md:text-md"
                >
                    <h1 className='text-xl font-bold text-center pt-2'>About Me</h1>
                    I am a passionate web developer with a strong foundation in front-end technologies. I enjoy creating dynamic, interactive user experiences and continuously learning to tackle new challenges.
                </motion.p>
            </motion.div>



            <motion.div
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}

                className="w-full sm:w-[80%] md:w-[40%] rounded-3xl p-6 flex flex-wrap justify-center items-center h-[300px] gap-6 text-gray-300 font-bold shadow-lg
        hover:shadow-cyan-600 hover:shadow-xg transition-all duration-300
        "
            >


                {[ImHtmlFive, FaReact, FaNodeJs, FaGitAlt, RiTailwindCssFill, SiTypescript].map((Icon, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.2, color: "#06b6d4" }}
                        transition={{ duration: 0.3 }}
                    >
                        <Icon className="text-6xl text-cyan-500" />
                    </motion.div>
                ))}
            </motion.div>


        </div>
    );
};

export default About;
