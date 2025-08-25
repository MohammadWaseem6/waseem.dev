import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gray-800 text-white gap-8 p-4">
            <motion.div
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="w-full sm:w-[80%] md:w-[40%] rounded-3xl p-6 bg-black flex flex-col items-center text-center gap-6 text-gray-300 font-bold border-cyan-100 border-2 shadow-lg shadow-cyan-600 hover:shadow-gray-300 transition-shadow duration-300"
            >
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}

                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >I am a passionate web developer with a strong foundation in front-end technologies. I enjoy creating dynamic, interactive user experiences and continuously learning to tackle new challenges.</motion.p>
            </motion.div>

        </div>
    );
}

export default About;
